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
const eventId = eventbus.on('update', this, res => {
	// 触发后的一些操作
	console.log(res);
})
// 然后再合适的机会destory
eventbus.destroy('update', eventId);
```
页面B触发update, {callback_data: 1}是传给回调的数据
```
const eventbus = new Eventbus();
eventbus.emit('update', {callback_data: 1});
```	
## util.js
### debounce
简易防抖函数
#### 使用
1. 在需要的页面引用
```
const debounce = require('path/to/util.js').debounce;
```
2. 比如在onPageScroll页面事件中使用
```
onPageScroll(e) {
        const newScrollTop = e.scrollTop;
        if (!this.data.oldScrollTop) {
            this.data.oldScrollTop = newScrollTop;
        }
        const diffScrollTop = newScrollTop - this.data.oldScrollTop;
        let direction = '';
        if (diffScrollTop > 0) {
            direction = 'down';
        } else if (diffScrollTop < 0) {
            direction = 'up';
        }
        debounce(this, function () {
            console.log('the direction is ', direction);
            this.data.oldScrollTop = newScrollTop;
        }, 300);
    },
```