const Router = require('koa-router');
const router = new Router();

router.get('/', async (ctx, next) => {
	const titleTxt = 'hello koa';
	await ctx.render('demo1', {
		title: titleTxt,
		content: 'kkkkk'
	});
});

module.exports = router;
