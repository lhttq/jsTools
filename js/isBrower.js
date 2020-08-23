//判断浏览器类型
function myBrowser() {
    const useAgent = navigator.userAgent;
    //判断是否是CHrome
    const isChrome = useAgent.indexOf("Chrome") > -1;
    //判断是否是Opera
    const isOpera = useAgent.indexOf('Opera') > -1;
    //判断是不是Firefox
    const isFirefox = useAgent.indexOf('Firefox') > -1;
    //判断是不是Edge
    const isEdg = useAgent.indexOf('Edg') > -1;
    //判断是否Safari浏览器
    const isSafari = userAgent.indexOf("Safari") > -1;
    //判断是否值IE浏览器
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera;
    if (isChrome) {
        return 'Chrome';
    }
    if (isEdg) {
        return 'Edge';
    }
    if (isFirefox) {
        return 'Firefox';
    }
    if (isIE) {
        return 'IE';
    }
    if (isOpera) {
        return 'Opera';
    }
    if (isSafari) {
        return 'Safari';
    }
}