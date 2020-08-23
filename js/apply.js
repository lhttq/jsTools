Function.prototype.apply1 = function() {
    if (typeof this !== 'function') {
        throw new TypeError('not funciton');
    }
    //解构参数
    let args = [...arguments];
    //获取this
    const that = args.shift();
    args = args[0];
    //将this传递给that
    that.fn = this;
    //获取执行结果
    const result = that.fn(...args);
    //将this销毁
    delete that.fn;

    return result;


}