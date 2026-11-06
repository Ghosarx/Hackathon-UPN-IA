-- Ellie Life Enterprise / Piura
-- Esquema de Base de Datos y Políticas de Seguridad RLS
-- Ejecutar en Supabase SQL Editor.
-- No contiene claves ni secretos.

create extension if not exists postgis;
create extension if not exists pgcrypto;

do $$ begin
  create type public.app_role as enum ('ciudadano','moderador','autoridad','administrador');
exception when duplicate_object then null; end $$;

do $$ begin
  create type public.incident_status as enum ('recibido','en_revision','requiere_info','verificado','descartado','cerrado');
exception when duplicate_object then null; end $$;

do $$ begin
  create type public.hazard_level as enum ('bajo','medio','alto','critico');
exception when duplicate_object then null; end $$;

do $$ begin
  create type public.alert_status as enum ('borrador','pendiente_aprobacion','aprobada','programada','enviada','caducada','cancelada');
exception when duplicate_object then null; end $$;

-- 1. Perfiles de usuario
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  role public.app_role not null default 'ciudadano',
  display_name text,
  phone text,
  created_at timestamptz not null default now()
);

-- 2. Registros de consentimiento granular
create table if not exists public.consent_records (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  consent_version text not null default 'piura-v1',
  notifications_opt_in boolean not null default false,
  location_opt_in boolean not null default false,
  sms_opt_in boolean not null default false,
  ai_processing_opt_in boolean not null default true,
  granted_at timestamptz,
  revoked_at timestamptz,
  created_at timestamptz not null default now()
);

