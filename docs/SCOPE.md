# 📐 XMLShield - Definición de Alcance
## La Versión Simple y Confiable

> **Última actualización:** Febrero 2026  
> **Versión de referencia:** 2.0  
> **Filosofía:** Un archivo, cero dependencias, cero compromisos

---

## 🎯 Misión del Proyecto

XMLShield es una herramienta de formateo y minificación de XML que funciona **100% localmente**, sin dependencias externas, en un solo archivo HTML auditable. Está diseñada para usuarios que valoran la **privacidad, simplicidad y seguridad** sobre características avanzadas.

### Principios Fundamentales

1. **Un solo archivo HTML** - Facilita distribución, auditoría y uso offline
2. **Cero dependencias externas** - Sin CDN, npm, ni código de terceros
3. **Auditable en minutos** - Cualquier desarrollador puede revisar todo el código
4. **Funciona offline** - Sin conexión a internet requerida
5. **Sin telemetría** - Cero rastreo, cero cookies, cero envío de datos

---

## ✅ Dentro del Alcance (v2.x)

### Funcionalidades Core (MANTENER)

- ✅ Formateo XML con indentación configurable
- ✅ Minificación inteligente
- ✅ Resaltado de sintaxis sin dependencias
- ✅ Vista texto/resaltada intercambiable
- ✅ Drag & drop de archivos
- ✅ KPIs en tiempo real (tamaño entrada/salida/ahorro)
- ✅ Modo oscuro/claro
- ✅ Atajos de teclado esenciales
- ✅ Descarga de resultados
- ✅ Copiar al portapapeles
- ✅ Opciones de preservación de espacios

### Mejoras Aceptables (PUEDEN AÑADIRSE)

#### 🟢 Prioridad Alta - v2.1 (Quick Wins)
**Estimado:** 1-2 semanas | **Complejidad:** Baja | **Líneas:** +50-100

- ✅ **Errores detallados con número de línea**
  - Usar DOMParser error reporting nativo
  - Mostrar línea y columna del error
  - Sin parsers adicionales

- ✅ **Estadísticas del documento**
  - Número total de elementos
  - Profundidad del árbol
  - Total de atributos
  - Cálculo mediante traversal simple del DOM

- ✅ **Líneas numeradas en editores**
  - CSS + JS simple para overlay de números
  - Sincronización con scroll

- ✅ **Undo/Redo básico (memoria de sesión)**
  - Stack simple en memoria (últimas 10 operaciones)
  - No persiste entre recargas
  - Atajos: Ctrl+Z, Ctrl+Y

- ✅ **Advertencia para archivos grandes**
  - Alert si el archivo excede 50MB
  - Sugerencia de usar herramientas especializadas

#### 🟡 Prioridad Media - v2.2 (Productividad)
**Estimado:** 3-4 semanas | **Complejidad:** Media | **Líneas:** +150-250

- ✅ **Conversión XML ↔ JSON**
  - Implementación inline simple (~200 líneas)
  - Conversión bidireccional básica
  - Sin schemas complejos

- ✅ **Búsqueda mejorada con highlight**
  - Ctrl+F para buscar texto
  - Resaltar coincidencias en el editor
  - Navegación entre resultados

- ✅ **Presets de configuración vía URL**
  - Ejemplo: `xmlshield.html?indent=4&tabs=true`
  - Compartir configuraciones entre equipo
  - Sin almacenamiento persistente

- ✅ **Copiar como string escapado**
  - Para pegar en código (JavaScript, Python, etc.)
  - Escapa comillas y caracteres especiales

#### 🟠 Prioridad Baja - v2.3 (Navegación)
**Estimado:** 1-2 meses | **Complejidad:** Media-Alta | **Líneas:** +200-300

- ✅ **Vista de árbol colapsable (solo lectura)**
  - Navegación visual de la estructura
  - Click para saltar al elemento en el editor
  - Sin edición en el árbol (solo consulta)
  - Implementación pura CSS/JS

- ✅ **Ir a línea específica (Ctrl+G)**
  - Dialog simple para introducir número de línea
  - Scroll y highlight automático

- ✅ **Temas visuales adicionales**
  - 2-3 temas predefinidos (light, dark, high-contrast)
  - Sin editor de temas custom
  - Variables CSS simples

---

## ❌ Fuera del Alcance (v2.x)

### Features Complejas (Para XMLShield Extended / v3.0+)

