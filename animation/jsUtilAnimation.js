function animate(obj, json, interval, sp, fn) {
    clearInterval(obj.timer);
    //var k = 0;
    //var j = 0;
    function getStyle(obj, arr) {
        if(obj.currentStyle){
            return obj.currentStyle[arr];    //针对ie
        } else {
            return document.defaultView.getComputedStyle(obj, null)[arr]; 
        }
    }
    obj.timer = setInterval(function(){
        //j ++;
        var flag = true;
        for(var arr in json) {
            var icur = 0;
            //k++;
            if(arr == "opacity") {
                icur = Math.round(parseFloat(getStyle(obj, arr))*100);
            } else {
                icur = parseInt(getStyle(obj, arr));
            }
            var speed = (json[arr] - icur) * sp;
            speed = speed > 0 ? Math.ceil(speed): Math.floor(speed);
            if(icur != json[arr]){
                flag = false;
            } 
            if(arr == "opacity"){
                obj.style.filter = "alpha(opacity : '+(icur + speed)+' )";
                obj.style.opacity = (icur + speed)/100;
            }else {
                obj.style[arr] = icur + speed + "px";
            }
            //console.log(j + "," + arr +":"+ flag);
        }

        if(flag){
            clearInterval(obj.timer);
            //console.log(j + ":" + flag);  
            //console.log("k = " + k);
            //console.log("j = " + j);
            //console.log("DONE");
            if(fn){
                fn();
            }
        }
    },interval);
}

// 使用方法
/*var move = document.getElementById("move").getElementsByTagName("li");
function func1() {
  console.log(1);
}
for(var i = 0; i < move.length; i ++){
  move[i].onmouseover = function(){
    var _this = this;
    /*animate(_this, {width: 500, height: 200},10, 0.01, function(){
      animate(_this, {width: 300, height: 200},10, 0.01);
    });*/
    animate(_this, {left: 200},10, 0.01, func1);
	
  }
}*/ 
