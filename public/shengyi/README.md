#简述
	1 中科生仪官网
	2 作者：刘春雨(email: 616872074@qq.com tel: 18210670405; github（码云，conding）: xiaoyu311)

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).


##发布
```
1. ssh root@39.106.128.7   密码：lhaGH168
2. 进入 ls /home/wwwroot/ibs-bj/public/shengyi
3. git 更新
4. pm2 stop all
7. pm2 start shengyi 



发布到测试服务器，
对应的知识点是
    pm2 
    nginx
在学习nginx的时候学习一下跨域知识点，顺便自己配置一下
```

#目录结构描述
```
├── components                  // 公共组件
├── css                         // 项目公共样式
├── dist                        // 打包完成的项目
├── getData                     // 函数封装
│   ├── Ajax.js                 // 请求函数封装
│   ├── env.js                  // 开发环境 打包环境区分
│   ├── index.js                // 数据请求
│   └── utils.js                // 函数封装
├── layouts                     // 页面默认样式
├── middlweware                 // 中间件
├── pages                       // 页面
|   ├── about                   // 关于我们子组件
|   ├── product                 // 产品页面子组件
|   ├── about.vue               // 关于我们主页面
|   ├── index.vue               // 首页
|   └── order.vue               // 订购指南页面
├── plugins                     // 运用的插件
├── static                      // 静态资源
├── store                       // vuex数据
├── node_modules
├── nuxt.config.js              // 配置文件
└── README.md                   //项目 开发 部署 介绍
```
