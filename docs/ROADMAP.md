# 🗺️ XMLShield - Roadmap
## Plan de Versiones 2026-2027

> **Documento vivo** - Se actualiza cada release
> **Última revisión:** Junio 2026
> **Versión actual:** v2.3 — 🎉 Roadmap v2.x COMPLETADO

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

## 🔮 Visión Futura (Post v2.3)

### v3.0 - "XMLShield Extended" (2027+)
**Nota:** Proyecto separado, NO reemplaza v2.x

#### Posibles Features
- Validación XSD básica
- Diff/comparación de XMLs
- XPath queries simples
- Web Workers para procesamiento
- PWA con service worker

**Decisión pendiente:** ¿Vale la pena o mejor sugerir herramientas enterprise?

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
- [ ] Decisión tomada sobre v3.0 (go/no-go)

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

---

**Mantenedor:** Luis Mojica  
**Contacto:** luisfemojica.com  
**Versión del documento:** 2.0  
**Próxima revisión:** Solo si se decide arrancar v3.0 (proyecto separado)
