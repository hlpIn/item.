$(function(){
	/*-----------------------邮箱 ---------------------------------*/
	$("#register-box1 input").focus(function(e){
		console.log(2);
		var $target = $(e.target);
		var $content = $target.val();
		var $target = $(e.target);
		//console.log($content.length);
		var $box = $target.parent();
		var $i = $target.next();
		var $tip = $box.next();
		var $span = $tip.children();
		if($content.length==0){
			$span.html("请输入邮箱账号");
			$tip.removeClass("error");
			$box.removeClass("error");
			$box.removeClass("right");
			return false;
		}
	});
	$("#register-box1 input").blur(function(e){
		
		var $target = $(e.target);
		var $content = $target.val();
		var $target = $(e.target);
		//console.log($content.length);
		var $box = $target.parent();
		var $i = $target.next();
		var $tip = $box.next();
		var $span = $tip.children();
		console.log(3);
		if($content.length==0){
			$span.html("请输入邮箱");
			console.log($box);
			$tip.addClass("error");
			$box.addClass("error");
			return false;
		}else{
			console.log($content.length);
			if(testRegType.testEmailReg.test($content)){
				$span.html("");
				$box.addClass("right");
				return true;
			}else{
				$span.html("请输入正确的邮箱");
				console.log($box);
				$tip.addClass("error");
				$box.addClass("error");
				return false;
			}
		}
	});
	/*-----------------------密码 ---------------------------------*/
	$("#register-box2 input").focus(function(e){
		console.log(2);
		var $target = $(e.target);
		var $content = $target.val();
		var $target = $(e.target);
		//console.log($content.length);
		var $box = $target.parent();
		var $i = $target.next();
		var $tip = $box.next();
		var $span = $tip.children();
		if($content.length==0){
			$span.html("6-18个数字字母符号结合，区分大小写");
			$tip.removeClass("error");
			$box.removeClass("error");
			$box.removeClass("right");
			return false;
		}
	});
	$("#register-box2 input").blur(function(e){
		
		var $target = $(e.target);
		var $content = $target.val();
		var $target = $(e.target);
		//console.log($content.length);
		var $box = $target.parent();
		var $i = $target.next();
		var $tip = $box.next();
		var $span = $tip.children();
		console.log(3);
		if($content.length==0){
			$span.html("密码格式不符合规范");
			//console.log($box);
			$tip.addClass("error");
			$box.addClass("error");
			return false;
		}else{
			//console.log($content.length);
			if(testRegType.testPasReg.test($content)){
				$span.html("");
				$box.addClass("right");
				return true;
			}else{
				$span.html("密码格式不符合规范");
				//console.log($box);
				$tip.addClass("error");
				$box.addClass("error");
				return false;
			}
		}
	});
	
	/*-----------------------确认密码 ---------------------------------*/
	
	$("#register-box3 input").focus(function(e){
		console.log(2);
		var $target = $(e.target);
		var $content = $target.val();
		var $target = $(e.target);
		//console.log($content.length);
		var $box = $target.parent();
		var $i = $target.next();
		var $tip = $box.next();
		var $span = $tip.children();
		if($content.length==0){
			$span.html("请再次输入密码");
			$tip.removeClass("error");
			$box.removeClass("error");
			$box.removeClass("right");
			return false;
		}
	});
	$("#register-box3 input").blur(function(e){
		var $pasContent = $("#register-box2").val();
		var $target = $(e.target);
		var $content = $target.val();
		var $target = $(e.target);
		//console.log($content.length);
		var $box = $target.parent();
		var $i = $target.next();
		var $tip = $box.next();
		var $span = $tip.children();
		//console.log(3);
		if($content.length==0){
			$span.html("请输入确认密码");
			//console.log($box);
			$tip.addClass("error");
			$box.addClass("error");
			return false;
		}else{
			//console.log($content.length);
			if($content==$pasContent){
				$span.html("");
				$box.addClass("right");
				return true;
			}else{
				$span.html("两次密码输入不一致");
				//console.log($box);
				$tip.addClass("error");
				$box.addClass("error");
				return false;
			}
		}
		
	});
	
	/*-----------------------手机号 ---------------------------------*/
	$("#register-box4 input").focus(function(e){
		console.log(2);
		var $target = $(e.target);
		var $content = $target.val();
		var $target = $(e.target);
		//console.log($content.length);
		var $box = $target.parent();
		var $i = $target.next();
		var $tip = $box.next();
		var $span = $tip.children();
		if($content.length==0){
			$span.html("请输入手机号码");
			$tip.removeClass("error");
			$box.removeClass("error");
			$box.removeClass("right");
			return false;
		}
	});
	$("#register-box4 input").blur(function(e){
		
		var $target = $(e.target);
		var $content = $target.val();
		var $target = $(e.target);
		//console.log($content.length);
		var $box = $target.parent();
		var $i = $target.next();
		var $tip = $box.next();
		var $span = $tip.children();
		console.log(3);
		if($content.length==0){
			$span.html("请输入手机号码");
			console.log($box);
			$tip.addClass("error");
			$box.addClass("error");
			return false;
		}else{
			console.log($content.length);
			if(testRegType.testTelReg.test($content)){
				$span.html("");
				$box.addClass("right");
				return true;
			}else{
				$span.html("请输入正确的手机号");
				console.log($box);
				$tip.addClass("error");
				$box.addClass("error");
				return false;
			}
		}
	});
	/*-----------------------验证码 ---------------------------------*/
	$("#register-box4 input").focus(function(e){
		console.log(2);
		var $target = $(e.target);
		var $content = $target.val();
		var $target = $(e.target);
		//console.log($content.length);
		var $box = $target.parent();
		var $i = $target.next();
		var $tip = $box.next();
		var $span = $tip.children();
		if($content.length==0){
			$span.html("请输入短信验证码");
			$tip.removeClass("error");
			$box.removeClass("error");
			$box.removeClass("right");
			return false;
		}
	});
	$("#register-box4 input").blur(function(e){
		
		var $target = $(e.target);
		var $content = $target.val();
		var $target = $(e.target);
		//console.log($content.length);
		var $box = $target.parent();
		var $i = $target.next();
		var $tip = $box.next();
		var $span = $tip.children();
		console.log(3);
		if($content.length==0){
			$span.html("请输入短信验证码");
			console.log($box);
			$tip.addClass("error");
			$box.addClass("error");
			return false;
		}else{
			console.log($content.length);
			if($content==1234){
				$span.html("");
				$box.addClass("right");
				return true;
			}else{
				$span.html("请输入正确的验证码");
				console.log($box);
				$tip.addClass("error");
				$box.addClass("error");
				return false;
			}
		}
	});
//	$("#btn").click(function(){
//		if(){
//	});
});
