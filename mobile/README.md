// 自适应

// js

// 使用动态设置viewport，在iphone6下，scale会被设置成1/2即0.5 plus 1/3

const dpr = window.devicePixelRatio;

meta.setAttribute('content', 'initial-scale=' + 1/dpr + ', maximum-scale=' + 1/dpr + ', minimum-scale=' + 1/dpr + ', user-scalable=no');

// js 设置 不同频宽的 html 的 font-size 基准值

var clientWidth = window.innerWidth;

document.documentElement.style.fontSize = clientWidth / 10 + 'px';


// css 或者 通过媒体查询 设置
屏幕为 >= 6 的竖屏 <= 6的横屏（plus的竖屏 414） && 屏幕像素比 >=2
@media (min-device-width : 375px) and (max-device-width : 667px) and (-webkit-min-device-pixel-ratio : 2) { html{font-size: 37.5px;} }
@media (min-device-width : 320px) and (-webkit-min-device-pixel-ratio : 2) { html{font-size: 32px;} }
