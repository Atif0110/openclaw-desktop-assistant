const { chromium } = require("playwright");

async function runLinkedInPost(text){
  console.log("Approval window (15s)...");
  await new Promise(r=>setTimeout(r,15000));

  const browser = await chromium.launch({headless:false});
  const page = await browser.newPage();

  await page.goto("https://linkedin.com/login");
  console.log("Login manually...");
  await page.waitForTimeout(60000);

  await page.goto("https://linkedin.com/feed");

  await page.click("text=Start a post");
  await page.fill("div[role='textbox']",text);
  await page.click("button:has-text('Post')");

  await page.waitForTimeout(4000);
  await browser.close();
}

async function commentHashtag(){
  const browser = await chromium.launch({headless:false});
  const page = await browser.newPage();

  await page.goto(
   "https://www.linkedin.com/search/results/content/?keywords=%23openclaw"
  );

  console.log("Login if needed...");
  await page.waitForTimeout(60000);

  const btns = await page.$$("button:has-text('Comment')");

  if(btns[0]){
    await btns[0].click();
    await page.keyboard.type(
      "Try my OpenClaw desktop assistant for non-tech users 🚀"
    );
    await page.keyboard.press("Enter");
  }

  await page.waitForTimeout(4000);
  await browser.close();
}

module.exports = { runLinkedInPost, commentHashtag };
