# 🗺️ XMLShield - Roadmap
## Plan de Versiones 2026-2027

> **Documento vivo** - Se actualiza cada release
> **Última revisión:** Junio 2026
> **Versión actual:** v2.8 — 🎉 Roadmap v2.x COMPLETADO (v2.0 a v2.8)

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

## 🎯 Versiones Completadas (continuación)

### v2.4 - "Polish & Trust" ✅ COMPLETADO
**Fecha de release:** Junio 2026
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

##### 5. Botón "Reusar salida" (salida → entrada) ✅ IMPLEMENTADO
**Complejidad:** Muy Baja | **Líneas:** ~15
Encadenar operaciones (formatear → convertir → minificar) sin copiar/pegar a mano.

##### 6. Botón "Abrir archivo" ✅ IMPLEMENTADO
**Complejidad:** Muy Baja | **Líneas:** ~20
`<input type="file">` además del drag & drop — imprescindible para móvil/tablet, donde no existe arrastrar y soltar. Acepta `.xml` y `.json` (la conversión detecta la entrada). La carga se unificó en `loadFile()`, compartida con el drop.

##### 7. Validación en vivo ✅ IMPLEMENTADO
**Complejidad:** Baja | **Líneas:** ~30
Indicador ✓/✗ en el encabezado del panel de entrada mientras se escribe (debounce 400ms), con línea y columna del error. Detecta XML y JSON. Se pausa automáticamente sobre 2MB para no congelar la UI.

##### 8. Tema automático (`prefers-color-scheme`) ✅ IMPLEMENTADO
**Complejidad:** Muy Baja | **Líneas:** ~5
Arranca en oscuro si el sistema operativo lo está. Precedencia: sistema → preferencias guardadas → parámetros de URL.

##### 9. Recordar configuración (opt-in) ✅ IMPLEMENTADO
**Complejidad:** Baja | **Líneas:** ~35
Checkbox explícito "Recordar config" con `localStorage` (sangría, opciones, tema y vista). 100% local y opt-in: al desmarcarlo se borra todo. No compromete la filosofía sin-tracking y está documentado visiblemente en el tooltip y el README.

#### Métricas Alcanzadas v2.4
- **Tamaño:** ~57KB
- **Líneas:** ~1606
- **Tests:** 42 casos de regresión pasando (37 de API + 5 de UI)

---

### v2.5 - "Power Tools" ✅ COMPLETADO
**Fecha de release:** Junio 2026 (adelantado sobre Q3)
**Esfuerzo:** 3-4 semanas
**Prioridad:** Media

#### Features Implementadas

##### 1. XPath queries ✅ IMPLEMENTADO
**Complejidad:** Media | **Líneas:** ~70

Reevaluado: estaba descartado para v3.0, pero el navegador ya trae `document.evaluate()` **nativo** — la implementación es solo UI. Pasa el Test de 4 Preguntas (4/4): cero dependencias, offline, <200 líneas, auditable.

- Barra de consulta XPath sobre la entrada (Enter o botón Ejecutar)
- Los nodos coincidentes se muestran en la salida (serializados, máx. 500) con contador
- Soporta escalares (`count(//x)`, `name(/*)`), atributos (`//@id`) y `text()`
- Resolver de namespaces vía `lookupNamespaceURI`

##### 2. Buscar y reemplazar en la entrada ✅ IMPLEMENTADO
**Complejidad:** Media | **Líneas:** ~45

La búsqueda existente solo cubre la salida. Reemplazo literal (sensible a mayúsculas) sobre el editor de entrada: "Reemplazar" actúa sobre la siguiente coincidencia desde el cursor (con vuelta al inicio) y "Todo" sobre todas. Integrado con Undo, KPIs, gutter y validación en vivo.

##### 3. Conversión XML → CSV ✅ IMPLEMENTADO
**Complejidad:** Media | **Líneas:** ~55

