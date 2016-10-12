$(function(){
	$.get("list1.json",function(data){
		var html = "";
		$.each(data,function(i,o){
			html += "<dl>"
					+"<dt>"
					+"<a href=\"#\"><img  src=\""+o.imgSrc+"\"/></a>"
					+"</dt>"
					+"<dd class=\"dd1\">"+o.price+"</dd>"
					+"<dd class=\"dd2\">"+o.pname+"</dd>"
					+"<dd class=\"dd3\">新老包装随机发货</dd>"
					+"<dd class=\"dd4\">"
					+"<input class=\"txt\" type=\"text\" value=\""+o.count+"\"/>"
					+"<div class=\"count\">"
					+"<span class=\"add\" data-pid=\""+o.id+"\">△</span>"
					+"<span class=\"cut\" data-pid=\""+o.id+"\">▽</span>"
					+"</div>"
					+"<button class=\"btn\" data-pid=\""+o.id+"\">加入购物车</button>"
					+"</dd>"
					+"<dd class=\"dd5\">好评<i>100%</i></dd>"
					+"<dd class=\"dd6\">卷皮营销</dd>"
					+"</dl>"		
		})
		$(".table").html(html);
	});
	//将cookie内容渲染到html页面中
	var getshopcart = function(){
		var $shopcart = $.cookie("shopcart");
		if($shopcart!=undefined){
			var json = strOper.get($shopcart);
			var html ="";
			$.each(json,function(i,o){
				html += "<tr class=\"trs\">"
						+"<td class=\"td1\">"
						+"<div class=\"Img\">"
						+"<img src=\""+o.imgSrc+"\"/>"
						+"</div>"
						+"<div class=\"Detail\">"
						+"<p>"+o.pname+"</p>"
						+"<p>"+o.pname+"</p>"
						+"<p>"+o.pname+"</p>"
						+"</div>"
						+"</td>"
						+"<td class=\"td2\">"
						+"<p class=\"price\"><em>￥</em><span>66</span></p>"
						+"<p class=\"old_p\">"
						+"<em>￥</em><span>"+o.price+"</span></p>"
						+"</td>"
						+"<td class=\"td3\">"
						+"<p>"
						+"<div class=\"decrease\" data-pid=\""+o.id+"\">-</div>"
						+"<div class=\"amount\"></div>"
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
	
	//产品数量加减的函数
	var countt = function(element,type){
		var count = type === true ? 1 : -1;
		var $cont = $(element).parent().prev();
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
	$(".table>dl>dd").click(function(e){
		console.log($(e.target));
	  if($(e.target).attr("class")=="cut"){
	  	console.log(1);
			countt(e.target,false);	
		}
		else if($(e.target).attr("class")=="add"){
				countt(e.target,true);		
		}
	});
	
	//点击购物车事件
	$(".table").click(function(e){
		if($(e.target).is("button")){
			//var $target = $(e.target);
			var $target = $(e.target);
			var id = $target.data("pid");
			var Img = 				$target.parent().parent().children().eq(0).children().children().attr("src");
			var price = $target.parent().prev().prev().prev().html();
			var pname = $target.parent().prev().prev().html();
			var str = id + "#" + pname + "#" + Img + "#" + price + "#" + "1";
			var $shopcart = $.cookie("shopcart");
			if(!$shopcart){
				$.cookie("shopcart",str,{
					expires:7
				});
			}else{
				var result = strOper.add($shopcart,str);
				$.cookie("shopcart",result);
			}
			console.log($.cookie("shopcart"));
			$ProductImg = $target.parent().parent().children().eq(0).children().children();
			//console.log($ProductImg);
			//console.log($target.width());
			
			$ProductImg.clone().appendTo("body").css({
				position:"absolute",
                left: $ProductImg.offset().left + 100,
                top: $ProductImg.offset().top + 100,
                width:110,
                height:72,
                opacity:0.7
			}).animate({
				left: $target.offset().left,
                top: $target.offset().top,
                width:100,
                height:72,
                opacity:0.7
			},400).delay(300).animate({
				left:20,
				top:30,
				width:30,
                height:30,
                opacity:0
			},400);
		}
		getshopcart();
	});

	
});
