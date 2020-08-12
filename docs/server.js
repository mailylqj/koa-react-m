const Koa = require('koa');
const path = require('path');
const app = new Koa();
// const views = require('koa-views');
const Router = require('koa-router');
// const route = require('koa-route');
const koaStatic = require('koa-static');
const convert = require('koa-convert');
const config = require('./../config');

const render = require('koa-art-template');

render(app, {
	root: path.join(__dirname, './views'),
    extname: '.art',
    writeResp: true,
	debug: process.env.NODE_ENV !== 'production'
});

// 设置管理静态目录
app.use(convert(koaStatic(
	path.join(__dirname, './static')
)));

// 设置主路由
const slider = require('./routes/slider');
// 装载所有子路由
const router = new Router();
router.use('/', slider.routes());

// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods());


app.listen(8002);



console.log(`koa server is on port, 8002`);
