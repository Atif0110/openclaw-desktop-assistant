const { chromium } = require("playwright");

async function runLinkedInPost(text){
  const browser = await chromium.launch({headless:false});
  const page = await browser.newPage();

  console.log("Opening LinkedIn...");
  await page.goto("https://linkedin.com");

  console.log("Demo mode — not posting.");
  await page.waitForTimeout(5000);

  await browser.close();
}

async function commentHashtag(){
  const browser = await chromium.launch({headless:false});
  const page = await browser.newPage();

  console.log("Searching #openclaw...");
  await page.goto(
   "https://www.linkedin.com/search/results/content/?keywords=%23openclaw"
  );

  await page.waitForTimeout(5000);

  console.log("Demo comment simulated.");
  await browser.close();
}

module.exports = { runLinkedInPost, commentHashtag };
