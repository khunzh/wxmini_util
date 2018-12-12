# 前言
在开发微信小程序的过程中自己编写的一些小工具, 记录在这里,有不足或错误支出, 欢迎看到的朋友提建议和批评

## eventbus.js
开发中有遇到过页面A调到页面B, B中完成某些操作后, 返回A时, A的某个状态也要相应的有变化.
### 效果
![eventbus效果图](https://github.com/khunzh/wxmini_util/raw/master/imgs/eventbus.gif)
### 使用
1. 在需要使用的页面引用
```
const Eventbus = require('path/eventbus.js');
```
2. 
在页面A注册update事件, this表示A的Page实例, 箭头函数是触发后要执行的操作
```
const eventbus = new Eventbus();
// 为当前组件注册事件
eventbus.on('update', this, res => {
	// 触发后的一些操作
	console.log(res);

	// 触发以后销毁A页面的这个事件
	eventbus.destroy('updateStatus', res.event_id);
})
```
页面B触发update, {callback_data: 1}是传给回调的数据
```
const eventbus = new Eventbus();
eventbus.emit('update', {callback_data: 1});
```	