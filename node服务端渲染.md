## 基于MVC模式的node服务端模块渲染服务

#### 一、需求背景
* 解决新老模块在浏览器渲染的先后顺序
* 增加模块懒加载功能，提升页面性能
* 提供node服务器端校验服务，校验自定义代码模板的合法性

#### 二、MVC架构解决方案
1、模块渲染请求方案
![node渲染模块.jpg](img30.360buyimg.com/uba/jfs/t26014/99/2158150716/39768/5bc63938/5bc5833cN5d2e55b7.png)
* 模块渲染的请求通过路由解析到达对应的控制器（Controller）
* 控制器负责解析参数，调用对用的模型（Model）和视图（View）做渲染
* 视图（View）层只放静态模板文件
* 模型（Model）层则是由对应的服务（Service）和数据解析处理逻辑组成
* jshop数据模型和中台数据模型如果合并到一起，模板和数据对应关系的判断则必须在Model层来处理；如果拆分为两个，则可以在Controller层来处理。

2、模板校验请求方案
![模板校验.jpg](img12.360buyimg.com/uba/jfs/t24895/332/2168230895/42439/9f198b8b/5bc5833cN3d5c301f.png)
* 校验规则有两个方案：1、维护一套新的在node上；2、则是调用现有jshop的校验规则。
* 同样解决方案也有几个：
* node即做渲染，同时也做校验
* node服务端只做渲染，校验则调用jshop服务来校验
#### 三、MVC架构目录结构
```
├─ src                     源码
│  ├─ app                  业务代码
│  │  ├─ controllers       控制器：用于解析用户输入，处理后返回相应的结果
│  │  ├─ models            模型  ：用于定义数据模型
│  │  ├─ services          服务  ：用于编写业务逻辑层，比如连接数据库，调用第三方接口等
│  │  └─ views             视图  ：用于放置模板文件，返回客户端的视图层
│  │
│  ├─ core                 核心代码
│  │  ├─ controller.js     控制器基类
│  │  ├─ model.js          模型基类
│  │  └─ service.js        服务基类
│  │
│  ├─ middlewares          中间件
│  ├─ public               静态资源
│  ├─ router               URL 路由
│  ├─ utils                工具库
│  └─ index.js             入口：用于自定义启动时的初始化工作，比如启动 https，调用中间件、路由等
│  
├─ .eslintrc               eslint 配置文件
├─ nodemon.json            nodemon 配置文件
├─ package.json            npm 配置文件
```


