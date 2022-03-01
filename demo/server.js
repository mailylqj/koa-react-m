const Koa = require('koa');
const app = new Koa();
const async = require('async');

app.use(async (ctx) => {

  if (ctx.url === '/' && ctx.method === 'GET') {
    // 当GET请求时候返回表单页面
    let html = `
      <h1>koa2 request post demo</h1>
      <form method="POST" action="/">
        <p>userName</p>
        <input name="userName" /><br/>
        <p>nickName</p>
        <input name="nickName" /><br/>
        <p>email</p>
        <input name="email" /><br/>
        <button type="submit">submit</button>
      </form>
    `
    ctx.body = html;
  } else if (ctx.url === '/' && ctx.method === 'POST') {
    // 当POST请求的时候，解析POST表单里的数据，并显示出来
    let postData = await parsePostData(ctx);
    ctx.body = postData;
  } else {
    // 其他请求显示404
    //var arr=[];
    //for(var i = 0; i<100000; i++){
    //    arr.push(i);
    //}
    sleep();
    //awaitData(function(){
     // console.log(1234567);
    //});
    ctx.state.globalData = {};
    ctx.state.globalData.currentUrl = new URL(ctx.href);
    ctx.body = '<h1>404！！！ o(╯□╰)o</h1>';
  }
})

function sleep() {
    let n = 0
    while (n++ < 10e7) {
        empty()
    }
}
function empty() { }

function awaitData (callback) {
  async.series([
    (done1) => setTimeout(done1, Math.random() * 1000),
    (done1) => async.parallel([
      (done2) => setTimeout(done2, Math.random() * 1000),
      (done2) => setTimeout(done2, Math.random() * 1000),
      (done2) => setTimeout(done2, Math.random() * 1000),
      (done2) => setTimeout(done2, Math.random() * 1000),
      (done2) => setTimeout(done2, Math.random() * 1000)
    ], done1)
  ], callback)
}


// 解析上下文里node原生请求的POST参数
function parsePostData( ctx ) {
  return new Promise((resolve, reject) => {
    try {
      let postdata = "";
      ctx.req.addListener('data', (data) => {
        postdata += data
      })
      ctx.req.addListener("end",function(){
        let parseData = parseQueryStr( postdata )
        resolve( parseData )
      })
    } catch ( err ) {
      reject(err)
    }
  })
}

// 将POST请求参数字符串解析成JSON
function parseQueryStr(queryStr) {
  let queryData = {};
  let queryStrList = queryStr.split('&');
  console.log( queryStrList );
  for (let [ index, queryStr ] of queryStrList.entries()) {
    let itemList = queryStr.split('=');
    queryData[ itemList[0] ] = decodeURIComponent(itemList[1]);
  }
  return queryData;
}

app.listen(3002);
console.log('[demo] request post is starting at port 3002');


/*app.use(async (ctx) => {
  if (ctx.url === '/register' && ctx.method === 'GET') {
    let html = `
    <h1>koa2 request post demo</h1>
    <form method="POST" action="/register">
      <p>userName</p>
      <input name="userName" /><br/>
      <p>nickName</p>
      <input name="nickName" /><br/>
      <p>email</p>
      <input name="email" /><br/>
      <button type="submit">submit</button>
    </form>`;
    ctx.body = html;
  } else if (ctx.url === '/register' && ctx.method === 'POST') {
    let postData = ctx.request.body;
    ctx.body = postData;
  } else {
    ctx.body = '<h1>404 </h1>';
  }
});*/
