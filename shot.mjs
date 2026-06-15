import { chromium } from 'playwright'

const url = 'http://localhost:5173/'
const browser = await chromium.launch()

// триггеримо whileInView: повільний скрол до низу й назад
async function scrollThrough(page) {
  await page.evaluate(async () => {
    const h = document.body.scrollHeight
    for (let y = 0; y <= h; y += 400) {
      window.scrollTo(0, y)
      await new Promise((r) => setTimeout(r, 90))
    }
    window.scrollTo(0, 0)
  })
  await page.waitForTimeout(700)
}

// Desktop full page
const desk = await browser.newPage({ viewport: { width: 1280, height: 900 } })
await desk.goto(url, { waitUntil: 'networkidle' })
await scrollThrough(desk)
await desk.screenshot({ path: 'qa-desktop.png', fullPage: true })

// Mobile
const mob = await browser.newPage({
  viewport: { width: 390, height: 844 },
  deviceScaleFactor: 2,
})
await mob.goto(url, { waitUntil: 'networkidle' })
await scrollThrough(mob)
await mob.screenshot({ path: 'qa-mobile.png', fullPage: true })

const errors = []
desk.on('console', (m) => m.type() === 'error' && errors.push(m.text()))
console.log('errors:', errors.length ? errors : 'none')

await browser.close()
console.log('shots saved')
