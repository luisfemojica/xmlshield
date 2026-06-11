# 📚 Documentación de Alcance - XMLShield
## Guía de Uso de los Documentos

Esta carpeta contiene la documentación completa que define el alcance, límites y proceso de desarrollo de XMLShield v2.x - "La versión simple y confiable".

---

## 📄 Documentos Incluidos

### 1. SCOPE.md - Definición de Alcance ⭐ LEER PRIMERO
**Propósito:** Define QUÉ está dentro y fuera del alcance de XMLShield v2.x

**Lee este documento si:**
- Quieres entender la filosofía del proyecto
- Tienes una idea de feature y quieres saber si cabe
- Necesitas entender los límites técnicos (~1500 líneas, 100KB, etc.)
- Vas a contribuir al proyecto

**Secciones clave:**
- ✅ Dentro del Alcance (v2.x) - Features aceptables
- ❌ Fuera del Alcance - Features rechazadas y por qué
- 📏 Límites Técnicos Estrictos - Métricas cuantificables
- 🚦 Proceso de Evaluación - Test de 4 Preguntas
- 🧪 Casos de Uso Cubiertos - Quién usa XMLShield y para qué

---

### 2. ROADMAP.md - Plan de Versiones
**Propósito:** Define CUÁNDO se implementarán las features del alcance

**Lee este documento si:**
- Quieres saber qué viene en las próximas versiones
- Estás planeando una contribución y necesitas ver prioridades
- Quieres entender el timeline del proyecto
- Buscas inspiración para contribuir

**Secciones clave:**
- 🎯 Versiones Futuras - v2.1, v2.2, v2.3 con estimaciones
- 📊 Cronograma Visual - Timeline de releases
- ✅ Criterios de Éxito - Qué define un release exitoso
- 🚫 Features Descartadas - Propuestas evaluadas y rechazadas

**Versiones planificadas:**
- **v2.1 - "Quick Wins"** (Q1 2026): Errores detallados, estadísticas, líneas numeradas
- **v2.2 - "Productivity Boost"** (Q2-Q3 2026): XML↔JSON, búsqueda, presets
- **v2.3 - "Navigation & UX"** (Q4 2026): Vista de árbol, temas adicionales

---

### 3. CONTRIBUTING.md - Guía de Contribución
**Propósito:** Define CÓMO contribuir al proyecto

**Lee este documento si:**
- Quieres contribuir código
- Vas a reportar un bug
- Quieres proponer una feature
- Tienes dudas sobre el proceso

**Secciones clave:**
- ✅ Test de 4 Preguntas - Evaluación rápida de features
- 🐛 Reportar Bugs - Template de issues
- 💡 Proponer Features - Proceso de propuesta
- 🔧 Guías de Código - Estándares de programación
- ❌ NO Contribuir - Features que serán rechazadas

---

## 🗺️ Cómo Usar Esta Documentación

### Escenario 1: "Tengo una idea de feature"
```
1. Lee SCOPE.md → Sección "Test de 4 Preguntas"
2. Aplica el test a tu idea (¿pasa 3/4?)
3. Si SÍ: Lee ROADMAP.md → ¿Ya está planificada?
4. Si NO está: Lee CONTRIBUTING.md → Proceso de propuesta
5. Abre un Issue con el template
```

### Escenario 2: "Quiero contribuir código"
```
1. Lee SCOPE.md → Principios y límites
2. Lee ROADMAP.md → Features de la próxima versión
3. Lee CONTRIBUTING.md → Guías de código y testing
4. Elige una feature o bug
5. Implementa siguiendo las guías
6. Abre PR con el template
```

### Escenario 3: "¿Por qué rechazaron mi propuesta?"
```
1. Lee SCOPE.md → Sección "Fuera del Alcance"
2. Verifica si tu feature está en la lista de rechazadas
3. Lee la justificación y alternativas
4. Considera proponer para v3.0 Extended
```

