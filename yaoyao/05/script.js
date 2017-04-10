var box = document.getElementById("box");
box.addEventListener("transitionend", function(e) {
  if (e.propertyName === "transform"){
    box.style.borderRadius = "0";
  }
});
var operatebox = document.getElementById("operatebox");	
operatebox.addEventListener('click',function(e){
	var tag = e.target.id;
	if(tag == "GO" || tag == "TUN LEF" || tag == "TUN RIG" || tag == "TUN BAC" || tag == "TRA LEF" || tag == "TRA TOP" 
	|| tag == "TRA RIG" || tag == "TRA BOT" || tag == "MOV LEF" || tag == "MOV TOP" || tag == "MOV RIG" || tag == "MOV BOT"){
		document.getElementById("in").value = tag;
	}
});
var input = document.getElementById("in");

function getDirection(){
	var boxhead = document.getElementById("boxhead");
	var boxbody = document.getElementById("boxbody");
	var headStyleLeft = boxhead.getBoundingClientRect().left;
	var headStyleTop = boxhead.getBoundingClientRect().top;
	var bodyStyleLeft = boxbody.getBoundingClientRect().left;
	var bodyStyleTop = boxbody.getBoundingClientRect().top;
	var dire = '';	
	if(headStyleLeft < bodyStyleLeft){
		dire = 'l';
	}
	else if(headStyleLeft > bodyStyleLeft){
		dire = 'r';				
	}
	else if(headStyleTop < bodyStyleTop){
		dire = 't';
	}
	else{
		dire = 'b';				
	}
	return dire;
}

function getStyle (obj,attr) {
	return obj.currentStyle ? obj.currentStyle[attr]:getComputedStyle(obj)[attr];
}
function goAhead(){	
	var styleLeft = parseInt(box.style.left);
	var styleTop = parseInt(getStyle(box, "top"));//如果box的样式写在css文件中则用这种方法，如果是写在行内则用上述方法即可
	var direction = getDirection();
	if(direction == 'l'){
		if(styleLeft<=0){
			alert("移动不能超出方格外");
		}else{
			styleLeft -= 50;
			box.style.left = styleLeft + "px";
		}					
	}
	else if(direction == 'r'){
		if(styleLeft>=450){
			alert("移动不能超出方格外");
		}else{
			styleLeft += 50;
			box.style.left = styleLeft + "px";
			//box.style.transform = "translateX(50px)"; //移动后会变为默认向上方向
		}
	}
	else if(direction == 't'){
		if(styleTop<=0){
			alert("移动不能超出方格外");
		}else{
			styleTop -= 50;
			box.style.top = styleTop + "px";
		}
	}
	else{
		if(styleTop>=450){
			alert("移动不能超出方格外");
		}else{
			styleTop += 50;
			box.style.top = styleTop + "px";
		}
	}
}
function turnLeft(){
	var direction = getDirection();	
	if(direction == 'l'){
		box.style.transform = "rotate(-180deg)";	
		//box.style.borderRadius = "50%";
		
	}
	else if(direction == 'r'){
		box.style.transform = "rotate(0deg)";
	}
	else if(direction == 't'){
		box.style.transform = "rotate(-90deg)";
		//box.style.animationName = "tl";
	}
	else{
		box.style.transform = "rotate(90deg)";
	}
}
function turnRight(){
	var direction = getDirection();
	if(direction == 'l'){
		box.style.transform = "rotate(0deg)";		
	}
	else if(direction == 'r'){
		box.style.transform = "rotate(180deg)";
	}
	else if(direction == 't'){
		box.style.transform = "rotate(90deg)";
	}
	else{
		box.style.transform = "rotate(-90deg)";
	}		
}
function turnBac(){
	var direction = getDirection();
	if(direction == 'l'){
		box.style.transform = "rotate(90deg)";
		box.style.borderRadius = "50%";
	}
	else if(direction == 'r'){
		box.style.transform = "rotate(-90deg)";
	}
	else if(direction == 't'){
		box.style.transform = "rotate(180deg)";
	}
	else{
		box.style.transform = "rotate(0deg)";
	}
}
/*-----tra & mov-----*/
function transform(){
	var styleLeft = parseInt(box.style.left);
	var styleTop = parseInt(getStyle(box, "top"));
	switch(input.value){
		case 'TRA LEF': 
			if(styleLeft<=0){alert("移动不能超出方格外");}
			else{styleLeft -= 50; box.style.left = styleLeft + "px";}
			break;
		case 'TRA TOP': 
			if(styleTop<=0){alert("移动不能超出方格外");}
			else{styleTop -= 50; box.style.top = styleTop + "px";}
			break;
		case 'TRA RIG': 
			if(styleLeft>=450){alert("移动不能超出方格外");}
			else{styleLeft += 50; box.style.left = styleLeft + "px";}
			break;
		case 'TRA BOT': 
			if(styleTop>=450){alert("移动不能超出方格外");}
			else{styleTop += 50; box.style.top = styleTop + "px";}
			break;
		case 'MOV LEF': 
			if(styleLeft<=0){alert("移动不能超出方格外");}
			else{box.style.transform = "rotate(-90deg)"; styleLeft -= 50; box.style.left = styleLeft + "px";}
			break;
		case 'MOV TOP': 
			if(styleTop<=0){alert("移动不能超出方格外");}
			else{box.style.transform = "rotate(0deg)"; styleTop -= 50; box.style.top = styleTop + "px";}
			break;
		case 'MOV RIG': 
			if(styleLeft>=450){alert("移动不能超出方格外");}
			else{box.style.transform = "rotate(90deg)"; styleLeft += 50; box.style.left = styleLeft + "px";}
			break;
		case 'MOV BOT': 
			if(styleTop>=450){alert("移动不能超出方格外");}
			else{box.style.transform = "rotate(180deg)"; styleTop += 50; box.style.top = styleTop + "px";}
			break;
	}	
}

function carryOperate(){	
	var inp = input.value;
	if(inp == ""){
		alert("请输入指令");
	}else if(inp != "GO" && inp != "TUN LEF" && inp != "TUN RIG" && inp != "TUN BAC" && inp != "TRA LEF" && inp != "TRA TOP" 
	&& inp != "TRA RIG" && inp != "TRA BOT" && inp != "MOV LEF" && inp != "MOV TOP" && inp != "MOV RIG" && inp != "MOV BOT"){		
		alert("请输入正确指令");
		input.value = "";
	}else if(inp == "GO"){
		goAhead();
	}else if(inp == "TUN LEF"){
		turnLeft();
	}else if(inp == "TUN RIG"){
		turnRight();
	}else if(inp == "TUN BAC"){
		turnBac();
	}else{
		transform();
	}	
}
function setTime(){
	var t=setTimeout("carryOperate()",1000);
}
function init(){
	var button1 = document.getElementById("button");
	button1.onclick = setTime;
	/* //不行
	var lastClickTime = new Date().getTime();
	var delay = 1000; // transition的延迟	 
	button1.click(function(){
		if (new Date().getTime() - lastClickTime < delay) {
			return;
		}
		lastClickTime = new Date().getTime();
		carryOperate();
	});*/
}
init();