import puppeteer from "puppeteer";

describe("App.js", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  it("Page contains login App text", async () => {
    await page.goto("http://localhost:5000/login");
    await page.waitForSelector("#login-text");
    const text = await page.$eval("#login-text", (e) => e.textContent);
    expect(text).toContain("Lian Hub");
  });

  it("Main Page contains a menu App Header text", async () => {
    await page.goto("http://localhost:5000/Lelianto");

    await page.waitForSelector("#pullrequest2");
    const text = await page.$eval("#pullrequest2", (e) => e.textContent);
    expect(text).toContain("Pull Request");

    await page.waitForSelector("#issues2");
    const issues = await page.$eval("#issues2", (e) => e.textContent);
    expect(issues).toContain("Issues");

    await page.waitForSelector("#Overview");
    const textOverview = await page.$eval("#Overview", (e) => e.textContent);
    expect(textOverview).toContain("Overview");
  });

  it("Organization Page contains a menu App Header text", async () => {
    await page.goto("http://localhost:5000/org/OrgTesting123");

    await page.waitForSelector("#pullrequest2");
    const text = await page.$eval("#pullrequest2", (e) => e.textContent);
    expect(text).toContain("Pull Request");

    await page.waitForSelector("#issues2");
    const issues = await page.$eval("#issues2", (e) => e.textContent);
    expect(issues).toContain("Issues");

    await page.waitForSelector("#Overview");
    const textOverview = await page.$eval("#Overview", (e) => e.textContent);
    expect(textOverview).toContain("Overview");
  });
})