### Escenario 4: "Soy nuevo, ¿por dónde empiezo?"
```
1. Lee README.md (en el repo principal)
2. Lee SCOPE.md completo
3. Explora el ROADMAP.md
4. Busca Issues etiquetados como "good first issue"
5. Lee CONTRIBUTING.md antes de tu primer PR
```

---

## 🎯 Decisiones Clave Documentadas

### Límites Técnicos (de SCOPE.md)

| Métrica | v2.0 Actual | v2.x Máximo | v3.0+ Extended |
|---------|-------------|-------------|----------------|
| Líneas | ~500 | 800 | 1500+ |
| Tamaño | ~50KB | 100KB | 150KB+ |
| Auditoría | 15 min | 30 min | 60+ min |
| Dependencias | 0 | 0 | 0* (inline OK) |

### Test de 4 Preguntas (de SCOPE.md)

Toda feature debe pasar **mínimo 3 de 4**:

1. ✅ ¿Lo necesita el 80% de los usuarios?
2. ✅ ¿Se puede implementar en <200 líneas?
3. ✅ ¿Mantiene el archivo auditable visualmente?
4. ✅ ¿Funciona 100% offline sin setup?

### Principios NO Negociables (de SCOPE.md)

1. **Un solo archivo HTML** - Facilita distribución y auditoría
2. **Cero dependencias externas** - Sin CDN, npm, ni terceros
3. **Auditable en minutos** - Cualquier dev puede revisar el código
4. **Funciona offline** - Sin internet requerida
5. **Sin telemetría** - Cero tracking o envío de datos

---

## 📋 Checklist de Contribución

Antes de abrir un PR, verifica:

```
✅ Leí SCOPE.md completo
✅ Mi feature pasa el Test de 4 Preguntas (3/4 mínimo)
✅ Verifiqué que no está en ROADMAP.md ya
✅ Seguí las guías de CONTRIBUTING.md
✅ El archivo final es <100KB
✅ El código total es <1500 líneas
✅ No añadí dependencias externas
✅ Funciona 100% offline
✅ Testé en Chrome, Firefox, Safari
✅ No hay regresiones en features existentes
✅ Actualicé documentación si aplica
```

---

## 🚀 Próximos Pasos

### Para Mantenedores
1. ✅ Publicar estos documentos en el repositorio
2. ✅ Referenciarlos desde README.md
3. ✅ Crear templates de Issues basados en CONTRIBUTING.md
4. ✅ Configurar GitHub para requerir review antes de merge
5. 📅 Programar revisión trimestral del alcance (Mayo 2026)

### Para Contribuidores
1. ✅ Lee los 3 documentos principales
2. ✅ Familiarízate con el código actual (index.html)
3. ✅ Busca Issues etiquetados "help wanted"
4. ✅ Pregunta dudas en Discussions
5. ✅ Comienza con features de v2.1 (más simples)

---

## 📞 Contacto y Soporte

- **Issues:** Para bugs y propuestas de features
- **Discussions:** Para preguntas generales y discusión de ideas
- **Email:** luisfemojica.com (para temas de privacidad/seguridad)

---

## 📅 Calendario de Revisiones

- **SCOPE.md:** Cada release mayor o anualmente
- **ROADMAP.md:** Trimestral (Enero, Abril, Julio, Octubre)
- **CONTRIBUTING.md:** Cuando cambian procesos

**Próxima revisión programada:** Mayo 2026

---

## ✨ Filosofía Final

> XMLShield v2.x debe ser la herramienta que **"simplemente funciona"** 
> para el 95% de casos, sin explicaciones, sin curva de aprendizaje, 
> sin riesgos. La simplicidad es nuestra característica principal, 
> no una limitación.

**Cuando dudes:** Pregunta "¿Esto hace XMLShield más simple o más complejo?"  
Si la respuesta es "más complejo", probablemente no debe ir en v2.x.

---

**Creado:** Febrero 2026  
**Mantenedor:** Luis Mojica  
**Versión:** 1.0
