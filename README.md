开箱即用的webpack4改造dva+react+roadhog

项目中使用蚂蚁金服的dva,对于数据处理确实很方便。但是由于项目创建时dva1使用roadhog启动前端服务，dva2改用umi后roadhog遇到很多问题都不太好解决，所以决定将前端服务替换成wenpack4,webpack-dev-server.

结合最近学习webpack4，所以暂时只处理了使用webpack配置和服务启动。后续再进一步优化，以及页面处理。

实现以下核心功能

 1、区分开发环境和生产环境，不同环境的构建配置，webpack.dev.js应用开发环境，webpack.prod.js应用于开发环境
 
 2、配置服务代理使用管理easy Mock平台管理接口数据http://mock.fe.sensorsdata.cn

 3、开启dva数据管理，实现一个todolist
 