-- 3. Incidentes comunitarios
create table if not exists public.incidents (
  id uuid primary key default gen_random_uuid(),
  public_code text not null unique,
  reporter_id uuid references auth.users(id) on delete set null,
  type text not null,
  description text not null check (char_length(description) between 3 and 2000),
  district text not null default 'Piura',
  sector text,
  location geography(point,4326),
  location_precision_m integer not null default 500,
  location_shared boolean not null default false,
  people_needing_help boolean not null default false,
  synthetic boolean not null default false,
  source text not null default 'citizen',
  status public.incident_status not null default 'recibido',
  hazard_level public.hazard_level not null default 'bajo',
  confidence numeric(4,3) check (confidence between 0 and 1),
  ai_provider text,
  ai_model text,
  ai_used boolean not null default false,
  duplicate_of uuid references public.incidents(id) on delete set null,
  expires_at timestamptz not null default (now() + interval '24 hours'),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists incidents_location_gix on public.incidents using gist(location);
create index if not exists incidents_status_level_idx on public.incidents(status,hazard_level);

-- 4. Directorio de autoridades oficiales de Piura
create table if not exists public.authorities (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  category text not null,
  phone text not null,
  region text not null default 'Piura',
  verified boolean not null default false,
  enabled boolean not null default true,
  notes text,
  created_at timestamptz not null default now()
);

-- 5. Suscripciones para alertas preventivas
create table if not exists public.subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  channel text not null check (channel in ('push','sms')),
  endpoint text,
  phone text,
  location geography(point,4326),
  radius_m integer not null default 2000 check (radius_m between 100 and 2000),
  district text not null default 'Piura',
  active boolean not null default true,
  consent_id uuid references public.consent_records(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists subscriptions_location_gix on public.subscriptions using gist(location);

-- 6. Alertas comunitarias
create table if not exists public.alerts (
  id uuid primary key default gen_random_uuid(),
  incident_id uuid not null references public.incidents(id) on delete restrict,
  title text not null,
  body text not null check (char_length(body) <= 320),
  hazard_level public.hazard_level not null,
  status public.alert_status not null default 'borrador',
  radius_m integer not null default 2000 check (radius_m between 100 and 2000),
  audience_count integer not null default 0,
  approved_by uuid references auth.users(id) on delete set null,
  approved_at timestamptz,
  scheduled_at timestamptz,
  expires_at timestamptz not null default (now() + interval '2 hours'),
  created_at timestamptz not null default now()
);

-- 7. Registro y trazabilidad de entregas
create table if not exists public.alert_deliveries (
  id uuid primary key default gen_random_uuid(),
  alert_id uuid not null references public.alerts(id) on delete cascade,
  subscription_id uuid not null references public.subscriptions(id) on delete restrict,
  channel text not null check (channel in ('push','sms')),
  status text not null default 'pending',
  provider_message_id text,
  error_message text,
  sent_at timestamptz,
  unique(alert_id, subscription_id, channel)
);

-- 8. Trazabilidad y auditoría
create table if not exists public.audit_events (
  id uuid primary key default gen_random_uuid(),
  actor_id uuid references auth.users(id) on delete set null,
  event_type text not null,
  entity_type text not null,
  entity_id uuid,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

-- Inserción inicial de autoridades (marcadas como no verificadas por defecto)
insert into public.authorities(name,category,phone,region,verified,notes) values
('Policía Nacional del Perú','Emergencias','105','Piura',false,'Verificar vigencia antes de producción'),
('Comisaría de Piura','Policía','307641','Piura',false,'Número proporcionado por el organizador'),
('Comisaría de Piura - celular','Policía','980121525','Piura',false,'Número proporcionado por el organizador'),
('Radio Patrulla','Policía','957881252','Piura',false,'Número proporcionado por el organizador'),
('Bomberos','Emergencias','116','Piura',false,'Verificar vigencia antes de producción'),
('Bomberos Santa Rosa N° 79','Bomberos','(073) 355555','Piura',false,'Número proporcionado por el organizador'),
('SAMU Piura','Salud','106','Piura',false,'Verificar vigencia antes de producción'),
('SAMU Piura - celular 1','Salud','989174242','Piura',false,'Número proporcionado por el organizador'),
('SAMU Piura - celular 2','Salud','989174238','Piura',false,'Número proporcionado por el organizador'),
('Defensa Civil / INDECI','Gestión de riesgo','115','Piura',false,'Verificar vigencia antes de producción'),
('Defensa Civil / Gobierno Regional','Gestión de riesgo','(073) 284600','Piura',false,'Verificar vigencia antes de producción'),
('Línea 100','Protección','100','Piura',false,'Verificar vigencia antes de producción'),
('Serenazgo Piura','Seguridad ciudadana','980900384','Piura',false,'Número proporcionado por el organizador'),
('Serenazgo Piura','Seguridad ciudadana','(073) 302490','Piura',false,'Número proporcionado por el organizador'),
('Serenazgo 26 de Octubre','Seguridad ciudadana','966638769','Piura',false,'Número proporcionado por el organizador'),
('Hospital Santa Rosa','Salud','(073) 361509','Piura',false,'Verificar vigencia antes de producción'),
('Hospital Regional / José Cayetano Heredia','Salud','(073) 287970','Piura',false,'Verificar vigencia antes de producción'),
('Hospital Regional / José Cayetano Heredia','Salud','(073) 321001','Piura',false,'Verificar vigencia antes de producción'),
('EsSalud Hospital Zonal','Salud','(073) 321381','Piura',false,'Verificar vigencia antes de producción'),
('Orientación en Salud MINSA','Salud','113','Piura',false,'Verificar vigencia antes de producción'),
('Gobierno Regional de Piura','Autoridad regional','(073) 284600','Piura',false,'Verificar vigencia antes de producción')
on conflict do nothing;

-- Función geoespacial segura para encontrar suscriptores dentro del radio
create or replace function public.find_nearby_subscribers(
  p_lat double precision,
  p_lon double precision,
  p_radius_m integer default 2000
)
returns table(subscription_id uuid, user_id uuid, channel text, endpoint text, phone text, distance_m double precision)
language sql security definer set search_path = public
as $$
  select s.id, s.user_id, s.channel, s.endpoint, s.phone,
    st_distance(s.location, st_setsrid(st_makepoint(p_lon,p_lat),4326)::geography)
  from public.subscriptions s
  join public.consent_records c on c.id=s.consent_id
  where s.active=true
    and c.notifications_opt_in=true
    and (s.channel <> 'sms' or c.sms_opt_in=true)
    and s.location is not null
    and st_dwithin(s.location, st_setsrid(st_makepoint(p_lon,p_lat),4326)::geography, least(p_radius_m,2000));
$$;

-- ----------------------------------------------------
-- POLÍTICAS DE SEGURIDAD (ROW LEVEL SECURITY - RLS)
-- ----------------------------------------------------

alter table public.profiles enable row level security;
alter table public.consent_records enable row level security;
alter table public.incidents enable row level security;
alter table public.authorities enable row level security;
alter table public.subscriptions enable row level security;
alter table public.alerts enable row level security;
alter table public.alert_deliveries enable row level security;
alter table public.audit_events enable row level security;

-- Función para determinar el rol del usuario autenticado
create or replace function public.current_user_role()
returns public.app_role
language sql stable
as $$
  select coalesce(
    (select role from public.profiles where id = auth.uid()),
    'ciudadano'::public.app_role
  );
$$;

-- RLS: PROFILES
create policy "profiles_select_own_or_staff" on public.profiles
  for select using (id = auth.uid() or public.current_user_role() in ('moderador', 'autoridad', 'administrador'));

create policy "profiles_update_own_or_admin" on public.profiles
  for update using (id = auth.uid() or public.current_user_role() = 'administrador');

-- RLS: CONSENT_RECORDS (Gestión por el ciudadano)
create policy "consent_select_own" on public.consent_records
  for select using (user_id = auth.uid() or public.current_user_role() in ('moderador', 'administrador'));

create policy "consent_insert_own" on public.consent_records
  for insert with check (user_id = auth.uid());

create policy "consent_update_own" on public.consent_records
  for update using (user_id = auth.uid() or public.current_user_role() = 'administrador');

create policy "consent_delete_own" on public.consent_records
  for delete using (user_id = auth.uid() or public.current_user_role() = 'administrador');

-- RLS: INCIDENTS (Reportes ciudadanos)
-- Ciudadano puede crear sus propios reportes (o reportes de emergencia)
create policy "incidents_insert_citizen" on public.incidents
  for insert with check (reporter_id is null or reporter_id = auth.uid());

-- Ciudadano puede ver sus reportes; Moderador/Admin ven todos; Autoridad ve incidentes verificados o en revisión; Ciudadanos ven verificados públicos
create policy "incidents_select_policy" on public.incidents
  for select using (
    reporter_id = auth.uid()
    or public.current_user_role() in ('moderador', 'administrador')
    or (public.current_user_role() = 'autoridad' and status in ('verificado', 'en_revision'))
    or (status = 'verificado')
  );

-- Moderador, Autoridad y Admin pueden actualizar estados de incidentes
create policy "incidents_update_staff" on public.incidents
  for update using (
    public.current_user_role() in ('moderador', 'autoridad', 'administrador')
  );

-- Ciudadano puede eliminar sus propios reportes (derecho al olvido)
create policy "incidents_delete_own" on public.incidents
  for delete using (
    reporter_id = auth.uid() or public.current_user_role() = 'administrador'
  );

-- RLS: AUTHORITIES (Directorio)
create policy "authorities_select_all" on public.authorities
  for select using (true);

create policy "authorities_admin_only" on public.authorities
  for all using (public.current_user_role() = 'administrador');

-- RLS: SUBSCRIPTIONS (Suscripciones opt-in)
create policy "subscriptions_select_own" on public.subscriptions
  for select using (user_id = auth.uid() or public.current_user_role() = 'administrador');

create policy "subscriptions_insert_own" on public.subscriptions
  for insert with check (user_id = auth.uid());

create policy "subscriptions_update_own" on public.subscriptions
  for update using (user_id = auth.uid() or public.current_user_role() = 'administrador');

create policy "subscriptions_delete_own" on public.subscriptions
  for delete using (user_id = auth.uid() or public.current_user_role() = 'administrador');

-- RLS: ALERTS (Control humano de alertas)
-- Moderador y Admin preparan y gestionan; Autoridades y Ciudadanos solo ven alertas aprobadas/activas no caducadas
create policy "alerts_select_active_or_staff" on public.alerts
  for select using (
    public.current_user_role() in ('moderador', 'administrador')
    or (public.current_user_role() = 'autoridad' and status in ('aprobada', 'programada', 'enviada'))
    or (status in ('aprobada', 'programada', 'enviada') and expires_at > now())
  );

create policy "alerts_insert_moderator" on public.alerts
  for insert with check (public.current_user_role() in ('moderador', 'administrador'));

create policy "alerts_update_moderator" on public.alerts
  for update using (public.current_user_role() in ('moderador', 'administrador'));

-- RLS: ALERT_DELIVERIES
create policy "deliveries_staff_only" on public.alert_deliveries
  for select using (public.current_user_role() in ('moderador', 'administrador'));

-- RLS: AUDIT_EVENTS
create policy "audit_select_staff" on public.audit_events
  for select using (public.current_user_role() in ('administrador', 'moderador'));

create policy "audit_insert_any" on public.audit_events
  for insert with check (true);
