const Koa = require('koa');
const path = require('path');
const app = new Koa();
// const views = require('koa-views');
const Router = require('koa-router');
// const route = require('koa-route');
const koaStatic = require('koa-static');
const convert = require('koa-convert');
const onerror = require('koa-onerror');
const bodyParser = require('koa-bodyparser');
// const websockify = require('koa-websocket');
const WebSocket = require('ws');

const render = require('koa-art-template');

// const binaryTree = require('./middleware/binaryTree');

const serverPort = 8090

// 加载模板引擎
/* app.use(views(path.join(__dirname, './views'), {
	extension: 'hbs',
	map: { hbs: 'handlebars' }
})); */

render(app, {
	root: path.join(__dirname, './views'),
	extname: '.art',
	writeResp: false,
	debug: process.env.NODE_ENV !== 'production'
});

// 错误处理机制
//onerror(app);

// app.on('error', (err, next) => { 
//     console.log('server error',err)
// })

// app.context.onerror = function(err){
// 	console.log('server error1',err.status)
// }

// 设置管理静态目录
app.use(convert(koaStatic(
	path.join(__dirname, './../static')
)));



/**
 * 使用ctx.body解析中间件
 * 作用：把POST请求的上下文的formData数据解析到ctx.request.body
 */
app.use(bodyParser());

// app.use(binaryTree());

app.use(async(ctx, next) => {
	ctx.state = { title: 'my title', author: 'queckezz' };
	await next();
	console.log('error 之后的执行');
});

// 设置主路由
const index = require('./routes/index');
const login = require('./routes/login');
const user = require('./routes/user');
const active = require('./routes/active');
// const chat = require('./routes/chat');
const controller = require('./controller/index');

// 装载所有子路由
const router = new Router();
// const socket = websockify(app);
router.use('/', index.routes());
router.use('/login', login.routes());
router.use('/user', user.routes());
router.use('/active', active.routes());
router.use('/ajax', controller.routes());

// socket.ws.use(route.all('/chat', chat.routes()));

// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods());

const data = { count: 2 };
/* socket.ws.use(route.all('/ws/chat', (ctx, next) => {
	ctx.websocket.send(JSON.stringify(data));
	ctx.websocket.on('message', (message) => {
		ctx.websocket.send(message);
		console.log(message);
	});
	console.log(ctx.websocket);
	console.log(this);
}));
app.listen(serverPort);*/
const appServer = app.listen(serverPort);

const wss = new WebSocket.Server({
	server: appServer
});

wss.on('connection', (ws, req) => {
	ws.on('message', (message) => {
		wss.clients.forEach((client) => {
			if (client !== ws && client.readyState === WebSocket.OPEN) {
				client.send(message);
			}
		});
	});
	// ws.send(JSON.stringify(data));
});

console.log(`koa server is on port, ${serverPort}`);
