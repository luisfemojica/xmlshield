
---

## 📖 Instrucciones de Uso

### Inicio Rápido

1. **Abrir archivo:** Doble clic en `xml_formatter_mejorado.html`
2. **Pegar XML:** En el panel izquierdo
3. **Formatear:** Clic en "✨ Formatear" o Ctrl+Enter
4. **Resultado:** Aparece en panel derecho con sintaxis resaltada

### Opciones Avanzadas

#### Configuración de Indentación
- **Sangría:** Define número de espacios (0-16)
- **Usar tabs:** Checkbox para usar tabuladores en lugar de espacios
- **Conservar espacios (formato):** No normaliza espacios en nodos de texto

#### Configuración de Minificado
- **Conservar espacios en texto:** No modifica espacios dentro de contenido textual
- **Compactar atributos:** Elimina espacios redundantes en atributos

### Atajos de Teclado

| Atajo | Acción |
|-------|--------|
| `Ctrl + Enter` | Formatear XML |
| `Ctrl + M` | Minificar XML |
| `Ctrl + B` | Cambiar vista (Texto/Resaltada) |

### Cargar Archivos

**Método 1 - Drag & Drop:**
- Arrastra archivo `.xml` al panel de entrada
- El contenido se carga automáticamente

**Método 2 - Copiar/Pegar:**
- Abre tu XML en cualquier editor
- Copia todo (Ctrl+A, Ctrl+C)
- Pega en panel de entrada (Ctrl+V)

### Descargar Resultado

1. Formatea o minifica tu XML
2. Clic en botón "💾 Descargar"
3. Se descarga como: `xml_formatted_[timestamp].xml`

---

## 🔐 Seguridad y Privacidad

### Garantías de Seguridad

✅ **Sin conexión a Internet:** El archivo funciona completamente offline  
✅ **Sin telemetría:** No envía datos a ningún servidor  
✅ **Sin cookies:** No almacena ni rastrea información  
✅ **Sin CDN:** No carga recursos externos que puedan ser comprometidos  
✅ **Código auditable:** Todo el código está en un solo archivo visible  

### Consideraciones

- ⚠️ Los archivos procesados quedan en la memoria del navegador hasta cerrar la pestaña
- ⚠️ No hay límite de tamaño, pero archivos muy grandes (>100MB) pueden ralentizar el navegador
- ✅ Compatible con normativas de privacidad (GDPR, etc.) por ser 100% local

---

## 🚀 Mejoras Futuras

### En Consideración

#### Funcionalidades
- [ ] Validación XSD (XML Schema)
- [ ] Soporte para DTD (Document Type Definition)
- [ ] Conversión XML ↔ JSON
- [ ] Búsqueda y reemplazo con XPath
- [ ] Comparación de dos archivos XML (diff)
- [ ] Estadísticas del documento (número de elementos, profundidad del árbol)
- [ ] Exportar a otros formatos (CSV para datos tabulares)
- [ ] Modo "pretty print" con colores personalizables
- [ ] Historial de operaciones (undo/redo)
- [ ] Bookmarks / favoritos para XMLs frecuentes

#### Interfaz
- [ ] Múltiples pestañas para trabajar con varios archivos simultáneamente
- [ ] Vista de árbol colapsable del XML
- [ ] Panel de validación con errores detallados
- [ ] Temas de color personalizables
- [ ] Atajos de teclado configurables
- [ ] Modo presentación (fullscreen, fontSize aumentado)

#### Rendimiento
- [ ] Web Workers para archivos muy grandes
- [ ] Virtualización para archivos con miles de líneas
- [ ] Streaming para archivos extremadamente grandes
- [ ] Caching inteligente

#### Accesibilidad
- [ ] Soporte completo para lectores de pantalla
- [ ] Navegación por teclado mejorada
- [ ] Alto contraste
- [ ] Modo dislexia con fuente OpenDyslexic

#### Compatibilidad
- [ ] Exportar como PWA (Progressive Web App)
- [ ] Aplicación Electron para escritorio
- [ ] Extensión de navegador
- [ ] CLI version para scripts

---

## 📝 Changelog

### v2.0 - Febrero 2026 (Actual)
- ✅ Refactorización completa del diseño
- ✅ Panel dividido lado a lado
- ✅ Gradientes modernos en header
- ✅ Botón de descarga de archivos
- ✅ Mejoras en modo oscuro
- ✅ Responsive design mejorado
- ✅ KPIs con emojis
- ✅ Feedback visual en acciones

### v1.0 - Febrero 2026 (Original)
- ✅ Formateo XML con DOMParser
- ✅ Minificación inteligente
- ✅ Resaltado de sintaxis
- ✅ Vista alternativa texto/resaltada
- ✅ Drag & drop
- ✅ KPIs en tiempo real
- ✅ Modo oscuro
- ✅ 3 atajos de teclado

---

## 🤝 Contribuciones

Este proyecto está diseñado para ser de un solo archivo y sin dependencias. Si deseas contribuir con mejoras:

1. **Fork** el archivo
2. **Implementa** tu mejora manteniendo el principio de "sin dependencias"
3. **Documenta** los cambios en este README
4. **Comparte** tu versión mejorada

### Reglas para Contribuciones

- ✅ Mantener el principio de "un solo archivo HTML"
- ✅ No agregar dependencias externas (CDN, npm, etc.)
- ✅ Mantener compatibilidad con navegadores modernos
- ✅ Documentar cambios en el código
- ✅ Actualizar el Changelog

---

## 📄 Licencia

Este proyecto está en el dominio público. Úsalo libremente para cualquier propósito personal o comercial.

**Disclaimer:** Este software se proporciona "tal cual", sin garantías de ningún tipo.

---

## 📚 Referencias y Recursos

### Documentación Relevante
- [MDN - DOMParser](https://developer.mozilla.org/en-US/docs/Web/API/DOMParser)
- [MDN - XMLSerializer](https://developer.mozilla.org/en-US/docs/Web/API/XMLSerializer)
- [W3C - XML 1.0 Specification](https://www.w3.org/TR/xml/)

### Contexto de Seguridad
- Notepad++ Hijacking Incident (Febrero 2026)
- Supply Chain Attack Best Practices
- Local-First Software Movement

---

## 💡 Notas de Desarrollo

### Decisiones de Arquitectura

**¿Por qué DOMParser y no regex?**
- Más robusto y preciso
- Maneja casos edge correctamente
- Validación automática de sintaxis
- Soporte nativo del navegador

**¿Por qué un solo archivo HTML?**
- Facilita distribución (email, USB, etc.)
- Sin proceso de build
- Funcionamiento garantizado offline
- Auditoría de seguridad simplificada

**¿Por qué no usar bibliotecas como Prettier o xml-formatter?**
- Evitar dependencias externas que puedan ser comprometidas
- Control total sobre el código
- Reducir superficie de ataque
- Cumplir con el objetivo de "sin dependencias"

---

## 🎯 Casos de Uso

- ✅ Desarrolladores que necesitan formatear XMLs de configuración
- ✅ Analistas de datos trabajando con exportaciones XML
- ✅ Administradores de sistemas validando archivos de configuración
- ✅ Estudiantes aprendiendo XML
- ✅ Cualquier persona que quiera evitar herramientas online por privacidad
- ✅ Equipos que trabajan con información sensible

---

**Última actualización:** 12 de Febrero, 2026  
**Versión:** 2.0  
**Autor:** Luis Mojica
**Contacto:** luisfemojica.com
