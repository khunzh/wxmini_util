class Eventbus {
    constructor() {
    }

    /**
     * 注册事件
     * @param {String} name 事件名称 
     * @param {*} context page/component实例
     * @param {*} callback 事件回调
     */
    on(name, context, callback) {
        const id = Eventbus.events.length;
        const group = {
            id: id,
            ctx: context,
            cb: callback
        };
        if (Array.isArray(Eventbus.events[name])) {
            Eventbus.events[name].push(group)
        } else {
            Eventbus.events[name] = [group];
        }
		return id;
    }
    /**
     * 触发事件
     * @param {String} name 事件名称 
     * @param {*} res 回调携带数据
     */
    emit(name, res) {
        const groups = Eventbus.events[name];
        if (Array.isArray(groups)) {
            groups.forEach(group => {
                const context = group.ctx;
                const callback = group.cb;
                const eventId = group.id;
                callback.call(context, {
                    data: res,
                    event_id: eventId
                });
            })
        }
    }
    /**
     * 销毁某事件, 触发完事件后记得销毁
     * @param {String} name 事件名称 
     * @param {String} id 时间id, 由emit返回参数携带
     */
    destroy(name, id) {
        const groups = Eventbus.events[name];
        if (Array.isArray(groups)) {
            Eventbus.events[name] = groups.filter(group => {
                return group.id != id
            })
        }
        if(Eventbus.events[name].length === 0){
            delete Eventbus.events[name]
        }
    }
}
Eventbus.events = []; // 模拟静态属性
module.exports = Eventbus;