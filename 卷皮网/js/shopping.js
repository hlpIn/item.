$(function(){
	var $time = new Date().getTime();
	var $finalTime = parseInt($time) + 15*60*1000;
	var temper = setInterval( function(){
		$differ = $finalTime-parseInt(new Date().getTime());	
		
		if($differ<=0){
			clearInterval(temper);
		}else{
			  var s = parseInt($differ/1000);
			  var ls = s%60;
			  var m = parseInt(s/60);
			  var str = m + "分" + ls + "秒";
			  $(".times .time_p span").html(str);
		}	  
	},1000);
	
	//动态生成列表项
	var getshopcart = function(){
		var $shopcart = $.cookie("shopcart");
		if($shopcart!=undefined){
			var json = strOper.get($shopcart);
			var html ="";
			$.each(json,function(i,o){
				
				html += "<tr class=\"trs\">"
						+"<td class=\"td1\">"
						+"<div class=\"Img\">"
						+"<img src=\""+o.img+"\"/>"
						+"</div>"
						+"<div class=\"Detail\">"
						+"<p>"+o.name+"</p>"
						+"<p>"+o.name+"</p>"
						+"<p>"+o.name+"</p>"
						+"</div>"
						+"</td>"
						+"<td class=\"td2\">"
						+"<p class=\"price\"><em>￥</em><span>66</span></p>"
						+"<p 						class=\"old_p\"><em>￥</em><span>"+o.price+"</span></p>"
						+"</td>"
						+"<td class=\"td3\">"
						+"<p>"
						+"<div class=\"decrease\" data-pid=\""+o.id+"\">-</div>"
						+"<div class=\"amount\">"+o.count+"</div>"
						+"<div class=\"indecrease\" data-pid=\""+o.id+"\">+</div>"
						+"</p>"
						+"</td>"
						+"<td class=\"td4\">"
						+"<p><em>￥</em><span>"+o.price+"</span></p>"
						+"</td>"
						+"<td class=\"td5\">"
						+"<p class=\"dels\" data-pid=\""+o.id+"\"></p>"
						+"</td>"
						+"</tr>"
			});
			$(".list_change table").html(html);
		}
	}
	getshopcart();
	//产品数量加减的函数
	var countt = function(element,type){
		var count = type ===true ? 1 : -1;
		var $cont = type === true ? $(element).prev() : $(element).next();
		if($cont.html() == 1 && type===false){
			count = 0;
		}else{
			var $shopcart = $.cookie("shopcart");
			var id = $(element).data("pid");
			var result = strOper.counter($shopcart,id,type);
			$.cookie("shopcart",result);
		}
		$cont.html(parseInt($cont.html()) + count);
	}
	 //删除购物车中的产品事件委托
	$("table").click(function(e){
		if($(e.target).attr("class") == "dels"){
			console.log(1);
			var $shopcart = $.cookie("shopcart");
			var id = $(e.target).data("pid");
			var result = strOper.del($shopcart,id);
			$.cookie("shopcart",result);
			getshopcart();
				var $shopcart = $.cookie("shopcart");
	if(!$shopcart){
		$(".empty").css("display","block");
		$(".fool").css("display","none");
	}else{
		$(".fool").css("display","block");
		$(".empty").css("display","none");
	}
		}else if($(e.target).attr("class")=="decrease"){
			countt(e.target,false);
			$totalPrice();
		}
		else if($(e.target).attr("class")=="indecrease"){
				countt(e.target,true);
				$totalPrice();
		}
	});
	//总价格
	var $totalPrice = function(){
		var $alltip = $(".amount").html();
		var $alllength = $(".amount").length;
		var $alltip = 0;
		for(var i =0; i<$alllength;i++){
			var num = parseInt($(".amount").eq(i).html());
			var price = 				parseInt($(".td4").eq(i).children().children().eq(1).html());
			$alltip += num*price;
		}
		//console.log($alltip);
		$(".all_total span").html($alltip);
	}
	$totalPrice();
	//console.log($totalPrice());
	var $shopcart = $.cookie("shopcart");
	if(!$shopcart){
		$(".empty").css("display","block");
		$(".fool").css("display","none");
	}else{
		$(".fool").css("display","block");
		$(".empty").css("display","none");
	}
	
});
