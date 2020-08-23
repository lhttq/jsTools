Function.prototype.call1 = function(context) {
    if (typeof this !== 'function') {
        throw new TypeError('not funciton');
    }
    context = context || window;
    context.fn = this;
    let arg = [...arguments].slice(1);
    let result = context.fn(...arg);
    delete context.fn;
    return result;
}
Function.prototype.call2 = function() {
    if (typeof this !== 'function') {
        throw new TypeError('not funciton');
    }
    //获取参数数组
    const args = [...arguments];
    //获取this
    const that = args.shift();
    ////将函数中的this，绑定给that
    that.fn = this;
    let result = that.fn(...args);
    delete that.fn;
    return result;

}