Para XMLs tabulares (exportaciones de BD/APIs — caso de uso primario #2 de SCOPE.md). Detecta el elemento repetido dominante y lo tabula: atributos como columnas `@attr`, texto propio como `#text`, hijos simples por nombre. Escapado RFC 4180 (comas, comillas, saltos). Sin inferencia compleja de schema; error claro si no hay ≥2 filas.

##### 4. Opciones de formato extra ✅ IMPLEMENTADO
**Complejidad:** Baja | **Líneas:** ~35
- Ordenar atributos alfabéticamente (checkbox, aplica a formatear y minificar)
- Eliminar comentarios al minificar (checkbox)
- Ambas persisten en "Recordar config" y en los presets de URL (`sortattrs`, `dropcomments`)

#### Métricas Alcanzadas v2.5
- **Tamaño:** ~66KB
- **Líneas:** ~1825
- **Tests:** 58 casos pasando (16 nuevos)

---

### v2.6 - "Compare" ✅ COMPLETADO
**Fecha de release:** Junio 2026 (adelantado sobre Q4)
**Esfuerzo:** 1-2 meses
**Prioridad:** Media

#### Features Implementadas

##### 1. Diff/comparación de XMLs ✅ IMPLEMENTADO
**Complejidad:** Alta | **Líneas:** ~120

Reevaluado: era la feature v3.0 más alineada con los casos de uso documentados (validar configs antes de deploy, comparar exportaciones). Promovida a v2.x al relajarse el límite de líneas.

- Comparación **semántica** con `diffXML(a, b)`: ignora orden de atributos y espacios no significativos; hijos emparejados por nombre y posición entre hermanos del mismo nombre
- Flujo de dos pasos con el botón "🆚 Comparar": el panel derecho recibe el XML B, el segundo click ejecuta el diff
- Reporte con rutas tipo XPath y marcadores: `➕ añadido` / `➖ eliminado` / `✏️ modificado` (`✏️ /config/db/@port — "5432" → "5433"`)
- Truncado a 1000 diferencias para mantener la UI fluida
- Cualquier operación que escriba la salida cancela el modo comparar y restaura la vista previa

##### Extra: scrollbars visibles
El scroll horizontal nativo era casi invisible (sobre todo en temas oscuros). Barras personalizadas de 13px con riel y pulgar visibles en los 5 temas.

#### Métricas Alcanzadas v2.6
- **Tamaño:** ~72KB (dentro del límite duro de 100KB)
- **Líneas:** ~1955 (bajo el techo de ~2500)
- **Tests:** 68 casos pasando (10 nuevos)

---

### v2.7 - "Refinement" ✅ COMPLETADO
**Fecha de release:** Junio 2026
**Esfuerzo:** 1 semana
**Prioridad:** Alta (pulido post-roadmap, decisión tras el NO-GO de v3.0)

#### Fixes de la auditoría v2.7

##### 1. Layout móvil real ✅ IMPLEMENTADO
El media query repetía el grid de 2 columnas: en un teléfono los editores quedaban en ~190px inusables y el header (más alto que el viewport) dejaba los paneles sin altura. Ahora los paneles se apilan a ancho completo (70vh cada uno) y la página hace scroll. Controles en dos columnas compactas.

##### 2. KPIs con unidades legibles ✅ IMPLEMENTADO
`fmtBytes()`: "11.8 MB" en vez de "12345678 bytes".

##### 3. Favicon inline ✅ IMPLEMENTADO
Emoji 🛡️ como SVG data-URI: sin requests 404 y sin archivos extra.

##### 4. Screenshot del README regenerado ✅ IMPLEMENTADO
Capturado con Chrome headless usando el nuevo preset `?demo=1&theme=oscuro`.

#### Quick wins de producto

##### 5. Botón "Ejemplo" + preset ?demo=1 ✅ IMPLEMENTADO
Carga un XML demo (atributos, repetidos, CDATA, comentario) y lo formatea. Onboarding instantáneo.

##### 6. Línea de error marcada en el gutter ✅ IMPLEMENTADO
La validación en vivo ya conocía línea y columna; ahora la pinta en rojo en el gutter (XML y JSON).

##### 7. Formatear/Minificar JSON ✅ IMPLEMENTADO
Si la entrada es JSON (ya se detectaba para validar y convertir), Formatear lo embellece y Minificar lo compacta en vez de fallar.

##### 8. Árbol interactivo ✅ IMPLEMENTADO
Contador de hijos por nodo y click en un nombre de tag → su ruta XPath va al campo de consulta (y al portapapeles). Sinergia directa con XPath de v2.5.

##### 9. Archivo B en modo comparar ✅ IMPLEMENTADO
El panel derecho acepta arrastrar un archivo y el botón Abrir carga el XML B durante la comparación.

##### 10. Más atajos ✅ IMPLEMENTADO
Ctrl+O (abrir), Ctrl+F (buscar en salida), Ctrl+H (reemplazar), y Tab inserta sangría en el editor.

#### Infraestructura

##### 11. CI con GitHub Actions ✅ IMPLEMENTADO
`.github/workflows/tests.yml` + `.github/run-tests.mjs`: la suite completa corre en Chromium headless (Playwright) en cada push a main y cada PR. Badge de estado en el README. Hasta ahora los tests solo corrían a mano.

#### Métricas Alcanzadas v2.7
- **Tamaño:** ~80KB (dentro del límite duro de 100KB)
- **Líneas:** ~2100 (bajo el techo de ~2500)
- **Tests:** 77 casos pasando (9 nuevos) + CI automático

---

### v2.8 - "JSON First-Class" ✅ COMPLETADO
**Fecha de release:** Junio 2026
**Esfuerzo:** 2-3 días
**Prioridad:** Alta (petición directa del mantenedor)

#### Contexto
Desde v2.7 la app formatea, minifica y valida JSON, pero el resaltado y el árbol seguían siendo solo-XML: el JSON salía en texto plano sin colores y la vista Árbol mostraba un aviso de error.

#### Features Implementadas

##### 1. Resaltado de sintaxis JSON ✅ IMPLEMENTADO
**Complejidad:** Media | **Líneas:** ~25

`highlightJSON()` tokeniza el texto crudo (maneja comillas escapadas) y reutiliza las clases de color existentes: claves `.attr`, strings `.value`, números `.tag`, booleanos/null `.comment`. Funciona con los 5 temas sin CSS nuevo. `renderOutput` detecta el tipo de salida por prefijo (`{` o `[`).

##### 2. Vista de árbol para JSON ✅ IMPLEMENTADO
**Complejidad:** Media | **Líneas:** ~20

`jsonTreeHTML()`: objetos `{ }` y arrays `[ ]` colapsables con `<details>` nativo, contador de claves/elementos por nodo, hojas con su valor tipado. `buildTreeHTML` enruta según el tipo de salida.

##### 3. Estadísticas para JSON ✅ IMPLEMENTADO
**Complejidad:** Baja | **Líneas:** ~15

`collectStatsJSON()`: valores totales, claves de objeto y profundidad en los mismos KPIs (antes quedaban en "–" al formatear JSON).

##### 4. Descarga con extensión correcta ✅ IMPLEMENTADO
**Complejidad:** Baja | **Líneas:** ~10

El botón Descargar elegía siempre `.xml`: ahora `.json` para salidas JSON, `.csv` tras convertir a CSV, `.txt` para reportes de diff/XPath, con el MIME correspondiente.

#### Métricas Alcanzadas v2.8
- **Tamaño:** ~83KB (dentro del límite duro de 100KB)
- **Líneas:** ~2177 (bajo el techo de ~2500)
- **Tests:** 85 casos pasando (8 nuevos)

---

## 🔮 Visión Futura (Post v2.6)

### v3.0 - "XMLShield Extended" — ❌ NO-GO (decisión: Junio 2026)

**Decisión del mantenedor:** XMLShield se mantiene como producto v2.x de un solo archivo. Las features que motivaban un v3.0 separado (validación XSD, Web Workers, PWA con service worker) requieren romper los principios fundamentales (un archivo, cero dependencias, auditable en minutos) o miles de líneas de parser propio. Para esas necesidades, herramientas especializadas como `xmllint`, Oxygen XML o XMLSpy son la mejor respuesta.

Las dos features de v3.0 que sí cabían en la filosofía (XPath y Diff) ya fueron promovidas e implementadas en v2.5 y v2.6.

**El desarrollo continúa en la línea v2.x** con mejoras incrementales de pulido, accesibilidad y UX que respeten los límites (~2500 líneas, 100KB duro).

---

## 📊 Cronograma Visual

```
2026
┌──────────┬──────────┬──────────┬──────────┐
│ Q1       │ Q2       │ Q3       │ Q4       │
├──────────┼──────────┼──────────┼──────────┤
│ v2.0 ✅  │ v2.1 ✅  │          │          │
│          │ v2.2 ✅  │          │          │
│          │ v2.3 ✅  │          │          │
│          │ v2.4 ✅  │          │          │
│          │ v2.5 ✅  │          │          │
│          │ v2.6 ✅  │          │          │
│          │ v2.7 ✅  │          │          │
│          │ v2.8 ✅  │          │          │
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
- [x] Suite de tests con 30+ casos pasando (42/42)
- [x] Formatear/minificar conserva la declaración XML y comentarios top-level
- [x] Carga de archivos funcional en móvil (botón Abrir archivo)

### v2.5 Success Criteria
- [x] XPath funcional con expresiones comunes (`//tag`, `//tag[@attr='x']`, `count()`, `//@attr`, `text()`)
- [x] Buscar y reemplazar integrado con Undo
- [x] XML→CSV correcto para exportaciones tabulares típicas (escapado RFC 4180)

### v2.6 Success Criteria
- [x] Diff semántico correcto ignorando orden de atributos y espacios
- [x] Comparación usable para archivos de hasta 5MB (truncado a 1000 diferencias)
- [x] Archivo final <100KB y <2500 líneas (~72KB, ~1955 líneas)

### v2.7 Success Criteria
- [x] App usable en móvil (paneles apilados, editores >400px de alto)
- [x] CI verde en cada push/PR con la suite completa (77 tests)
- [x] Cada fix/quick win con su test de regresión
- [x] Archivo final <100KB y <2500 líneas (~80KB, ~2100 líneas)

### v2.8 Success Criteria
- [x] JSON formateado se ve resaltado en la vista Resaltada (5 temas)
- [x] La vista Árbol renderiza JSON colapsable en vez de mostrar un aviso
- [x] KPIs de estadísticas pobladas también para JSON
- [x] Descargar produce .json/.csv/.txt según el tipo real de la salida

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
| v2.4 | 100% | 9/9 | ~1606 | ~57KB | ✅ Released |
| v2.5 | 100% | 4/4 | ~1825 | ~66KB | ✅ Released |
| v2.6 | 100% | 1/1 | ~1955 | ~72KB | ✅ Released |
| v2.7 | 100% | 11/11 | ~2100 | ~80KB | ✅ Released |
| v2.8 | 100% | 4/4 | ~2177 | ~83KB | ✅ Released |

---

**Mantenedor:** Luis Mojica  
**Contacto:** luisfemojica.com  
**Versión del documento:** 3.0  
**Próxima revisión:** Al cierre de cada versión (v2.4, v2.5, v2.6)
