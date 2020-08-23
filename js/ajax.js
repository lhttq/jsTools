function ajax(option) {
    //处理请求数据
    const str = objStr(option.data);
    //ie浏览器兼容性
    let xmlhttp, timer;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    //处理请求方式
    if (option.type === "GET") {
        xmlhttp.open(option.type, option.url + "?" + str, true);
        //发送请求
        xmlhttp.send();
    } else {
        xmlhttp.open(option.type, option.url, true);
        //设置请求头
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send(str);
    }
    //监听请求状态
    xmlhttp.onreadystatechange = function(ev) {
        if (xmlhttp.readyState === 4) {
            clearInterval(timer);
            if (xmlhttp.status >= 200 && xmlhttp.status <= 300 || xmlhttp.status === 304) {
                option.seccess(xmlhttp);
            } else {
                option.error(xmlhttp);
            }
        }

    }

    //处理超时
    if (option.time) {
        timer = setInterval(function() {
            xmlhttp.sbort();
            clearInterval(timer);
        }, option.time);
    }

}

function objStr(data) {
    let str = [];
    //获取当前时间戳，用来保证ajax请求每次请求的链接都不同(防止ie浏览器的缓存问题)
    data.t = new Date().getTime();
    //遍历data，将对象保存到数组当中,并用encodeURICOmponent函数处理中文，防止浏览器乱码
    for (let key in data) {
        str.push(key + "=" + encodeURIComponent(data[key]));
    }
    console.log(str.join("&"));
    return str.join("&");
}