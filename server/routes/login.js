const Router = require('koa-router');
const router = new Router();

const pLimit = require('p-limit');
const limit = pLimit(20);

const path = require('path');
const fs = require('fs');
const xml2js = require('xml2js');
const parser = new xml2js.Parser({normalize: true});

const hello = require('../c-addons/build/Release/hello.node');
const xml2json = require('../c-addons/build/Release/xmltojson.node');

router.get('/', async (ctx) => {
	const data = [{
		quanjucolor: '1',
		bgColor: '#240000',
		bgColortu: '#645050',
		bgColorsan: '#C90606'
	}];

	let works = [], obj = {};
	const start2 = Date.now();
	for(let i = 0; i < 100; i ++){
		let timer = Math.floor(Math.random() * (999 - 100));
		//console.log('shunxu' + i);
		works.push(limit(() => { return new Promise(async function(resolve){
			let data = await new Promise(function(resolve){
				setTimeout(function(){
					resolve(i);
				}, timer);
			})
			obj[i] = data;
			resolve(obj);
			//console.log('序号' + i);
		})}))
	}
	const start = Date.now();
	let num1 = await Promise.all(works);
	//console.log(num1);
	console.log('时间a' + (Date.now() - start ));
	console.log('时间b' + (Date.now() - start2 ));
	
	
	console.log(hello.hello(30));
	//console.log(fibo(30));
	
	const start1 = Date.now();
	let result = await new Promise((resolve, reject) => {
		fs.readFile(path.join(__dirname, '../xml/page1.xml'), (err, data) => {
			parser.parseString(data, (err, result) => {
				resolve(result);
				console.log( Date.now() - start1 );
			});
		});
	})

	let path1 = path.join(__dirname, '../xml/page.xml');

	console.log(xml2json.parser(path1));

	let view = ctx.render('login', {data, result});
	ctx.body = view;
});

function fibo (n) {//定义算法
    return n > 1 ? fibo(n - 1) + fibo(n - 2) : 1;
 }

module.exports = router;
