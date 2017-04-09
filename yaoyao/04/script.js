
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

function goAhead(){
	var box = document.getElementById("box");	
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
	}
	else if(direction == 'r'){
		box.style.transform = "rotate(0deg)";
	}
	else if(direction == 't'){
		box.style.transform = "rotate(-90deg)";
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
function carryOperate(){
	var input = document.getElementById("in");
	var inp = input.value;
	if(inp == ""){
		alert("请输入指令");
	}else if(inp != "GO" && inp != "TUN LEF" && inp != "TUN RIG" && inp != "TUN BAC"){		
		alert("请输入正确指令");
		input.value = "";
	}else if(inp == "GO"){
		goAhead();
	}else if(inp == "TUN LEF"){
		turnLeft();
	}else if(inp == "TUN RIG"){
		turnRight();
	}else{
		turnBac();
	}	
}	
function init(){
	var button = document.getElementById("button");
	button.onclick = carryOperate;
}
init();

function getStyle (obj,attr) {
	return obj.currentStyle ? obj.currentStyle[attr]:getComputedStyle(obj)[attr];
}
