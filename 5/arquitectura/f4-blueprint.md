# Blueprint seguro F4 — prototipo ejecutable (preparación)

**Estado:** blueprint documental; F4 no iniciada y no se crea ningún prototipo en esta tarea.
**Regla de activación:** ejecutar F4 únicamente después de una nueva decisión explícita `PASS` de F3, con timestamp. El acta debe demostrar score >=80/100, cero blockers críticos y 100% de controles obligatorios con evidencia ejecutada.

## Preflight obligatorio

El futuro ejecutor debe leer `hackathon/arquitectura/ronda-7-puerta-final.md` (o el acta posterior que la reemplace) y abortar con exit distinto de cero si la decisión no es exactamente `PASS`. No se permite inferir PASS desde el score ni maquillar un `NO PASS/BLOCKED`.

Pseudoflujo:

```text
acta = read(actaF3)
if decision(acta) != PASS: print("F4=BLOCKED; no ejecutar"); exit(2)
assert score >= 80
assert blockersCriticos == 0
assert controlesObligatorios == 100%
continuar()
```

El estado conocido al redactar este blueprint es `NO PASS/BLOCKED`; por tanto, el preflight impediría cualquier ejecución.

## Estructura prevista (no creada todavía)

```text
hackathon/f4/
  fixture.mjs       # sólo mensajes propios sintéticos
  pipeline.mjs      # baseline, extracción y controles deterministas
  run-f4.mjs        # preflight, ejecución, checks y limpieza
  README.md         # límites, seguridad y modo de uso
  evidence.log      # generado sólo tras PASS
```

La carpeta y los archivos anteriores son diseño, no entregables existentes de F4.

## Datos y pipeline

- `fixture.mjs`: exactamente cinco mensajes inventados, con prefijo `Sintético:`; sin nombres, teléfonos, coordenadas precisas, identificadores personales, imágenes ni datos obtenidos de personas.
- `pipeline.mjs`: calcular baseline y extracción; conservar campos mínimos (`id`, `type`, `sector`, `confidence`, `missing`); detectar posible duplicado sin publicar ni asignar recursos.
- Umbral de abstención: una entrada con confianza insuficiente debe producir `abstained: true` y quedar pendiente, nunca convertirse en alerta.
- Moderación: sólo estado simulado local (`confirmada simulada`, `pendiente: abstener` o `sin acción`); no contactar moderadores reales.
- Todo el estado vive en memoria. No red, APIs, telemetría, caché persistente ni archivo de estado. Limpiar referencias antes de terminar.
- Salida debe declarar `DATA=SINTÉTICA`, `NETWORK=none`, `MODE=memory-only` y advertir: simulación; sin alerta oficial, publicación ni asignación de recursos.

## Comandos y evidencia requerida (sólo después de PASS)

```powershell
node hackathon/f4/run-f4.mjs > hackathon/f4/evidence-1.log
node hackathon/f4/run-f4.mjs > hackathon/f4/evidence-2.log
Get-FileHash hackathon/f4/evidence-1.log -Algorithm SHA256
Get-FileHash hackathon/f4/evidence-2.log -Algorithm SHA256
Compare-Object (Get-Content hackathon/f4/evidence-1.log) (Get-Content hackathon/f4/evidence-2.log)
```

La verificación exige exit 0 en ambas ejecuciones, hash/contenido idéntico, y checks explícitos para `fiveSynthetic`, `duplicate`, `abstention`, `baselinePresent`, `noStateFileBefore`, `noStateFileAfter` y `clearedInMemory`. Un diff no vacío o cualquier archivo de estado hace fallar la evidencia.

Registrar en el dossier: acta PASS y timestamp; comandos exactos y códigos de salida; logs completos y hashes; inventario de archivos; límites de red/OS; confirmación de que no hubo PII, alerta, publicación ni asignación de recursos. La evidencia demuestra sólo el fixture local y no certifica operación de campo.