- ❌ **Validación XSD (XML Schema)**
  - Requiere parser XSD completo (~2000+ líneas)
  - Complejidad alta, rompe simplicidad
  - **Alternativa:** Sugerir herramientas especializadas

- ❌ **Soporte DTD (Document Type Definition)**
  - Tecnología legacy
  - Parser complejo
  - Bajo valor para casos de uso modernos

- ❌ **XPath / XSLT**
  - Requiere motor de query completo
  - Alta complejidad de implementación
  - **Alternativa:** Conversión a JSON + jq

- ❌ **Web Workers para procesamiento**
  - Rompe el concepto de "un solo archivo"
  - Requiere inline worker complejo o blob URLs
  - **Alternativa:** Advertencia para archivos >50MB

- ❌ **Virtualización de contenido**
  - Rendering diferido para archivos enormes
  - Complejidad de implementación muy alta
  - **Alternativa:** Recomendar herramientas enterprise

- ❌ **Múltiples pestañas/archivos simultáneos**
  - State management complejo
  - Rompe simplicidad de UI
  - **Alternativa:** Abrir múltiples ventanas del navegador

- ❌ **Edición en árbol (tree editor)**
  - Sincronización bidireccional compleja
  - Riesgo de corrupción de datos
  - **Alternativa:** Vista de árbol de solo lectura

- ❌ **Comparación/Diff de XMLs**
  - Algoritmo diff complejo (~400+ líneas)
  - Mejor como herramienta separada
  - **Considerar para:** XMLShield Extended

- ❌ **Exportación a formatos complejos**
  - CSV con schema inference complejo
  - Excel con formato
  - **Alternativa:** Solo JSON (más universal)

- ❌ **Aplicaciones nativas**
  - Electron app
  - CLI version
  - Extensión de navegador
  - **Razón:** Diferentes artefactos, mantenimiento separado

---

## 📏 Límites Técnicos Estrictos

### Código

| Métrica | Límite Actual | Límite v2.x | Límite v3.0+ |
|---------|---------------|-------------|--------------|
| **Líneas totales** | ~500 | 800 máximo | 1500+ |
| **Tamaño archivo** | ~50KB | 100KB máximo | 150KB+ |
| **Tiempo auditoría** | 15 min | 30 min máximo | 60+ min |
| **Dependencias externas** | 0 | 0 | 0* |

*Para v3.0+: Permitido código inline de bibliotecas específicas, pero siempre auditable

### Features

**Test de 4 Preguntas** - Toda nueva feature debe pasar:

1. ✅ **¿Lo necesita el 80% de los usuarios?**
2. ✅ **¿Se puede implementar en <200 líneas?**
3. ✅ **¿Mantiene el archivo auditable visualmente?**
4. ✅ **¿Funciona 100% offline sin setup?**

**Criterio de aceptación:** Mínimo 3/4 respuestas positivas

---

## 🧪 Casos de Uso Cubiertos

### ✅ Casos Primarios (DEBE funcionar perfectamente)

1. **Desarrollador formateando XMLs de configuración**
   - Spring config, Maven POM, web.xml, etc.
   - Archivos <5MB
   - Necesita rapidez y privacidad

2. **Analista limpiando exportaciones XML**
   - Datos de APIs, exports de DB
   - Formateo para análisis manual
   - Conversión a JSON para procesamiento

3. **SysAdmin validando archivos de configuración**
   - Verificar sintaxis antes de deploy
   - Minificar para producción
   - Archivos de infraestructura sensibles

4. **Estudiante aprendiendo XML**
   - Ver estructura claramente
   - Experimentar con formato
   - No tiene acceso a herramientas enterprise

5. **Equipo con datos sensibles/regulados**
   - GDPR, HIPAA, datos financieros
   - No pueden usar herramientas cloud
   - Necesitan auditoría de seguridad

### 🟡 Casos Secundarios (Funciona, pero con limitaciones)

6. **Developer procesando XMLs muy grandes (>100MB)**
   - Funciona pero puede ser lento
   - Advertencia automática
   - Sugerencia de herramientas especializadas

7. **Usuario queriendo validar contra schema XSD**
   - No soportado en v2.x
   - Sugerencia de XMLShield Extended o herramientas externas

### ❌ Casos NO Cubiertos (Por diseño)

8. **Pipeline automatizado de CI/CD**
   - No es una CLI tool
   - Usar `xmllint`, `tidy`, etc.

9. **Procesamiento batch de miles de archivos**
   - Herramienta interactiva, no batch processor

10. **Transformaciones XSLT complejas**
    - Fuera del scope, usar herramientas especializadas

