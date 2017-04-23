var d = document.getElementById("backimage1");
var button = document.getElementById("tk");
button.onclick = function(){
	createfom();
}
function createfom(){	
	var shadow = document.createElement("div");		
	d.appendChild(shadow);	
	shadow.id="shadow";
	//使遮盖层的高为100%
	var oHeight = document.documentElement.scrollHeight;
	shadow.style.height = oHeight + 'px';
	
	var dia1 = document.createElement("div");	
	dia1.id="dia1";
	d.appendChild(dia1); 
	
	var p1 = document.createElement("p");
	p1.innerHTML="这是一个浮出层";
	p1.id="p1";
	dia1.appendChild(p1); 
	
	var div2 = document.createElement("div");
	div2.id="div2";
	dia1.appendChild(div2); 
	
	var p2 = document.createElement("p");
	p2.innerHTML="这是一个浮出层";
	p2.id="p2";
	div2.appendChild(p2);
	
	var button1 = document.createElement("button");
	button1.innerHTML="确定";
	button1.id="button1";
	div2.appendChild(button1); 
	
	var button2 = document.createElement("button");
	button2.innerHTML="取消";
	button2.id="button2";
	div2.appendChild(button2);

	turnoff(button1,dia1,shadow);
	turnoff(button2,dia1,shadow);
	turnoff(shadow,dia1,shadow);
}
//关闭浮出层
function turnoff(element,eventOne,eventTwo){
	element.onclick = function(){
		d.removeChild(eventOne);
		d.removeChild(eventTwo);
	}
}
