# 🗺️ XMLShield - Roadmap
## Plan de Versiones 2026-2027

> **Documento vivo** - Se actualiza cada release
> **Última revisión:** Junio 2026
> **Versión actual:** v2.3 — Roadmap original completado; v2.4-v2.6 planificadas

---

## 📍 Estado Actual

### v2.0 - "The Foundation" ✅ COMPLETADO
**Fecha de release:** Febrero 2026

#### Features Implementadas
- ✅ Refactorización completa del diseño
- ✅ Panel dividido lado a lado
- ✅ Gradientes modernos en header
- ✅ Botón de descarga de archivos
- ✅ Mejoras en modo oscuro
- ✅ Responsive design mejorado
- ✅ KPIs con emojis
- ✅ Feedback visual en acciones

#### Métricas Alcanzadas
- **Tamaño:** ~50KB
- **Líneas de código:** ~500
- **Tiempo de auditoría:** ~15 minutos
- **Compatibilidad:** Chrome 90+, Firefox 88+, Safari 14+, Edge 90+

---

## 🎯 Versiones Completadas

### v2.1 - "Quick Wins" ✅ COMPLETADO
**Fecha de release:** Junio 2026
**Esfuerzo:** 1-2 semanas
**Prioridad:** Alta

#### Objetivos
Mejoras rápidas que añaden valor inmediato sin aumentar complejidad significativamente.

#### Features Planificadas

##### 1. Errores Detallados con Número de Línea ✅ IMPLEMENTADO
**Complejidad:** Baja | **Líneas:** ~15 | **Tiempo:** 2-3 días

**Valor:** Debugging más rápido, especialmente para XMLs complejos.
**Implementación:** `parseXMLError()` extrae línea y columna del `parsererror` nativo del `DOMParser`. Compatible Chrome, Firefox, Safari y Edge.

##### 2. Estadísticas del Documento ✅ IMPLEMENTADO
**Complejidad:** Baja | **Líneas:** ~20 | **Tiempo:** 2-3 días
- Total de elementos
- Profundidad máxima del árbol
- Total de atributos

**Implementación:** `collectStats()` recorre el árbol DOM ya parseado al formatear/minificar/convertir y muestra los valores en la fila de KPIs (sin segundo parseo).

##### 3. Líneas Numeradas en Editores ✅ IMPLEMENTADO
**Complejidad:** Media | **Líneas:** ~40 | **Tiempo:** 3-4 días
- Gutter con números de línea en entrada y salida
- Sincronización con scroll (`scrollTop`)
- Compatible con modo oscuro y todos los temas
- Se desactiva automáticamente a partir de 30.000 líneas para no degradar rendimiento

##### 4. Undo/Redo Básico ✅ IMPLEMENTADO
**Complejidad:** Media | **Líneas:** ~30 | **Tiempo:** 3-5 días

**Atajos:** Ctrl+Z (undo), Ctrl+Y (redo)
**Limitación:** Solo en memoria de sesión (no persiste al recargar)
**Implementación:** Stack doble (`undoStack`/`redoStack`) que guarda el estado del editor antes de cada operación destructiva (Limpiar, arrastrar archivo). Ctrl+Z/Y activos cuando el foco está fuera del textarea para no interferir con el undo nativo del navegador.

##### 5. Advertencia para Archivos Grandes ✅ IMPLEMENTADO
**Complejidad:** Muy Baja | **Líneas:** ~15 | **Tiempo:** 1 día
- Alert si archivo >50MB
- Mensaje sugeriendo herramientas especializadas
- Opción de continuar de todos modos

#### Métricas Objetivo v2.1
- **Tamaño:** ~60KB (+10KB vs v2.0)
- **Líneas:** ~600-650 (+100-150 vs v2.0)
- **Tiempo de auditoría:** ~20 minutos (+5 min vs v2.0)

---

### v2.2 - "Productivity Boost" ✅ COMPLETADO
**Fecha de release:** Junio 2026
**Esfuerzo:** 3-4 semanas
**Prioridad:** Media

#### Features Implementadas

##### 1. Conversión XML ⇄ JSON ✅ IMPLEMENTADO
**Complejidad:** Alta | **Líneas:** ~80 | **Tiempo:** 1-1.5 semanas

**Funcionalidad:**
- Un solo botón que detecta la entrada: XML → JSON o JSON → XML
- Convención: atributos como `"@nombre"`, texto mixto como `"#text"`, elementos repetidos agrupados en arrays
- Conversión de ida y vuelta sin pérdida para casos comunes
- Respeta la sangría configurada (espacios o tabs)

