# 模块化组件，私有NPM服务器搭建
#### 介绍
  有多种搭建私有化NPM方式，其中主流方式有两种：cnpm 和 sinopia。其中sinopia搭建方式比较友好，故选择sinopia。
######  sinopia有以下几个优势值得关注：

######  1.  不同步拉取npm库，占据大量硬盘，没有硬盘被撑爆的问题；
######  2.  安装配置极其简单,不需要数据库；
######  3.  支持配置上游registry配置，一次拉取即缓存；
######  4.  支持forever及pm2守护进程管理；
#### 安装步骤,基于nodejs环境
1.安装
```
  npm install -g sinopia
```

2.启动
```
  sinopia
```
访问http://localhost:4873/ 正常，表示安装成功。

3.配置<br/>
```
npm set registry http://localhost:4873
```
将npm安装设置成sinopia管理
```
npm adduser --registry http://localhost:4873
```
新增sinopia管理人员
```
npm login
```
登录
sinopia还有很多相关文件配置，具体的配置请阅读https://segmentfault.com/a/1190000005790827

#### 守护进程<br>
已经完成了sinopia简单安装启动，但是当cmd窗口关闭，sinopia服务也将关闭。forever可以将其变成后台进程启动。<br>
1.安装
```
  npm install -g forever
```

2.启动
```
  forever
```
出现一堆帮助信息，表示安装成功

3.通过forever启动sinopia

*  找到nodejs的安装目录
*  XX\XX\nodejs\node_modules\sinopia\bin ，将cmd切换到这个目录下
*  `forever start sinopia`，启动守护进程成功。关闭cmd窗口也是可以访问

4.日志输出<br>
sinopia输出日志，在.forever\xx.log 。打开可以查看sinopia的运行情况

5.更多的forever操作指令<br>
https://github.com/foreverjs/forever