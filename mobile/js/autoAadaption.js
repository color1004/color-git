;(function () {
    var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
        var clientWidth = window.innerWidth;
        if (!clientWidth) return;
        if (clientWidth >= 750) {
            clientWidth = 750;
        }
        console.log(window.devicePixelRatio); // 物理分辨率 / 设备分辨率  iPhone 2 Plus 3  电脑 1
        document.documentElement.style.fontSize = 100 * (clientWidth / 750) + 'px';
    };
window.addEventListener(resizeEvt, recalc, false);
window.addEventListener('DOMContentLoaded', recalc, false);
recalc();
})();