##### 2. Búsqueda Mejorada con Highlight ✅ IMPLEMENTADO
**Complejidad:** Media | **Líneas:** ~80 | **Tiempo:** 4-5 días

**Features:**
- Barra de búsqueda en la fila de opciones
- Highlight de todas las coincidencias en la vista Resaltada (máx. 500 marcas)
- Contador (X de Y resultados)
- Navegación: siguiente/anterior con scroll automático a la coincidencia

##### 3. Presets de Configuración vía URL ✅ IMPLEMENTADO
**Complejidad:** Baja | **Líneas:** ~40 | **Tiempo:** 2-3 días

**Parámetros:** `indent`, `tabs`, `preserve`, `keepws`, `compact`, `theme`, `view`

**Ejemplo:**
```
index.html?indent=4&tabs=0&theme=monokai&view=arbol
```

El botón "🔗 Copiar config" genera el enlace con la configuración actual.

##### 4. Copiar como String Escapado ✅ IMPLEMENTADO
**Complejidad:** Baja | **Líneas:** ~10 | **Tiempo:** 2 días

**Formatos (selector junto al botón Copiar):**
- JavaScript / Python: string entre comillas dobles con escapes (`\n`, `\"`, `\\`)
- Java: concatenación línea a línea con `+`

#### Métricas Objetivo v2.2
- **Tamaño:** ~75-80KB (+15-20KB vs v2.1)
- **Líneas:** ~750-800 (+150-200 vs v2.1)

---

### v2.3 - "Navigation & UX" ✅ COMPLETADO
**Fecha de release:** Junio 2026
**Esfuerzo:** 1-2 meses
**Prioridad:** Baja

#### Features Implementadas

##### 1. Vista de Árbol Colapsable (Solo Lectura) ✅ IMPLEMENTADO
**Complejidad:** Alta | **Líneas:** ~40 | **Tiempo:** 2-3 semanas

**Implementación:**
- Tercer modo del botón de vista (Resaltada → Texto → Árbol)
- Collapse/expand de nodos con `<details>`/`<summary>` nativos (cero JS para colapsar)
- Atributos y texto visibles en cada nodo

**Limitaciones:**
- Solo lectura
- Sujeta al mismo límite de 15MB que la vista resaltada

##### 2. Ir a Línea Específica (Ctrl+G) ✅ IMPLEMENTADO
**Complejidad:** Baja | **Líneas:** ~20 | **Tiempo:** 2-3 días

Selecciona la línea completa en el editor de entrada y hace scroll hasta ella. Valida el rango y muestra error si la línea no existe.

##### 3. Temas Visuales Adicionales ✅ IMPLEMENTADO
**Complejidad:** Media | **Líneas:** ~50 | **Tiempo:** 4-5 días

**Temas (selector en la barra de controles):**
- High Contrast (accesibilidad)
- Solarized (claro)
- Monokai

Cada tema solo define variables CSS; las reglas compartidas las aplican. Combinables con los presets de URL (`?theme=monokai`).

#### Métricas Alcanzadas v2.3
- **Tamaño:** ~50KB (la mitad del límite máximo de 100KB)
- **Líneas:** ~1470
- **Tiempo de auditoría:** ~30 minutos (límite)

---

## 🎯 Versiones Planificadas

### v2.4 - "Polish & Trust" 🔨 EN PROGRESO
**Fecha estimada:** Junio-Julio 2026
**Esfuerzo:** 1-2 semanas
**Prioridad:** Alta

#### Objetivos
Pagar deuda técnica detectada en la auditoría post-v2.3, establecer una red de tests de regresión, y sumar quick wins de alto valor.

#### Bugfixes (deuda técnica)

##### 1. Declaración XML y comentarios top-level se pierden al formatear/minificar ✅ IMPLEMENTADO
**Complejidad:** Baja | **Líneas:** ~15

`prettyFormat` recorría desde `documentElement`, descartando la declaración `<?xml ...?>` (que `DOMParser` consume y no expone como nodo) y cualquier comentario o PI fuera del elemento raíz. Es pérdida de datos silenciosa.

##### 2. El resaltado no colorea nombres de tags con atributos ✅ IMPLEMENTADO
**Complejidad:** Muy Baja | **Líneas:** ~2

El grupo `[^\s\S]*?` del regex de tags en `highlightXML` es un conjunto vacío imposible de matchear: solo los tags sin atributos recibían color en el nombre.

##### 3. `minify` puede corromper CDATA, comentarios y texto con `=` ✅ IMPLEMENTADO
**Complejidad:** Media | **Líneas:** ~30

