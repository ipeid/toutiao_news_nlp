# toutiao_news_nlp


## TODOS

### 后端部分
- 动态获取js文件中的TAC.sign方法

### 前端部分
- 搭建基础页面
---

## 前端技术
> 使用npm脚本启动python服务，webpack-dev-server启动前端服务并代理后端接口

- react,webpack,npm,ES6
- UI使用antd

### 开发过程总结

1. .babelrc配置
2. .eslintrc.js配置lint **保证代码风格一致**
3. module.rules.type 设置为`javascript/esm`或导致webpack将ESM包的import打包为require导致`require is not defined`BUG