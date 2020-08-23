function bindEvent(obj) {
    obj.elem.addEventListener(obj.type, event => {
        const target = event.target;
        if (obj.selector) {
            //代理绑定
            if (target.matches(obj.selector)) {
                obj.fn.call(target, event);
            }
        } else {
            // 普通绑定
            obj.fn.call(target, event);
        }
    });
}