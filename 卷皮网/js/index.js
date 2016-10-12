/*-----------------------------logo-------------------*/
$(function(){
	$("#toolbar .shop").mouseenter(function(){
		//console.log("ok");
		$(this).attr("class","shop active");
		$("#toolbar .shop1").css("display","block");
	}).mouseleave(function(){
		console.log("leave");
		$(this).attr("class","shop");
		$("#toolbar .shop1").css("display","none");
	});
	$(".shoppercenter").mouseenter(function(){
		$(".shopper").css("display","block");
	}).mouseleave(function(){
		$(".shopper").css("display","none");
	});
	$(".custom").mouseenter(function(){
		$(".service").css("display","block");
	}).mouseleave(function(){
		$(".service").css("display","none");
	});
});
/*----------nav---------*/ 

$(function(){
	$(".nav_right").mouseenter(function(){
		$(".hide_box").css("display","block");
	}).mouseleave(function(){
		$(".hide_box").hide();
	});
});

/*----------lunbo图---------*/ 
//$(function(){
//	var $index = 0;
//	var changeDom = function($index){
//		$(".lunbo_pic>li").hide().eq($index).fadeIn();
//		$(".lunbo_item>li").removeClass().eq($index).addClass("active");
//	}
//	$(".btnright").click(function(){
//		$index++;
//		if($index==4){
//			$index = 0;
//		}
//		changeDom($index);
//	});
//	var  temper;
//	function dingshiqi(){
//		 temper = setInterval(function(){
//				$index++;
//				if($index==4){
//					$index = 0;
//				}
//				changeDom($index);
//		},2000);
//	}
//	dingshiqi();
//	$(".btnleft").click(function(){
//		$index--;
//		if($index==-1){
//			$index = 3;
//		}
//		changeDom($index);	
//	});
//	$(".container").mouseenter(function(){
//		//console.log("ok");
//		clearInterval(temper);
//		$(".btnleft").css("display","block");
//		$(".btnright").css("display","block");
//	});
//	$(".container").mouseleave(function(){
//		
//		$(".btnleft").css("display","none");
//		$(".btnright").css("display","none");
//		dingshiqi();
//	});
//	$(".lunbo_item>li").mouseenter(function(){
//		 $index = $(this).index();
//		 changeDom($index);
//	});
//});
var container = document.querySelector(".container");
var lunbo_pic = document.querySelector(".lunbo_pic");
var lunbo_item = document.querySelector(".lunbo_item");
ajax({
	method:"get",
	isAysc:true,
	url:"lbtajax.json",
	success:function(data){
		var arr = JSON.parse(data);
		createDom(arr);
		changeStyle();
	},
	error:function(mes){
		alert(mes);
	}
	
});
function createDom(datas){
	for(var i =0;i<datas.length;i++){
		var li1 = document.createElement("li");
		var li2 = document.createElement("li");
		li1.innerHTML = "<li class=\""+datas[i].Pname+"\"></li>";
		li2.innerHTML = "<li></li>";
		lunbo_pic.appendChild(li1);
		lunbo_item.appendChild(li2);
	}
}
function changeStyle(){
	var lis = document.querySelectorAll(".lunbo_pic li");
	var btnleft = document.querySelector(".container .btnleft");
	var btnright = document.querySelector(".container .btnright");
	var items = document.querySelectorAll(".lunbo_item li");
	container.onmouseover = function(){
		//console.log(1);
		btnleft.style.display = "block";
		btnright.style.display = "block";
		clearInterval(temper);
	}
	container.onmouseout = function(){
		//console.log(1);
		btnleft.style.display = "none";
		btnright.style.display = "none";
		setInterval(temper);
	}
	var index = 0;
	for(var i=0;i<lis.length;i++){
		lis[i].index = i;
		items[i].index =i;
		btnright.onclick = function(){
			index++;
			if(index>=4){
				index=0;
			}
			for(var i=0;i<lis.length;i++){
				lis[i].style.display = "none";
				items[i].className = "";
			}
			lis[index].style.display = "block";
			items[index].className = "active";
		}
		btnleft.onclick = function(){
			index--;
			if(index<0){
				index=3;
			}
			for(var i=0;i<lis.length;i++){
				lis[i].style.display = "none";
				items[i].className = "";
			}
			lis[index].style.display = "block";
			items[index].className = "active";
		}
	}
	var temper = setInterval(function(){
		btnright.click();
	},2000);
}
/*------------------------brand项--------------------*/
$(function(){
	$("#brand .brand_bottom .daojishi").countdown('2016/10/1', function(event) {
		  $(this).html(event.strftime('%D 天 %H 小时:%M 分:%S 秒'));
		});
});
/*------------------------newproduct--------------------*/
$(function(){
	$.get("newproduct.json",function(data){
		var html = "";
		$.each(data,function(i,o){
			html += "<div class=\"product_item\">"
					+"<div class=\"lover\"></div>"
					+"<div class=\"img_item\">"
					+"<img origin=\""+data[i].origin+"\" src=\""+data[i].imgSrc+"\"/>"
					+"</div>"
					+"<h3>"
					+"<a href=\"#\">[包邮]"+data[i].kinds+"</a>"
					+"<span class=\"new1\">上新</span></h3>"
					+"<div class=\"product_price\">"
					+"<span class=\"price_cheap\">"
					+"<em class=\"yuan\">￥</em>"+data[i].price+""
					+"</span>"
					+"<span class=\"cheap\">"
					+"<em class=\"yuan\">￥</em>"
					+"<span class=\"price_old\">"+data[i].priceOld+"</span>"+data[i].cheap+""
					+"</span>"
					+"<div class=\"taobao\">"+data[i].place+"</div>"
					+"<div class=\"tbhide\">"
					+"<a class=\"gotaobao\" href=\"#\">"+data[i].place_bg+"</a>" 
					+"</div>"
					+"</div>"
					+"</div>"
		});
		$(".product_bottom").html(html);
		$(window).scroll(function(){
			$("img").each(function(i,o){
				if($(window).scrollTop()+$(window).height()>$(o).offset().top + 200&&
				100 + $(window).scrollTop()<$(o).offset().top+$(o).height()){
					var $url = $(o).attr("origin");
					$(o).attr("src",$url);
				}
			});
		});
		
		$(".product_bottom>.product_item").mouseenter(function(){
			var $index = $(this).index();
			//console.log($index);
			$(".tbhide").hide().eq($index).show();
			$(".lover").hide().eq($index).show();
		});
		$(".product_bottom>.product_item").mouseleave(function(){
			//console.log(1);
			$(".tbhide").hide();
			$(".lover").hide();
		});
	});
});



