const Router = require('koa-router');
const router = new Router();
const path = require('path');

//const mongoose = require('mongoose');
//const db = mongoose.connect('mongodb://127.0.0.1:27017/testDB');
const puppeteer = require('puppeteer');

router.post('/setMessage', async (ctx, next) => {
	ctx.body = {
		id: 123456,
		name: '消息发送成功'
	};
});

router.post('/getMessage', async (ctx) => {
	function processMessages(data) {
		ctx.body = data;
		return data.code;
	}
});

router.post('/pageContent', async (ctx) => {
	const { content, screen: {width, height} } = ctx.request.body;
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.setViewport({ width, height, deviceScaleFactor: 1});
	await page.setContent(content);
	await page.screenshot({path: path.join(__dirname, '../assets/image/example.png')});

	await browser.close();
	ctx.body = {
		id: 123456,
		name: '消息发送成功'
	};
})

module.exports = router;
