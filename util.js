/**
 * 简易防抖函数
 * @param {Object} context fn运行环境 
 * @param {Function} fn 执行函数 
 * @param {Number} wait 执行函数等待时间 
 */
const debounce = function debounce(context, fn, wait = 400) {
    if (context._debounceTimer) {
        clearTimeout(context._debounceTimer);
    }
    context._debounceTimer = setTimeout(()=>{
          fn.call(context);
    } ,wait)
}
module.exports = {
    debounce
};