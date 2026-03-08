# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**XMLShield** is a privacy-first XML formatter and minifier that runs entirely in the browser with zero external dependencies. The entire application lives in a single file: `index.html`.

- **Live demo:** https://luisfemojica.github.io/xmlshield/
- **No build system, no package manager, no test runner** — open `index.html` directly in a browser to run it.

## Development Workflow

There is no build step. To develop:

1. Open `index.html` directly in a browser (double-click or `file://` URL).
2. Edit `index.html` in any text editor.
3. Reload the browser to see changes.

Manual testing checklist (from CONTRIBUTING.md):
- Chrome, Firefox, Safari, Edge
- Dark mode works
- Responsive layout works
- No console errors
- No regressions in format/minify/copy/download

## Architecture

Everything is in `index.html` (~989 lines): CSS in `<style>`, HTML markup in `<body>`, and JavaScript in `<script>`. No modules, no bundler.

### Key JavaScript Functions

| Function | Purpose |
|----------|---------|
| `prettyFormat(xml, indentChars, preserveWhitespace)` | DOM-tree walk to produce indented XML using `DOMParser` |
| `minify(xml, opts)` | Minifies via `DOMParser` + `XMLSerializer` + regex cleanup |
| `highlightXML(xml)` | Regex-based syntax highlighting without libraries |
| `renderOutput(text)` | Switches between plain textarea and highlighted view |
| `checkFileSize(text)` | Shows confirmation modal for files >10MB, blocks >15MB |
| `updateKPIs(inText, outText)` | Updates the input/output/savings byte counters |

### Browser APIs Used

- `DOMParser` — XML parsing and validation
- `XMLSerializer` — serialization for minification
- `navigator.clipboard` — copy to clipboard
- `FileReader` + drag-and-drop events — file loading

### UI Structure

```
<header>  — controls bar, options row, KPI row, error display
<workspace> (CSS grid, 2 columns)
  <panel> left  — input <textarea id="in">
  <panel> right — output <textarea id="out"> + <div id="outHtml"> (syntax view)
#loading-overlay — shown during async large-file processing
#confirm-modal   — confirmation dialog for large files (>10MB)
```

### Theming

CSS custom properties in `:root` control all colors. Dark mode adds the `.dark` class to `<body>`. Light/dark values are defined together in `:root` (light defaults) and overridden via `body.dark` selectors.

## Constraints (Non-Negotiable for v2.x)

- **Single file:** All code must stay in `index.html`.
- **Zero external dependencies:** No CDN, npm, or third-party code.
- **Size limits:** Max 800 lines, max 100KB.
- **No Web Workers:** Would break the single-file constraint.

## Feature Evaluation

Before adding any feature, apply the **Test de 4 Preguntas** (must pass 3/4):

1. Do 80% of users need it?
2. Can it be implemented in <200 lines?
3. Does it keep the file auditable in <30 minutes?
4. Does it work 100% offline without setup?

Features explicitly out of scope for v2.x: XSD/DTD validation, XSLT/XPath, Web Workers, plugins, multi-tab state, native apps (Electron, CLI, browser extension).

## Code Style

- JavaScript: 2-space indentation, `const`/`let` (no `var`)
- CSS: CSS variables for all theme colors, defined in `:root`
- Comments in Spanish (project language is Spanish)
