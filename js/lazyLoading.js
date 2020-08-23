/**
 * 
 * @param {参数列表} imgs 
 */

function loading(imgs) {
    LazyLoad(imgs);
    window.onscroll = function() {
        LazyLoad(imgs);
    };
}
//获取元素到顶部的距离
function getTop(event) {
    return event.offsetTop;
}

function LazyLoad(imgs) {
    //获取浏览器可见高度
    const viewHeight = window.innerHeight;
    //获取滚动的值
    let scrollHeight = document.documentElement.scrollTop || document.body.scrollTop;
    //遍历每个图片
    for (let i = 0; i < imgs.length; i++) {
        //判断如果滚动的大小和屏幕高度只和大于元素到顶部的距离
        if ((viewHeight + scrollHeight) > getTop(imgs[i])) {
            //创建一个立即执行函数：定义一个匿名函数，创建了一个新的作用域，不会污染全局的命名空间，此时想要访问全局对象将对象以参数的形式传递进去即可
            (function(i) {
                //设置一个定时器，制作懒加载的演示加载效果
                setTimeout(function() {
                    let temp = new Image();
                    temp.src = imgs[i].getAttribute('data-src');
                    temp.onload = function() {
                        imgs[i].setAttribute('src', temp.src);
                    }
                }, 1000);
            })(i);
        }
    }
}