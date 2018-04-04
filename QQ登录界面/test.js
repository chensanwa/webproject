window.onload = function(){
	var div1 = document.getElementById('myDiv');
	// var logo = document.getElementById('logo');
	var select=document.getElementById('right');
	div1.onmousedown = function(event){
　　　　var oevent = event || window.event;
　　　　var distanceX = oevent.clientX - div1.offsetLeft;
　　　　var distanceY = oevent.clientY - div1.offsetTop;
　　　　document.onmousemove = function(event){
　　　　　　var oevent = event||window.event;
　　　　　　div1.style.left = oevent.clientX - distanceX + 'px';
　　　　　　div1.style.top = oevent.clientY - distanceY + 'px';    
　　　　};
　　　　document.onmouseup = function(){
　　　　　　document.onmousemove = null;
　　　　　　document.onmouseup = null;
　　　　};
// console.log(12);
	}

	var select=document.getElementById('select');
	console.log(select);
	// select.addEventLisenter('click',yyy,false);


	var btn = document.getElementById('botton');
	btn.onclick = function(){

		var name = document.getElementById('nameVal').value;
		var password = document.getElementById('passwordVal').value;
		if(name == '' || name == null || password == '' || password == null){

			alert('账号密码都不能为空!');
		event.stopPropagation();

		}
		else if(password != '123456'){
			alert('密码不正确!');
		}
		else{
			alert('登录成功！');
		}
		
	}

	select.onclick=yyy;

	var submit=document.getElementById('submit');
	submit.onclick=function(event){
		event.stopPropagation();
	}
	document.getElementById('right').onmousedown=function(e){
		// e.preventDefault(); 

		e.stopPropagation();
	}
	
}


function yyy(event){
	console.log(event)
		event.preventDefault(); 
		event.stopPropagation();		
	}