---

## 🚦 Proceso de Evaluación de Features

### Workflow de Decisión

```
Nueva feature propuesta
         ↓
   ┌─────────────┐
   │ ¿Core feature │ → SÍ → Implementar inmediatamente
   │  faltante?    │
   └─────────────┘
         ↓ NO
   ┌─────────────┐
   │ Test de 4    │ → 3-4 SÍ → Añadir a roadmap v2.x
   │  preguntas   │
   └─────────────┘
         ↓ 0-2 SÍ
   ┌─────────────┐
   │ ¿Valor muy  │ → SÍ → Considerar para v3.0 Extended
   │  alto?       │
   └─────────────┘
         ↓ NO
      RECHAZAR
```

### Ejemplos de Evaluación

#### Ejemplo 1: "Añadir errores con número de línea"
- ¿80% usuarios? ✅ SÍ - Todos se benefician
- ¿<200 líneas? ✅ SÍ - ~30 líneas con DOMParser
- ¿Auditable? ✅ SÍ - Código simple
- ¿Offline? ✅ SÍ - APIs nativas

**Resultado:** 4/4 → ✅ ACEPTADO para v2.1

#### Ejemplo 2: "Añadir validación XSD"
- ¿80% usuarios? ❌ NO - <20% necesitan XSD
- ¿<200 líneas? ❌ NO - Requiere ~2000+ líneas
- ¿Auditable? ❌ NO - Parser muy complejo
- ¿Offline? ✅ SÍ - Posible inline

**Resultado:** 1/4 → ❌ RECHAZADO para v2.x (considerar v3.0)

#### Ejemplo 3: "Conversión XML ↔ JSON"
- ¿80% usuarios? ✅ SÍ - Muy útil para developers
- ¿<200 líneas? ✅ SÍ - ~200 líneas implementación simple
- ¿Auditable? ✅ SÍ - Lógica clara
- ¿Offline? ✅ SÍ - Puro JavaScript

**Resultado:** 4/4 → ✅ ACEPTADO para v2.2

---

## 🎯 Objetivos de Calidad

### Métricas de Éxito

- **Tiempo de carga:** <500ms en hardware modesto
- **Procesamiento:** <2s para XMLs típicos (<5MB)
- **Accesibilidad:** WCAG 2.1 AA mínimo
- **Compatibilidad:** Navegadores modernos (últimos 2 años)
- **Tamaño descarga:** <100KB sin comprimir
- **Auditoría completa:** <30 minutos para un developer

### No-Objetivos (Explícitamente FUERA)

- ❌ Soportar Internet Explorer
- ❌ Procesamiento en <1s para archivos >50MB
- ❌ Competir con herramientas enterprise (Oxygen XML, XMLSpy)
- ❌ Ser una plataforma extensible con plugins
- ❌ Reemplazar validadores industriales

---

## 🔄 Proceso de Contribución

### Para Contribuidores

Si deseas proponer una mejora:

1. **Verifica el alcance:** ¿Está en la lista de "Mejoras Aceptables"?
2. **Aplica el test de 4 preguntas:** ¿Pasa 3/4 mínimo?
3. **Estima complejidad:** ¿Menos de 200 líneas?
4. **Mantén los principios:** Un archivo, sin dependencias
5. **Documenta:** Actualiza este SCOPE.md si es aceptado

### Para Rechazos

Si tu feature no cabe en v2.x:

- **No es un "no" definitivo** - Puede ir en XMLShield Extended
- **Documéntalo** - Añádelo a "Mejoras Futuras Consideradas" en README
- **Alterna** - ¿Hay una versión más simple que sí cabe?

---

## 📅 Revisión de Alcance

Este documento debe revisarse:

- **Cada release mayor** (v2.x → v3.x)
- **Anualmente** como mínimo
- **Cuando hay propuestas polémicas** que generan debate

### Próxima revisión programada

**Fecha:** Agosto 2026  
**Trigger:** Release de v2.3 o acumulación de 10+ propuestas rechazadas

---

## 📄 Documentos Relacionados

- `README.md` - Documentación de usuario y características
- `ROADMAP.md` - Plan de versiones futuras con fechas
- `CHANGELOG.md` - Historial de cambios implementados
- `CONTRIBUTING.md` - Guía para contribuidores (futuro)

---

**Mantenedor:** Luis Mojica  
**Contacto:** luisfemojica.com  
**Versión del documento:** 1.0  
**Última actualización:** Febrero 2026
