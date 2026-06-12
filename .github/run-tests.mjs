// Runner headless de tests.html para CI (GitHub Actions).
// Requiere: un servidor HTTP sirviendo el repo en :8741 y playwright instalado.
// Uso local:  python -m http.server 8741 &  node .github/run-tests.mjs
import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage();
page.on("pageerror", e => console.error("ERROR DE PÁGINA:", e.message));

await page.goto("http://localhost:8741/tests.html");

// Esperar a que el summary muestre el resultado final ("N/M tests")
await page.waitForFunction(() => {
  const s = document.getElementById("summary");
  return s && /\d+\/\d+ tests/.test(s.textContent);
}, { timeout: 60000 });

const summary = await page.evaluate(() => document.getElementById("summary").textContent);
const ok = await page.evaluate(() => document.getElementById("summary").className === "ok");
console.log(summary);

if (!ok) {
  const fails = await page.evaluate(() =>
    [...document.querySelectorAll("#results .err")].map(e => e.parentElement.textContent)
  );
  for (const f of fails) console.error("\nFALLO: " + f);
}

await browser.close();
process.exit(ok ? 0 : 1);
