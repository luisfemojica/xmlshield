# 🗺️ XMLShield - Roadmap
## Plan de Versiones 2026-2027

> **Documento vivo** - Se actualiza cada release
> **Última revisión:** Marzo 2026
> **Versión actual:** v2.1

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

## 🎯 Versiones Futuras

### v2.1 - "Quick Wins" 🔨 EN PROGRESO
**Fecha estimada:** Marzo-Abril 2026
**Esfuerzo:** 1-2 semanas
**Prioridad:** Alta

#### Objetivos
Mejoras rápidas que añaden valor inmediato sin aumentar complejidad significativamente.

#### Features Planificadas

##### 1. Errores Detallados con Número de Línea ✅ IMPLEMENTADO
**Complejidad:** Baja | **Líneas:** ~15 | **Tiempo:** 2-3 días

**Valor:** Debugging más rápido, especialmente para XMLs complejos.
**Implementación:** `parseXMLError()` extrae línea y columna del `parsererror` nativo del `DOMParser`. Compatible Chrome, Firefox, Safari y Edge.

##### 2. Estadísticas del Documento
**Complejidad:** Baja | **Líneas:** ~40 | **Tiempo:** 2-3 días
- Total de elementos
- Profundidad máxima del árbol
- Total de atributos
- Número de comentarios
- Tamaño promedio de nodos texto

**UI:** Panel expandible debajo de los KPIs existentes.

##### 3. Líneas Numeradas en Editores
**Complejidad:** Media | **Líneas:** ~50 | **Tiempo:** 3-4 días
- Overlay con números de línea
- Sincronización con scroll
- Highlight de línea actual
- Compatible con modo oscuro

##### 4. Undo/Redo Básico ✅ IMPLEMENTADO
**Complejidad:** Media | **Líneas:** ~30 | **Tiempo:** 3-5 días

**Atajos:** Ctrl+Z (undo), Ctrl+Y (redo)
**Limitación:** Solo en memoria de sesión (no persiste al recargar)
**Implementación:** Stack doble (`undoStack`/`redoStack`) que guarda el estado del editor antes de cada operación destructiva (Limpiar, arrastrar archivo). Ctrl+Z/Y activos cuando el foco está fuera del textarea para no interferir con el undo nativo del navegador.

##### 5. Advertencia para Archivos Grandes
**Complejidad:** Muy Baja | **Líneas:** ~15 | **Tiempo:** 1 día
- Alert si archivo >50MB
- Mensaje sugeriendo herramientas especializadas
- Opción de continuar de todos modos

#### Métricas Objetivo v2.1
- **Tamaño:** ~60KB (+10KB vs v2.0)
- **Líneas:** ~600-650 (+100-150 vs v2.0)
- **Tiempo de auditoría:** ~20 minutos (+5 min vs v2.0)

---

### v2.2 - "Productivity Boost" 📅 Q2-Q3 2026
**Fecha estimada:** Mayo-Julio 2026  
**Esfuerzo:** 3-4 semanas  
**Prioridad:** Media

#### Features Planificadas

##### 1. Conversión XML ↔ JSON
**Complejidad:** Alta | **Líneas:** ~200 | **Tiempo:** 1-1.5 semanas

**Funcionalidad:**
- XML → JSON: Conversión simple de estructura
- JSON → XML: Generación básica (sin schemas)
- Botones dedicados en UI
- Vista previa antes de convertir

##### 2. Búsqueda Mejorada con Highlight
**Complejidad:** Media | **Líneas:** ~80 | **Tiempo:** 4-5 días

**Features:**
- Ctrl+F para abrir barra de búsqueda
- Highlight de todas las coincidencias
- Contador (X de Y resultados)
- Navegación: siguiente/anterior

##### 3. Presets de Configuración vía URL
**Complejidad:** Baja | **Líneas:** ~40 | **Tiempo:** 2-3 días

**Ejemplos:**
```
xmlshield.html?indent=4&tabs=true&theme=dark
xmlshield.html?preset=compact
xmlshield.html?preset=readable
```

##### 4. Copiar como String Escapado
**Complejidad:** Baja | **Líneas:** ~30 | **Tiempo:** 2 días

**Formatos:**
- JavaScript: `const xml = "...";`
- Python: `xml = """..."""`
- Java: `String xml = "...";`

#### Métricas Objetivo v2.2
- **Tamaño:** ~75-80KB (+15-20KB vs v2.1)
- **Líneas:** ~750-800 (+150-200 vs v2.1)

---

### v2.3 - "Navigation & UX" 📅 Q4 2026
**Fecha estimada:** Octubre-Diciembre 2026  
**Esfuerzo:** 1-2 meses  
**Prioridad:** Baja

#### Features Planificadas

##### 1. Vista de Árbol Colapsable (Solo Lectura)
**Complejidad:** Alta | **Líneas:** ~250 | **Tiempo:** 2-3 semanas

**Implementación:**
- Panel lateral opcional (toggle)
- Collapse/expand de nodos
- Click → scroll al elemento

**Limitaciones:**
- Solo lectura
- Para XMLs >10,000 nodos puede ser lento

##### 2. Ir a Línea Específica (Ctrl+G)
**Complejidad:** Baja | **Líneas:** ~40 | **Tiempo:** 2-3 días

##### 3. Temas Visuales Adicionales
**Complejidad:** Media | **Líneas:** ~100 | **Tiempo:** 4-5 días

**Temas:**
- High Contrast (accesibilidad)
- Solarized Dark
- Monokai

#### Métricas Objetivo v2.3
- **Tamaño:** ~95-100KB (límite máximo para v2.x)
- **Líneas:** ~800 máximo
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
│ v2.0 ✅  │ v2.2     │          │ v2.3     │
│ v2.1 🚧  │ 🔨       │ 🔨       │ 🔨       │
└──────────┴──────────┴──────────┴──────────┘
```

---

## ✅ Criterios de Éxito por Versión

### v2.1 Success Criteria
- [x] Errores XML con línea y columna
- [x] Undo/Redo básico (Ctrl+Z / Ctrl+Y)
- [ ] Estadísticas del documento
- [ ] Líneas numeradas en editores
- [ ] Cero regresiones en funcionalidad existente
- [ ] Tiempo de procesamiento <2s para XMLs de 1MB

### v2.2 Success Criteria
- [ ] Conversión XML↔JSON funcional para casos comunes
- [ ] Búsqueda usable para XMLs de 10,000+ líneas
- [ ] Al menos 3 presets de configuración documentados

### v2.3 Success Criteria
- [ ] Árbol navegable hasta 5 niveles sin lag
- [ ] Temas adicionales con WCAG AA compliance
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
| v2.1 | 40% | 2/5 | ~1000 | ~60KB | 🔨 En progreso |
| v2.2 | 0% | 0/4 | - | - | 📅 Scheduled |
| v2.3 | 0% | 0/3 | - | - | 🔮 Future |

---

**Mantenedor:** Luis Mojica  
**Contacto:** luisfemojica.com  
**Versión del documento:** 1.0  
**Próxima revisión:** Mayo 2026
