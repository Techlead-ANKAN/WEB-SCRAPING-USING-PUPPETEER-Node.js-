import puppeteer from "puppeteer";

const scrape = async () => {

    const browser = await puppeteer.launch();

    const page = await browser.newPage();

    const url = "https://www.flipkart.com/search?q=laptop&sid=6bo%2Cb5g&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_7_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_7_na_na_na&as-pos=1&as-type=RECENT&suggestionId=laptop%7CLaptops&requestId=0c0fbc66-0620-46e9-8ae1-65e57a1ef981&as-searchtext=laptop&sort=price_desc";

    await page.goto(url);

    const title = await page.title();
    console.log(`Page Title: ${title}`);

    await browser.close();
}


scrape();