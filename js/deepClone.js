function deepClone(obj) {
    //判断参数是不是对象或者为空，如果是，将参数返回
    if (typeof obj !== 'object' || obj == null) {
        return obj;
    }
    let result;
    if (obj instanceof Array) {
        result = [];
    } else {
        result = [];
    }
    for (let key in obj) {
        //判断可以是不是obj的属性，而不是原型的属性
        if (obj.hasOwnProperty(key)) {
            //递归
            result[key] = deepClone(obj[key]);
        }
    }
    return result;

}