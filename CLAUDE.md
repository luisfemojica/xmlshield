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

## Automated Tests

`tests.html` is a dev-only regression suite (not distributed — the product is still only `index.html`). It loads `index.html` in an iframe and exercises the public `window.XMLShield` API. Run it over HTTP (file:// blocks iframe access in Chrome):

```
python -m http.server 8741
# open http://localhost:8741/tests.html
```

All tests must pass before committing changes to `index.html`.

CI: `.github/workflows/tests.yml` runs the full suite headless (Playwright + Chromium, via `.github/run-tests.mjs`) on every push to main and every PR.

## Architecture

Everything is in `index.html` (~2280 lines): CSS in `<style>`, HTML markup in `<body>`, and JavaScript in `<script>`. No modules, no bundler.

### Key JavaScript Functions

| Function | Purpose |
|----------|---------|
| `prettyFormat(xml, indentChars, preserveWhitespace)` | DOM-tree walk to produce indented XML using `DOMParser` |
| `minify(xml, opts)` | Minifies via `DOMParser` + `XMLSerializer` + regex cleanup |
| `highlightXML(xml)` / `highlightJSON(json)` | Regex-based syntax highlighting without libraries |
| `renderOutput(text)` | Renders output in the active view mode (`hl`/`txt`/`tree`); auto-detects XML vs JSON |
| `checkFileSize(text)` | Shows confirmation modal for files >10MB, blocks >15MB |
| `updateKPIs(inText, outText)` | Updates the input/output/savings byte counters |
| `collectStats(doc)` | Computes element/attribute/depth stats from a parsed doc |
| `updateGutter(gutter, text)` | Rebuilds line-number gutter (auto-hidden above 30k lines) |
| `xmlToJson(xml)` / `jsonToXml(json)` | XML ⇄ JSON conversion (`@attr`, `#text`, arrays for repeats) |
| `xmlToCsv(xml)` | Tabulates the dominant repeated element (RFC 4180 escaping) |
| `xpathQuery(xml, expr)` | XPath via native `document.evaluate()`; returns string array |
| `diffXML(a, b)` | Semantic diff; returns lines `➕/➖/✏️ /path — detail` (max 1000) |
| `buildTreeHTML(text)` | Read-only collapsible tree view (XML or JSON) using native `<details>` |
| `applySearch()` | Highlights search matches in the highlighted view (max 500) |
| `applyTheme(name)` / `applyURLPreset()` | Visual themes and URL-based config presets |
| `gotoLine()` | Ctrl+G: jump to a specific line in the input editor |
| `loadFile(f)` | Shared file loader for drag & drop and the Open button |
| `liveValidate()` | Debounced ✓/✗ indicator in the input header (XML or JSON, paused >2MB) |
| `savePrefs()` / `loadPrefs()` | Opt-in config persistence in localStorage (`xmlshield-prefs`) |
| `fmtBytes(n)` | Human-readable sizes for the KPI row (B/KB/MB) |
| `markGutterErrorLine(line)` | Paints the live-validation error line red in the input gutter |
| `gzipB64(text)` / `gunzipB64(b64)` | Native gzip + base64url for the share-by-URL hash (`#doc=`) |
| `loadDocFromHash()` | Loads a shared document from `location.hash` on startup |

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

- **Single file:** All product code must stay in `index.html` (`tests.html` is dev-only and not distributed).
- **Zero external dependencies:** No CDN, npm, or third-party code.
- **Size limits:** Max ~2500 lines, max 100KB (hard limit).
- **No Web Workers:** Would break the single-file constraint.

## Feature Evaluation

Before adding any feature, apply the **Test de 4 Preguntas** (must pass 3/4):

1. Do 80% of users need it?
2. Can it be implemented in <200 lines?
3. Does it keep the file auditable in <30 minutes?
4. Does it work 100% offline without setup?

Features explicitly out of scope for v2.x: XSD/DTD validation, XSLT, Web Workers, plugins, multi-tab state, native apps (Electron, CLI, browser extension). XPath (v2.5, via native `document.evaluate()`) and XML diff (v2.6) were promoted into the v2.x roadmap in June 2026 — see docs/ROADMAP.md.

## Code Style

- JavaScript: 2-space indentation, `const`/`let` (no `var`)
- CSS: CSS variables for all theme colors, defined in `:root`
- Comments in Spanish (project language is Spanish)
