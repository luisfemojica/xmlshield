# 🤝 Guía de Contribución - XMLShield

Gracias por tu interés en mejorar XMLShield. Este proyecto tiene principios muy específicos que debemos mantener para preservar su valor principal: **simplicidad, seguridad y auditabilidad**.

---

## 🎯 Filosofía del Proyecto

### Principios NO Negociables

1. ✅ **Un solo archivo HTML** - Todo el código debe estar en `index.html`
2. ✅ **Cero dependencias externas** - Sin CDN, npm, ni bibliotecas de terceros
3. ✅ **Auditable en <30 minutos** - El código debe ser legible y comprensible
4. ✅ **100% offline** - No puede requerir conexión a internet
5. ✅ **Sin telemetría** - Cero tracking, analytics o envío de datos

### Límites Técnicos

| Aspecto | Límite v2.x |
|---------|-------------|
| Líneas de código | 800 máximo |
| Tamaño del archivo | 100KB máximo |
| Dependencias | 0 (cero) |
| Navegadores | Modernos (últimos 2 años) |

---

## ✅ Test de 4 Preguntas

Toda feature debe pasar al menos 3 de 4:

1. ¿Lo necesita el 80% de los usuarios?
2. ¿Se puede implementar en <200 líneas?
3. ¿Mantiene el archivo auditable?
4. ¿Funciona 100% offline sin setup?

---

## 🐛 Reportar Bugs

```markdown
## Bug: [Descripción corta]

### Descripción del Problema
[Qué está mal]

### Pasos para Reproducir
1. Abre XMLShield
2. [paso específico]
3. [observa el problema]

### Información del Entorno
- **Navegador:** [Chrome 120, Firefox 119, etc.]
- **OS:** [Windows 11, macOS 14, etc.]
- **Versión XMLShield:** [2.0, 2.1, etc.]
```

---

## 💡 Proponer Features

Antes de implementar:

1. **Lee** `SCOPE.md` y `ROADMAP.md`
2. **Aplica** el Test de 4 Preguntas
3. **Abre** un Issue con tu propuesta
4. **Espera** feedback del mantenedor

---

## 🔧 Guías de Código

### JavaScript
```javascript
// Indentación: 2 espacios
// Preferir const/let sobre var
const format = (xml) => {
  const parser = new DOMParser();
  return result;
};
```

### CSS
```css
/* Variables CSS para temas */
:root {
  --primary-color: #0078ff;
}
```

### Testing Manual
```
[ ] Chrome, Firefox, Safari, Edge
[ ] Modo oscuro funciona
[ ] Responsive funciona
[ ] Sin errores en consola
[ ] No hay regresiones
```

---

## ❌ NO Contribuir

Estas propuestas serán rechazadas para v2.x:

- ❌ Validación XSD/DTD
- ❌ Soporte XSLT/XPath
- ❌ Sistema de plugins
- ❌ Dependencias externas
- ❌ Telemetría

---

## 📝 Pull Request

```markdown
## Descripción
[Qué hace este PR]

## Testing
- [ ] Chrome ✅
- [ ] Firefox ✅
- [ ] Safari ✅

## Métricas
- Líneas añadidas: [número]
- Tamaño nuevo: [KB]
```

---

**Mantenedor:** Luis Mojica  
**Contacto:** luisfemojica.com
