import { chromium } from 'playwright-core'

const browser = await chromium.launch({
  executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  headless: true,
})

const results = []

for (const config of [
  { name: 'desktop', width: 1440, height: 1000 },
  { name: 'mobile', width: 375, height: 812 },
]) {
  const page = await browser.newPage({ viewport: { width: config.width, height: config.height }, deviceScaleFactor: 1 })
  const errors = []
  page.on('console', (message) => { if (message.type() === 'error') errors.push(message.text()) })
  page.on('pageerror', (error) => errors.push(error.message))
  await page.goto('http://127.0.0.1:5173', { waitUntil: 'networkidle' })
  const pageHeight = await page.evaluate(() => document.documentElement.scrollHeight)
  for (let y = 0; y < pageHeight; y += Math.max(420, config.height * 0.72)) {
    await page.evaluate((top) => window.scrollTo({ top, behavior: 'instant' }), y)
    await page.waitForTimeout(90)
  }
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }))
  await page.waitForTimeout(350)
  await page.screenshot({ path: `${config.name}-full-check.png`, fullPage: true })

  const metrics = await page.evaluate(() => ({
    viewport: window.innerWidth,
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
    scrollHeight: document.documentElement.scrollHeight,
  }))

  if (config.name === 'mobile') {
    await page.getByRole('button', { name: 'Deschide meniul' }).click()
    await page.getByRole('navigation', { name: 'Navigație mobilă' }).getByRole('link', { name: 'Recenzii' }).click()
    await page.getByRole('link', { name: 'Programare', exact: true }).last().click()
    await page.getByLabel('Nume și prenume').fill('Test Vizual')
    await page.getByLabel('Telefon').fill('0700000000')
    await page.getByLabel('Cu ce vă putem ajuta?').selectOption({ label: 'Rame și lentile' })
    await page.getByRole('button', { name: 'Trimite cererea' }).click()
    await page.getByText('Mulțumim, Test!').waitFor()
  }

  results.push({ name: config.name, ...metrics, consoleErrors: errors })
  await page.close()
}

await browser.close()
console.log(JSON.stringify(results, null, 2))
