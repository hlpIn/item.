/*-------------allkind部分-------------------*/
$(function(){
	$(".all_lf").hover(function(){
		$(".all_lf>ul").slideDown(400);
		$(".all_lf>ul>li:first").hover(function(){
			$(".all_lf .son").fadeIn(400);
		},function(){
			$(".all_lf .son").fadeOut(400);
		});
	},function(){
		$(".all_lf>ul").slideUp(400);
	});
});

/*-------------放大镜区域-------------------*/
//$(function({
//	$(".smallbox").mouseenter(function(){
//		console.log(1);
//	});
//});
$(function(){
	
	$.get("product.json",function(data){
		var $index =0;
		var html = "";
		var listHtml = "";
		var colorHtml = "";
		var priceHtml = "";
		$.each(data,function(i,o){
			//"<div class="tool"></div>"
			html += "<img src=\""+o.imgSrcB+"\"/>"
			   		+"<div class=\"tool\"></div>";
//			listHtml +=  "<div class=\"list\">"
//						+"<img src=\""+o.imgSrcS+"\"/>"
//						+"</div>";
			//listHtml += "<img src=\""+o.imgSrcS+"\"/>"	
		});
		$(".smallbox").html(html);
		$.each(data,function(i,o){
			listHtml +=  "<div class=\"list\">"
						+"<img src=\""+o.smallImg+"\"/>"
						+"</div>";
			priceHtml += "<span>"+o.price+"</span>"
		});
		
		$.each(data,function(i,o){
			colorHtml +="<span><img class=\"Img0\" src=\""+o.smallImg+"\"/>"
						+"<img class=\"Imghide\" src=\""+o.smallimgs+"\"/>"
						+"</span>"				
		});
		$(".lis").html(listHtml);
		$(".p3").html(priceHtml);
		$(".span_par").html(colorHtml);
		
		
		$(".smallbox").mouseenter(function(e){
			//console.log(1);
			$(".smallbox img").hide().eq($index).show();
			$(".bigbox img").hide().eq($index).show();
			$(".tool").show();
			$(".bigbox").show();
			$(".tool").mousemove(function(e){
				var x = e.pageX;
				var y = e.pageY;	
				leftx = x - $(".smallbox").offset().left - 
						($(".tool").width())/2 ;
				topy = y - $(".smallbox").offset().top - ($(".tool").height())/2;
				X= Math.max(Math.min(leftx,$(".smallbox").width() - 				$(this).width()),0);
	            Y= Math.max(Math.min(topy,$(".smallbox").height() - 				$(this).height()),0);
				$(".tool").css({
					left:X + "px",
					top:Y+"px"
				});
				$x = -X*2 + "px";
				$y = -Y*2 + "px";
				$(".bigbox img").css({
					marginLeft:$x,
					marginTop:$y
				});
			});
		});
	//选择....图片
		$(".p7>.span_par>span").click(function(){ 
			$index = $(this).index();
			//console.log($index);
			$(".p7>.span_par>span").removeClass("active");
			$(this).addClass("active");
			$(".Imghide").css("display","none");
			$(this).children().eq(1).css("display","block");
			$(".smallbox img").hide().eq($index).show();
			//console.log($index);
		});
		/*-----------添加购物车shoppingcar 操作---------------------*/	
		$(".shoppingcar").click(function(e){
//			var id = $(this).attr("pid")
//			console.log(id);
//			var img = $(".Img0").eq($index).attr("smallImg");
//			console.log($(".Img0").eq($index));
			//console.log(1);
			/*-----------克隆clone---------------------*/
			$(".smallbox img").eq($index).clone().appendTo("body").css({
				
				position:"absolute",
				left:$(".shoppingcar").offset().left + 200,
				top:$(".shoppingcar").offset().top + 30,
				width:200,
				height:150,
				opacity:1
			}).animate({
				left:$(".shoppingcar").offset().left -150,
				top:$(".shoppingcar").offset().top - 150,
				width:100,
				heigth:90,
			},600).delay(300).animate({
				left:$(".shoppingcar").offset().left -350,
				top:$(".shoppingcar").offset().top - 500,
				opacity:0,
				width:20,
				heigth:30,
			},400);
		});
	$(".smallbox").mouseleave(function(){
		$(".tool").hide();
		$(".bigbox").hide();
	});
	$(".lis .list").mouseenter(function(){
		//cosole.log(1);
		$index = $(this).index();
		//console.log($index);
		$(".smallbox img").hide().eq($index).show();
	});
	
	});
	

/*-----------------购物车数量--------------------*/

	$(".p6>span:not(:first)").click(function(){
		$(".p6>span:not(:first)").removeClass("active");
		$(this).addClass("active");
	});
	var $num = 1;
	$(".span_tp").click(function(){
		$num++;
		if($num>=20){
			$num = 20;
		}
		$(".p8 div:first").html($num);
	});
	$(".span_bt").click(function(){
		$num--;
		if($num==0){
			$num = 1;
		}
		$(".p8 div:first").html($num);
	});
	$(".buy").click(function(){
		
	});

	var $flag = true;
	$(".lastSpan").click(function(){
		if($flag){
			$flag = false;
			$(".inner").css("display","block");
		}else{
			$flag = true;
			$(".inner").css("display","none");
		}
		
	});
});
