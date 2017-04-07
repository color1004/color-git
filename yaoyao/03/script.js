window.onload = function(){
	var inSchool = document.getElementById("inSchool");
	var notInSchool = document.getElementById("notInSchool");
	var forSchool = document.getElementById("school");
	var forUnit = document.getElementById("unit");
	/*function schoolDiv(){
		forSchool.style.display="block";
		forUnit.style.display="none";
	}
	function unitDiv(){
		forSchool.style.display="none";
		forUnit.style.display="block";
	}*/
	//方法二
	function getCheckedRadio(name){
		var types = document.getElementsByName(name);
		var val = null;
		for(var i = 0; i < types.length; i++){
			if(types[i].checked){
				val = types[i].value;
			}
			types[i].onclick = changeDiv;
		}
		return val;
	}
	function changeDiv(){
		var val = getCheckedRadio("studentType");
		if(val == "inSchool"){
			forSchool.style.display = "block";
			forUnit.style.display = "none";
		}else if(val == "notInSchool"){
			forSchool.style.display = "none";
			forUnit.style.display = "block";
		}
	}
	var schoolArr = [];
	schoolArr = [
		['北京大学','清华大学','北京邮电大学','北京师范大学'],
		['复旦大学','上海交通大学','同济大学','上海财经大学'],
		['南开大学','天津大学'],
	];
	function changeSchool(){
		var selectProvince = document.getElementById("selectProvince");
		var selectSchool = document.getElementById("selectSchool");
		selectSchool.length = 1; //重置学校选项
		var selSchool = schoolArr[selectProvince.selectedIndex-1];
		for(var i = 0;i<selSchool.length;i++){
			//selectSchool[i+1] = new Option(selSchool[i],selSchool[i]);	
			selectSchool.options[selectSchool.options.length] = new Option(selSchool[i],selSchool[i]);
			//selbox.options[selbox.options.length] = new Option('text_1','value_1');
		}
	}
	function init(){
		//inSchool.onclick = schoolDiv;
		//notInSchool.onclick = unitDiv;
		changeDiv();
		document.getElementById("selectProvince").onchange = changeSchool;
	}
	init();
}