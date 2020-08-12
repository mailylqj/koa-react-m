const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');
const iPhone = devices['iPad Pro'];
let timeout = function (delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve(1)
            } catch (e) {
                reject(0)
            }
        }, delay);
    })
};

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setViewport({
        width: 1366,
        height: 800
    });
    //await page.goto('https://sale.jd.com/act/SmlORscWVx8tCd.html');
    await page.goto('https://sale.jd.com/act/DThzXVbRWSZPkcw.html');
    await timeout(500);
    await autoScroll(page);
    await page.screenshot({ path: 'example.jpg', type: 'jpeg', quality: 60, fullPage: true });
	await browser.close();
	console.log(111);
})();

async function autoScroll(page) {
    await page.evaluate(async () => {
        await new Promise((resolve, reject) => {
            var totalHeight = 0;
            var distance = 200;
            var timer = setInterval(() => {
                var scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;

                if (totalHeight >= scrollHeight) {
                    clearInterval(timer);
                    resolve();
                }
            }, 500);
        });
    });
}