Los regex de limpieza (`>\s+<`, `\s*=\s*`) operaban sobre el string serializado completo, incluyendo el interior de `<![CDATA[...]]>`, comentarios, y nodos de texto con signos `=`.

#### Infraestructura

##### 4. Harness de tests (`tests.html`) ✅ IMPLEMENTADO — 37 tests
**Complejidad:** Media | **Líneas:** ~330 (archivo separado, solo desarrollo)

Suite de regresión sin frameworks que ejercita `prettyFormat`, `minify`, `xmlToJson`/`jsonToXml`, `highlightXML` y `asEscapedString` vía un iframe. **No se distribuye:** el producto sigue siendo únicamente `index.html`. Se sirve con `python -m http.server` para desarrollo.

#### Quick Wins

##### 5. Botón "Usar salida como entrada" 🔲
**Complejidad:** Muy Baja | **Líneas:** ~15
Encadenar operaciones (formatear → convertir → minificar) sin copiar/pegar a mano.

##### 6. Botón "Abrir archivo" 🔲
**Complejidad:** Muy Baja | **Líneas:** ~15
`<input type="file">` además del drag & drop — imprescindible para móvil/tablet, donde no existe arrastrar y soltar.

##### 7. Validación en vivo 🔲
**Complejidad:** Baja | **Líneas:** ~30
Indicador ✓/✗ con línea de error mientras se escribe (debounced), sin pulsar Formatear.

##### 8. Tema automático (`prefers-color-scheme`) 🔲
**Complejidad:** Muy Baja | **Líneas:** ~5
Arrancar en oscuro si el sistema operativo lo está.

##### 9. Recordar configuración (opt-in) 🔲
**Complejidad:** Baja | **Líneas:** ~20
Checkbox explícito "recordar mis preferencias" con `localStorage`. 100% local y opt-in: no compromete la filosofía sin-tracking, pero se documenta visiblemente.

#### Métricas Objetivo v2.4
- **Tamaño:** ~55KB
- **Líneas:** ~1600
- **Tests:** 30+ casos de regresión pasando

---

### v2.5 - "Power Tools" 📅 Q3 2026
**Fecha estimada:** Agosto-Septiembre 2026
**Esfuerzo:** 3-4 semanas
**Prioridad:** Media

#### Features Planificadas

##### 1. XPath queries 🔲
**Complejidad:** Media | **Líneas:** ~100-150

Reevaluado: estaba descartado para v3.0, pero el navegador ya trae `document.evaluate()` **nativo** — la implementación es solo UI + resaltado de resultados. Pasa el Test de 4 Preguntas (4/4): cero dependencias, offline, <200 líneas, auditable.

- Input de expresión XPath sobre la entrada
- Lista de nodos coincidentes con conteo
- Click en resultado → resalta/salta en la salida

##### 2. Buscar y reemplazar en la entrada 🔲
**Complejidad:** Media | **Líneas:** ~60

La búsqueda actual solo cubre la salida. Reemplazo simple y "reemplazar todo" sobre el editor de entrada, con integración al historial de Undo.

##### 3. Conversión XML → CSV 🔲
**Complejidad:** Media | **Líneas:** ~80