/*----------cebiantu侧边固定图---------*/
$(function(){
	var $desc = $("<div class='desc'></div>").appendTo("body");
	$("#sidebar_fix>div:not(.shoppingcart)").hover(function(){
		//console.log("1");
		var $tool = $(this).attr("tooltips");
		$desc.html($tool+"<div><img src='img/jt.png'></div>");
		$desc.css({
			left:$(this).offset().left - $desc.width()-30,
			opacity:0,
			top:$(this).offset().top
		}).stop().animate({
			left:$(this).offset().left - $desc.width()-5,
			opacity:1
		},400);
	},function(){
		$desc.stop().animate({
			left:$(this).offset().left - $desc.width()-30,
			opacity:0
		},200);
	});
	$(".person").hover(function(){
		$("person_tip").css({
			left:$(".person").offset().left - $(".person_tip").width()-30,
			opacity:0,
			top:$(this).offset().top
		}).stop().animate({
			left:$(this).offset().left - $desc.width()-5,
			opacity:1
		},400);
	},function(){
		$("person_tip").stop().animate({
			left:$(this).offset().left - $desc.width()-5,
			opacity:1
		},400);
	});
	$(window).scroll(function(){
		//console.log($(window).scrollTop());
		if($(window).scrollTop()>300){
			$("#searchItem_back").slideDown(400);
			$(".top").fadeIn(200);
		}
		else{
			$("#searchItem_back").slideUp(400);
			$(".top").fadeOut(400);
		}
		$(".top").click(function(){
			$("html,body").scrollTop(0);
		});
	});
});
/*------------------------楼层项--------------------*/
$(function(){
//	 $(window).scroll(function(){
//	 	//console.log($(window).scrollTop());
//	 	if($(window).scrollTop()>4600){
//	 		$("#louceng").fadeIn();
//	 		$("#louceng .louceng").click(function(){
//				$(".louceng").removeClass("active");
//				console.log($(this).index());
//				$(".louceng").eq($(this).index()).addClass("active");
//				var num = $(".floor").eq($(this).index()).offset().top-50 	;
//				$("body,html").animate({"scrollTop":num},200);
//			 });
//	 		$(".floor").each(function(){
//	 			if( $(window).height()+$(window).scrollTop()
//	 			-$(this).offset().top>$(window).height()/2){
//	 				$(".louceng").removeClass("active");
//	 				//console.log($(this).index());
//		 			$(".louceng").eq($(this).index()).addClass("active");
//	 		}
//	 		});
//	 	}else{
//	 		$("#louceng").fadeOut();
//	 	}
           var oNav = $('#louceng');//导航壳
		   var aNav = oNav.find('div');//导航
		   var aDiv = $('#floor .floor');//楼层
		  // var oTop = $('#goTop');
			//回到顶部
			$(window).scroll(function(){
				 var winH = $(window).height();//可视窗口高度
				 var iTop = $(window).scrollTop();//鼠标滚动的距离
				 
				 if(iTop>=4600){
				 	oNav.fadeIn();
				 	//oTop.fadeIn();
				 //鼠标滑动式改变	
				 aDiv.each(function(){
				 	if(winH+iTop - $(this).offset().top>winH/2){
				 		aNav.removeClass('active');
				 		aNav.eq($(this).index()).addClass('active');
				 	}
				 })
				 }else{
				 	oNav.fadeOut();
				 	//oTop.fadeOut();
				 }
			});
			aNav.click(function(){
				var t = aDiv.eq($(this).index()).offset().top-50;
				$('body,html').animate({"scrollTop":t},500);
				aNav.removeClass('active');
				$(this).addClass('active');
			});
});
	

