var wrap = $(".wrap");
var next = document.querySelector(".arrow_right");
var prev = document.querySelector(".arrow_left");
var index = 0;

next.onclick = function () {
    next_pic(true);
}
prev.onclick = function () {
    prev_pic(true);
}
function next_pic(click) {
    if(click && wrap.is(":animated")) return;
    index++;
    if (index > 4) {
        index = 0;
    }
    // showCurrentDot();
    var oldLeft = parseInt(wrap.css('left'));
    if (oldLeft == -3600) { // 第一张图（重复放置在最后一个的）
        oldLeft = -600;
        wrap.css('left', '-600px');
    }
    oldLeft -= 600;
    var leftCss = oldLeft + 'px';
    wrap.animate({ left: leftCss }, 500, showCurrentDot);
}
function prev_pic(click) {
    if(click && wrap.is(":animated")) return;
    index--;
    if (index < 0) {
        index = 4;
    }
    // showCurrentDot();
    var oldLeft = parseInt(wrap.css('left'));
    if (oldLeft == 0) { // 最后一张图（重复放置在第一个的）
        oldLeft = -3000;
        wrap.css('left', '-3000px');
    }
    oldLeft += 600;
    var leftCss = oldLeft + 'px';
    wrap.animate({ left: leftCss }, 500, showCurrentDot);
}
var timer = null;
function autoPlay() {
    timer = setInterval(function () {
        next_pic();
    }, 2000);
}
autoPlay();
var container = document.querySelector(".container");
container.onmouseenter = function () {
    clearInterval(timer);
}
container.onmouseleave = function () {
    autoPlay();
}
var dots = document.querySelectorAll(".buttons > span");
function showCurrentDot() {
    for (var i = 0, len = dots.length; i < len; i++) {
        dots[i].className = "";
    }
    dots[index].className = "on";
}
for (var i = 0, len = dots.length; i < len; i++) {
    (function (i) {
        dots[i].onclick = function () {
            if(wrap.is(":animated")) return;
            var oldLeft = parseInt(wrap.css('left'));
            var dis = index - i; // 距离

            //和使用prev和next相同，在最开始的照片5和最终的照片1在使用时会出现问题，导致符号和位数的出错，做相应地处理即可
            if (index == 4 && oldLeft == 0) { // 在最开始的照片5
                oldLeft = -3000;
                wrap.css('left', '-3000px');
            }
            if (index == 0 && oldLeft == -3600) { // 最终的照片1
                oldLeft = -600;
                wrap.css('left', '-600px');
            }
            // 下面两个if为了首尾连接
            if(dis == 4) {
                dis = -1;
            }
            if(dis == -4) {
                dis = 1;
            }

            var leftCss = (oldLeft + dis * 600) + "px";
            wrap.animate({ left: leftCss }, 500);
            index = i;
            showCurrentDot();
        }
    })(i);
}