Para XMLs tabulares (exportaciones de BD/APIs — caso de uso primario #2 de SCOPE.md). Detecta el elemento repetido dominante y aplana atributos/hijos a columnas. Sin inferencia compleja de schema.

##### 4. Opciones de formato extra 🔲
**Complejidad:** Baja | **Líneas:** ~40
- Ordenar atributos alfabéticamente (checkbox)
- Eliminar comentarios al minificar (checkbox)

#### Métricas Objetivo v2.5
- **Tamaño:** ~65KB
- **Líneas:** ~1900

---

### v2.6 - "Compare" 📅 Q4 2026
**Fecha estimada:** Octubre-Diciembre 2026
**Esfuerzo:** 1-2 meses
**Prioridad:** Media

#### Features Planificadas

##### 1. Diff/comparación de XMLs 🔲
**Complejidad:** Alta | **Líneas:** ~300-400

Reevaluado: era la feature v3.0 más alineada con los casos de uso documentados (validar configs antes de deploy, comparar exportaciones). Promovida a v2.x al relajarse el límite de líneas.

- Comparación **semántica**: ignora orden de atributos y espacios no significativos
- Vista lado a lado con diferencias resaltadas (añadido/eliminado/modificado)
- Modo texto plano como fallback para archivos grandes

#### Métricas Objetivo v2.6
- **Tamaño:** ~80KB (dentro del límite duro de 100KB)
- **Líneas:** ~2300-2500 (nuevo techo v2.x)

---

## 🔮 Visión Futura (Post v2.6)

### v3.0 - "XMLShield Extended" (2027+)
**Nota:** Proyecto separado, NO reemplaza v2.x

#### Posibles Features
- Validación XSD básica
- Resaltado de sintaxis en el panel de entrada (editor overlay)
- Web Workers para procesamiento
- PWA con service worker

**Nota:** XPath y Diff fueron promovidos al roadmap v2.x (v2.5 y v2.6) tras reevaluarlos: XPath es nativo del navegador y Diff cabe en ~400 líneas auditables.

**Decisión pendiente:** ¿Vale la pena o mejor sugerir herramientas enterprise?

---

## 📊 Cronograma Visual

```
2026
┌──────────┬──────────┬──────────┬──────────┐
│ Q1       │ Q2       │ Q3       │ Q4       │
├──────────┼──────────┼──────────┼──────────┤
│ v2.0 ✅  │ v2.1 ✅  │ v2.5 🔨  │ v2.6 🔨  │
│          │ v2.2 ✅  │          │          │
│          │ v2.3 ✅  │          │          │
│          │ v2.4 🚧  │          │          │
└──────────┴──────────┴──────────┴──────────┘
```

---

## ✅ Criterios de Éxito por Versión

### v2.1 Success Criteria
- [x] Errores XML con línea y columna
- [x] Undo/Redo básico (Ctrl+Z / Ctrl+Y)
- [x] Estadísticas del documento
- [x] Líneas numeradas en editores
- [x] Cero regresiones en funcionalidad existente
- [x] Tiempo de procesamiento <2s para XMLs de 1MB

### v2.2 Success Criteria
- [x] Conversión XML↔JSON funcional para casos comunes (ida y vuelta verificada)
- [x] Búsqueda usable para XMLs de 10,000+ líneas (tope de 500 marcas + debounce)
- [x] Presets de configuración vía URL documentados (7 parámetros)

### v2.3 Success Criteria
- [x] Árbol navegable hasta 5 niveles sin lag (`<details>` nativo)
- [x] Temas adicionales con WCAG AA compliance (incluye High Contrast)
- [x] Decisión tomada sobre alcance futuro: XPath y Diff promovidos a v2.5/v2.6; XSD sigue en v3.0

### v2.4 Success Criteria
- [x] Los 3 bugs documentados corregidos con test de regresión cada uno
- [x] Suite de tests con 30+ casos pasando (37/37)
- [x] Formatear/minificar conserva la declaración XML y comentarios top-level
- [ ] Carga de archivos funcional en móvil (botón Abrir archivo)

### v2.5 Success Criteria
- [ ] XPath funcional con expresiones comunes (`//tag`, `//tag[@attr='x']`, `count()`)
- [ ] Buscar y reemplazar integrado con Undo
- [ ] XML→CSV correcto para exportaciones tabulares típicas

### v2.6 Success Criteria
- [ ] Diff semántico correcto ignorando orden de atributos y espacios
- [ ] Comparación usable para archivos de hasta 5MB
- [ ] Archivo final <100KB y <2500 líneas

---

## 🚫 Features Descartadas

| Feature | Razón del rechazo | Alternativa |
|---------|-------------------|-------------|
| Validación XSD | Complejidad >2000 líneas | v3.0 Extended |
| XSLT support | Requiere motor completo | Herramientas externas |
| Multi-file tabs | State management complejo | Múltiples ventanas |
| Plugin system | Rompe filosofía | Fork para extensiones |

---

## 📈 Métricas de Progreso

| Versión | Progreso | Features | Líneas | Tamaño | Estado |
|---------|----------|----------|--------|--------|--------|
| v2.0 | 100% | 10/10 | ~500 | ~50KB | ✅ Released |
| v2.1 | 100% | 5/5 | ~1100 | ~35KB | ✅ Released |
| v2.2 | 100% | 4/4 | ~1300 | ~43KB | ✅ Released |
| v2.3 | 100% | 3/3 | ~1470 | ~50KB | ✅ Released |
| v2.4 | 45% | 4/9 | ~1600 | ~55KB | 🔨 En progreso |
| v2.5 | 0% | 0/4 | ~1900 est. | ~65KB est. | 📅 Q3 2026 |
| v2.6 | 0% | 0/1 | ~2500 est. | ~80KB est. | 📅 Q4 2026 |

---

**Mantenedor:** Luis Mojica  
**Contacto:** luisfemojica.com  
**Versión del documento:** 3.0  
**Próxima revisión:** Al cierre de cada versión (v2.4, v2.5, v2.6)
