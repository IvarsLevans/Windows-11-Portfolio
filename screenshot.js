const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto('https://ivarslevans.vercel.app/');
  await page.screenshot({ path: 'screenshot.png' });
  await browser.close();
})();
