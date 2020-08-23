Function.prototype.bind1 = function() {
    //将参数拆解为数组
    const args = [...arguments];
    //获取this
    const that = args.shift();
    //将函数中的this，绑定给that
    that.fn = this;
    //返回一个函数
    return function() {
        return that.fn(...args) && delete that.fn;
    }

}