# ǰ��
�ڿ���΢��С����Ĺ������Լ���д��һЩС����, ��¼������,�в�������֧��, ��ӭ�����������Ὠ�������

## eventbus.js
��������������ҳ��A����ҳ��B, B�����ĳЩ������, ����Aʱ, A��ĳ��״̬ҲҪ��Ӧ���б仯.
### Ч��
![eventbusЧ��ͼ](https://github.com/khunzh/wxmini_util/raw/master/imgs/eventbus.gif)
### ʹ��
1. ����Ҫʹ�õ�ҳ������
```
const Eventbus = require('path/eventbus.js');
```
2. 
��ҳ��Aע��update�¼�, this��ʾA��Pageʵ��, ��ͷ�����Ǵ�����Ҫִ�еĲ���
```
const eventbus = new Eventbus();
// Ϊ��ǰ���ע���¼�
const eventId = eventbus.on('update', this, res => {
	// �������һЩ����
	console.log(res);
})
// Ȼ���ٺ��ʵĻ���destory
eventbus.destroy('update', eventId);
```
ҳ��B����update, {callback_data: 1}�Ǵ����ص�������
```
const eventbus = new Eventbus();
eventbus.emit('update', {callback_data: 1});
```	
## util.js
### debounce
���׷�������
#### ʹ��
1. ����Ҫ��ҳ������
```
const debounce = require('path/to/util.js').debounce;
```
2. ������onPageScrollҳ���¼���ʹ��
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