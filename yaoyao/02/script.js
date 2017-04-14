function checkFocus(inputId){
	
	var inp = $(inputId);
	var tip = $(inputId+"-tip");
	var row = $(inputId+"-row");
	inp.onfocus = function(){
		row.style.display="table-row";
		inp.style.borderColor = "#999999";//灰色
		tip.style.color = "#999999";		
		tip.innerHTML = diffTips(inputId,0);
	}		
}

function checkNameBlur(){
	var name = $("name");
	var nameTip = $("name-tip");
	var nameRow = $("name-row");
	nameRow.style.display="table-row";
	//if(nameRow.style.display != "none"){
		var len = getStrLen(name.value);
		if(len<1){
			name.style.borderColor = "#df0110";//红色
			nameTip.style.color = "#df0110";
			nameTip.innerHTML = diffTips("name",2);
			return false;
		}else if(len<4 || len>16){
			name.style.borderColor = "#df0110";//红色
			nameTip.style.color = "#df0110";
			nameTip.innerHTML = diffTips("name",1);
			return false;
		}else{
			name.style.borderColor = "#60bb44";//绿色
			nameTip.style.color = "#60bb44";
			nameTip.innerHTML = diffTips("name",3);
			return true;
		}
	//}
}
function checkPasswBlur(){
	var passw = $("passw");
	var passwTip = $("passw-tip");
	var passwRow = $("passw-row");
	passwRow.style.display="table-row";
	//if(passwRow.style.display != "none"){
		var len = getStrLen(passw.value);
		if(len<1){
			passw.style.borderColor = "#df0110";//红色
			passwTip.style.color = "#df0110";
			passwTip.innerHTML = diffTips("passw",2);
			return false;
		}else if(len<6 || len>16){
			passw.style.borderColor = "#df0110";//红色
			passwTip.style.color = "#df0110";
			passwTip.innerHTML = diffTips("passw",1);
			return false;
		}else{
			passw.style.borderColor = "#60bb44";//绿色
			passwTip.style.color = "#60bb44";
			passwTip.innerHTML = diffTips("passw",3);
			return true;
		}
	//}
}
function checkRepassBlur(){
	var repass = $("repass");
	var repassTip = $("repass-tip");
	var repassRow = $("repass-row");
	repassRow.style.display="table-row";
	//if(repassRow.style.display != "none"){
		var len = getStrLen(repass.value);
		if(len<1){
			repass.style.borderColor = "#df0110";//红色
			repassTip.style.color = "#df0110";
			repassTip.innerHTML = diffTips("repass",2);
			return false;
		}else if(repass.value == $("passw").value){
			repass.style.borderColor = "#60bb44";//绿色
			repassTip.style.color = "#60bb44";
			repassTip.innerHTML = diffTips("repass",3);
			return true;
		}else{			
			repass.style.borderColor = "#df0110";//红色
			repassTip.style.color = "#df0110";
			repassTip.innerHTML = diffTips("repass",1);
			return false;
		}
	//}
}

function checkEmail(field){
	var apos=field.indexOf("@");
	var dotpos=field.lastIndexOf(".");
	if (apos<1||dotpos-apos<2){return false;}
	else {return true;}
}
function checkEmailBlur(){
	var email = $("email");
	var emailTip = $("email-tip");
	var emailRow = $("email-row");
	emailRow.style.display="table-row";
	//if(emailRow.style.display != "none"){
		var len = getStrLen(email.value);
		var emailValue = email.value;
		if(len<1){
			email.style.borderColor = "#df0110";//红色
			emailTip.style.color = "#df0110";
			emailTip.innerHTML = "邮箱不能为空";
			return false;
		}else if(checkEmail(email.value) == true){
			email.style.borderColor = "#60bb44";//绿色
			emailTip.style.color = "#60bb44";
			emailTip.innerHTML = "邮箱格式正确";
			return true;
		}else{
			email.style.borderColor = "#df0110";//红色
			emailTip.style.color = "#df0110";
			emailTip.innerHTML = "邮箱格式错误";
			return false;
		}
	//}		
}

function checkPhoneBlur(){
	var phone = $("phone");
	var phoneTip = $("phone-tip");
	var phoneRow = $("phone-row");
	//if(phoneRow.style.display != "none"){
		var len = getStrLen(phone.value);
		if(len == 0){
			return true;
		}else if(len == 11){
			var myreg = /^(1)\d/;
			if(myreg.test(phone.value)){				
				phone.style.borderColor = "#60bb44";//绿色
				phoneTip.style.color = "#60bb44";
				phoneTip.innerHTML = diffTips("phone",3);
				return true;
			}else{
				phone.style.borderColor = "#df0110";//红色
				phoneTip.style.color = "#df0110";
				phoneTip.innerHTML = diffTips("phone",1);
				return false;
			}
		}else{
			phone.style.borderColor = "#df0110";//红色
			phoneTip.style.color = "#df0110";
			phoneTip.innerHTML = diffTips("phone",1);
			return false;
		}
	//}
}
window.onload = function(){
	checkFocus("name");
	checkFocus("passw");
	checkFocus("repass");
	checkFocus("email");
	checkFocus("phone");	
	$("name").onblur = checkNameBlur;
	$("passw").onblur = checkPasswBlur;
	$("repass").onblur = checkRepassBlur;
	$("email").onblur = checkEmailBlur;
	$("phone").onblur = checkPhoneBlur;
	
}

function validateForm(){
	checkNameBlur();
	checkPasswBlur();
	checkRepassBlur();
	checkEmailBlur();
	checkPhoneBlur();
	if(checkNameBlur() && checkPasswBlur() && checkRepassBlur() &&
		checkEmailBlur() && checkPhoneBlur()){
			alert("提交成功！");
	}else{
			alert("输入有误！");
	}
	return false;
}
function diffTips(inputId,n){
	var tip_content = "";
	var error_content = "";
	var empty_content = "";
	var correct_content = "";
	switch(inputId){				
		case "name": 
			tip_content = "长度为4-16个字符，1个汉字为2个字符";
			error_content = "名称格式错误";
			empty_content = "名称不能为空";
			correct_content = "名称可用";
			break;
		case "passw": 
			tip_content = "数字和字母结合，长度为6到20个字符";
			error_content = "密码长度出错";
			empty_content = "密码不能为空";
			correct_content = "密码可用";
			break;
		case "repass": 
			tip_content = "再次输入相同密码";
			error_content = "密码输入不一致";
			empty_content = "不能为空";
			correct_content = "密码输入一致";
			break;
		case "email": 
			tip_content = "请输入邮箱地址";
			error_content = "邮箱格式错误";
			empty_content = "不能为空";
			correct_content = "邮箱格式正确";
			break;
		case "phone": 
			tip_content = "请输入11位手机号码";
			error_content = "手机号码格式错误";
			correct_content = "手机号码格式正确";
			break;
		default: return false;
	}
	//0为默认提示，1为错误提示，2为内容为空提示，3为正确提示
	var arr = [tip_content,error_content,empty_content,correct_content];
	return arr[n];	
}
function $(id_selector) {
	return document.getElementById(id_selector);//document.getElementById(id_selector.substring(1, id_selector.length));
}	
//长度验证
/*function getStrLen(str){			
	return str.replace(/[^\x00-\xff]/g, '__').length; 
}*/
function getStrLen (str){
	var enLen = 0;
	var zhLen = 0;
	for (let ch of str) {
		if (isASCII(ch))
			enLen++;
		else 
			zhLen++;
	} 
	return enLen + zhLen * 2;  
}
function isASCII (c) {
		return c.codePointAt(0) <= 0xFF;
}
