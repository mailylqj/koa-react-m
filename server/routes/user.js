const Router = require('koa-router');
const router = new Router();

router.get('/:id', async (ctx, next) => {
	const title = 'hello koa';

	const date = Date.now();
	for (var i = 0; i < 100000000; i++) {
		var p = i % 2;
	}
	console.log( Date.now() - date );

	const date1 = Date.now();
	try{
		for (var i = 0; i < 100000000; i++) {
			var p = i % 2;
		}
		throw new Error();
	}catch(e){
		console.log(e)
	}
	console.log( Date.now() - date1 );

	const date2 = Date.now();
	try{
		run();
		throw new Error();
	}catch(e){
		console.log(e)
	}
	console.log( Date.now() - date2 );

	function run(){
		for (var i = 0; i < 100000000; i++) {
			var p = i % 2;
		}
	}
	
	ctx.body = await ctx.render('user', {
		titleTxt: title,
		content: 'kkkkk'
	});
});

module.exports = router;