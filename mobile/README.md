// 自适应

// js

// 使用动态设置viewport，在iphone6下，scale会被设置成1/2即0.5 plus 1/3

const dpr = window.devicePixelRatio;


设置 scale解决 iPhone6 1px

const viewport = document.querySelector("meta[name=viewport]");

viewport.setAttribute('content', 'initial-scale=' + 1/dpr + ', maximum-scale=' + 1/dpr + ', minimum-scale=' + 1/dpr + ', user-scalable=no');


或者meta标签已存在

var metaTag=document.createElement('meta');

metaTag.name = "viewport"

metaTag.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"

document.getElementsByTagName('head')[0].appendChild(metaTag);


// js 设置 不同频宽的 html 的 font-size 基准值

var clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

document.documentElement.style.fontSize = clientWidth / 10 + 'px';


// css 或者 通过媒体查询 设置
屏幕为 >= 6 的竖屏 <= 6的横屏（plus的竖屏 414） && 屏幕像素比 >=2
@media (min-device-width : 375px) and (max-device-width : 667px) and (-webkit-min-device-pixel-ratio : 2) { html{font-size: 37.5px;} }
@media (min-device-width : 320px) and (-webkit-min-device-pixel-ratio : 2) { html{font-size: 32px;} }
