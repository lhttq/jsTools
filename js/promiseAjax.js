//get请求
function getAjax(url) {
    //创建一个Promise对象
    let promise = new Promise((resolve, reject) => {
        //创建XMLHttpRequest对象
        let xmlhttp = new XMLHttpRequest();
        //配置参数
        xmlhttp.open('GET', url, true);
        //配置请求状态
        xmlhttp.onreadystatechange = function() {
                if (this.readyState === 4) {
                    if (this.status === 200) {
                        //成功后的操作
                        resolve(xmlhttp);
                    } else {
                        reject(xmlhttp);
                    }
                }
            }
            //发送请求
        xmlhttp.send();
    });
    //返回promise对象
    return promise;
}
//post请求
function postAjax(url, data) {
    //新建一个Promise对象
    let promise = new Promise((resolved, rejected) => {
        //创建XMLHttpRequest对象
        let xmlhttp = new XMLHttpRequest();
        //配置参数
        xmlhttp.open('POST', url, true);
        //设置请求头，表示我传递的参数的类型
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        //配置请求状态
        xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState === 4) {
                    if (xmlhttp.status === 200) {
                        resolved(xmlhttp);
                    } else {
                        rejected(xmlhttp);
                    }
                }
            }
            //发送数据
        xmlhttp.send(JSON.stringify(data));
    });
    //返回promise对象
    return promise;
}
//get和post合并
function ajax(type, url, data) {
    //新建一个promise函数
    let promise = new Promise((resolved, rejected) => {
        //新建一个XMLHttpRequest对象
        let xmlhttp = new XMLHttpRequest();
        //判断请求类型
        if (type.toLowerCase() === 'get') {
            //配置参数
            xmlhttp.open(type, url, true);
            //发送请求
            xmlhttp.send();
        } else if (type.toLowerCase() === 'post') {
            //配置参数
            xmlhttp.open(type, url, true);
            //配置请求头
            xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            //发送请求
            xmlhttp.send(JSON.stringify(data));
        } else {
            alert('请求错误');
        }
        //配置请求状态
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState === 4) {
                if (xmlhttp.status === 200) {
                    resolved(xmlhttp);
                } else {
                    rejected(xmlhttp);
                }
            }
        }
    });
    //返回promise对象
    return promise;
}