$(function(){
  $(".x_b").click(function(e){
	    e.preventDefault();
      $(".place").css("display","block");
			$(".face").css("display","block");
			$(".price").css("display","block");
			$("#x_b1").css("display","block");
			$("#x_b").css("display","none");
	});
	$(".x_b1").click(function(e){
	    e.preventDefault();
      $(".place").css("display","none");
			$(".face").css("display","none");
			$(".price").css("display","none");
			$("#x_b1").css("display","none");
			$("#x_b").css("display","block");
	});
	$(".sort-wrap").on("click","a",function(e){
	    e.preventDefault();
      $tar=$(e.target);
      $tar.css("color","#cf000e").siblings().css("color","#666");
	})
	
	$(window).scroll(()=>{
			var scrollTop=$(window).scrollTop();
			//如果scrollTop>=380,就让class为left_side的div固定定位
			if(scrollTop>=380){
				$(".left_side").css({"position":"fixed","z-index":800,"top":200,"background":"rgba(0,0,0,0.8)"});
			}else{
				$(".left_side").css({"position":"absolute","top":190,"background":"rgba(0,0,0,0.6)"});
      }
	});
    var shop_id =parseInt(location.search.split("shop_id=")[1]);
    console.log(shop_id);
    getProduct1(shop_id);
    getProduct2(shop_id);
    getProduct3(shop_id);
    getProduct4(shop_id);
    $(".left_side").on("click",".side_th a",function(e){
        //var $tar=$(e.target);
        console.log(shop_id);
        console.log(456789);
        getProduct1(shop_id);
        getProduct2(shop_id);
        getProduct3(shop_id);
        getProduct4(shop_id);
    })
    function  getProduct1(ssid){
        $.ajax({
            type:"get",
            url:"data/routes/products/getProduct1.php",
            data:{shop_id:ssid},
            success:function (data) {
                console.log(data);
                var html="";
                for(var obj of data ){
                    html+=`
                         <div class="sect_top_left">
																<h2>品牌介绍</h2>
																<h3>Brand introduction</h3>
																<p class="first_p">  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${obj.shop_words.split(',')[0]}</p>
																<p>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${obj.shop_words.split(',')[1]}</p>
																<p>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${obj.shop_words.split(',')[2]}</p>
												 </div>
												 <div class="sect_top_right">
																<img src="${obj.shop_pic}" >
												 </div>`
                }
                $('.section1_con').html(html);
            }
        })
    }
    function  getProduct2(ssid){
        $.ajax({
            type:"get",
            url:"data/routes/products/getProduct2.php",
            data:{shop_id:ssid},
            success:function (data) {
                console.log(data);
                var html="";
                for(var obj1 of data){
                    html+=`
							<a href="${obj1.brand_id}" class="br">${obj1.brand_name}</a>`
                }
                $('.brands').html(html);
            }
        })
    }
    function  getProduct3(ssid){
        $.ajax({
            type:"get",
            url:"data/routes/products/getProduct3.php",
            data:{shop_id:ssid},
            success:function (data) {
                console.log(data);
                var arr1=[];
                var html="";
                for(var obj2 of data){
                    obj2.st_id = ["" ,"仲尼","伏羲","宣和","混沌","灵机","竹节","绿绮","落霞","蕉叶","连珠","神农","连珠D1","连珠D2","霹雳"];
                    console.log(arr1);
                }
                //arr1= ["" ,"仲尼","伏羲","宣和","混沌","灵机","竹节","绿绮","落霞","蕉叶","连珠","神农","连珠D1","连珠D2","霹雳"];
                for( var tmp of arr1){
                    html+=`
                    	     <a href="${obj2.st_id}">${tmp}</a>`
                }
                $(".styles").html(html);
            }
        })
    }
    var resData;
    var pcount = 1;
    function  getProduct4(ssid){
        $.ajax({
            type:"get",
            url:"data/routes/products/getProduct4.php",
            data:{shop_id:ssid},
            success:function (data) {
                console.log(data);
                resData=data;
                if(resData.length>12){
                    var html = "";
                    for (var i =0; i <  12; i++) {
                        var obj3 = data[i];
                        console.log(obj3);
                        html += `
                         <div id="product1">
                        <div class="product1">
                             <a href="gq_product_detail.html?${obj3.lid}" target="_blank">
                                 <img src="${obj3.tu1}" class="d-img">
                             </a>
                             <div class="d-price">
                                 <b class="p-money">
                                     <sub class="m-mark">￥</sub>
                                     <span class="m-count">${obj3.price}</span>
                                 </b>
                                 <del class="p-del">
                                     <sub class="d-mark">￥ ${obj3.old_price}</sub>
                                 </del>
                             </div>
                             <a href="gq_product_detail.html?${obj3.lid}" class="d-name">
                                 <span>${obj3.title}</span>
                             </a>
                             <div class="d-tags">
                                 <span class="t-item t-sale">
                                     <a href="javascript:;">
                                         已售
                                         <b class="t-num JS_async_sale_num">${obj3.sold_count}</b>
                                     </a>
                                 </span>
                                 <span class="t-item t-score">
                                     <a href="javascript:;">
                                         评分
                                         <b class="t-num JS_async_score">${obj3.score}</b>
                                     </a>
                                 </span>
                             </div>
                             <div class="d-options">
                                 <a href="gq_product_cart.html?${obj3.lid}" class="list-bg o-btn o-cart">
                                     <b class="list-bg o-icon"></b>
                                     <span>加入购物车</span>
                                 </a>
                                 <a href="javascript:;" class="list-bg o-btn o-collect">
                                 收藏</a>
                             </div>
                        </div>
                     </div>`
                    }
                    $("#pro_list").append(html);
                }else{
                    var html = "";
                    for (var i =0; i <resData.length  ; i++) {
                        var obj3 = data[i];
                        html += `
                         <div id="product1">
                        <div class="product1">
                             <a href="gq_product_detail.html?${obj3.lid}" target="_blank">
                                 <img src="${obj3.tu1}" class="d-img">
                             </a>
                             <div class="d-price">
                                 <b class="p-money">
                                     <sub class="m-mark">￥</sub>
                                     <span class="m-count">${obj3.price}</span>
                                 </b>
                                 <del class="p-del">
                                     <sub class="d-mark">￥ ${obj3.old_price}</sub>
                                 </del>
                             </div>
                             <a href="gq_product_detail.html?${obj3.lid}" class="d-name">
                                 <span>${obj3.title}</span>
                             </a>
                             <div class="d-tags">
                                 <span class="t-item t-sale">
                                     <a href="javascript:;">
                                         已售
                                         <b class="t-num JS_async_sale_num">${obj3.sold_count}</b>
                                     </a>
                                 </span>
                                 <span class="t-item t-score">
                                     <a href="javascript:;">
                                         评分
                                         <b class="t-num JS_async_score">${obj3.score}</b>
                                     </a>
                                 </span>
                             </div>
                             <div class="d-options">
                                 <a href="javascript:${obj3.lid}" class="list-bg o-btn o-cart JS_goods_panel_add">
                                     <b class="list-bg o-icon"></b>
                                     <span>加入购物车</span>
                                 </a>
                                 <a href="javascript:;" class="list-bg o-btn o-collect">
                                 收藏</a>
                             </div>
                        </div>
                     </div>`
                    }
                    $("#pro_list").append(html);
                    $('.load').hide();
                    $('.load1').show();
                }
                $('.i_num').html(resData.length);
            }
        })

    };
    $('.load').on('click','a', (e)=> {
        e.preventDefault();
        var html = "";
        var obj3;
        var pcouns=parseInt(Math.ceil(resData.length/12));
        pcount++;
        if(pcount<=(pcouns-1)){
            for (var i = (pcount-1)*12; i < pcount * 12; i++) {
                obj3 = resData[i];
                var html=load(obj3);
                $("#pro_list").append(html);
            }
        }else if(pcount==pcouns) {
            for (var i = (pcount-1)*12; i < resData.length; i++) {
                obj3 = resData[i];
                var html=load(obj3);
                $("#pro_list").append(html);
            }
            $('.load').hide();
            $('.load1').show();
        }
    })
    function load(obj3){
        var   html = `
                                <div id="product1">
                                    <div class="product1">
                                         <a href="gq_product_detail.html?${obj3.lid}" target="_blank">
                                             <img src="${obj3.tu1}" class="d-img">
                                         </a>
                                         <div class="d-price">
                                             <b class="p-money">
                                                 <sub class="m-mark">￥</sub>
                                                 <span class="m-count">${obj3.price}</span>
                                             </b>
                                             <del class="p-del">
                                                 <sub class="d-mark">￥ ${obj3.old_price}</sub>
                                             </del>
                                         </div>
                                         <a href="gq_product_detail.html?${obj3.lid}" class="d-name" target="_blank">
                                             <span>${obj3.title}</span>
                                         </a>
                                         <div class="d-tags">
                                             <span class="t-item t-sale">
                                                 <a href="javascript:;">
                                                     已售
                                                     <b class="t-num JS_async_sale_num">${obj3.sold_count}</b>
                                                 </a>
                                             </span>
                                             <span class="t-item t-score">
                                                 <a href="javascript:;">
                                                     评分
                                                     <b class="t-num JS_async_score">${obj3.score}</b>
                                                 </a>
                                             </span>
                                         </div>
                                         <div class="d-options">
                                             <a href="javascript:${obj3.lid}" class="list-bg o-btn o-cart JS_goods_panel_add">
                                                 <b class="list-bg o-icon"></b>
                                                 <span>加入购物车</span>
                                             </a>
                                             <a href="javascript:;" class="list-bg o-btn o-collect">
                                             收藏</a>
                                         </div>
                                    </div>
                                </div>`
        return html;
    }
    $('.JS_goods_panel_add').click(function(){
      $.ajax({
        type: "get",
        url: "data/routes/users/isLogin.php"
      }).then(data=>{
        if(data.ok==1){
          var lid=parseInt($('#JS_goods_panel_add').attr("href").split(":")[1]);
          $.ajax({
            type:"get",
            url:"data/routes/cart/addToCart.php",
            data:{lid:lid,count:1},
            success:function (data) {
              $("#add_bg").show();
              $("#cart").show();
              var count=parseInt(data[0]);
              var price=parseInt($('#current_price').html());
              var ji=parseInt(count*price);
              $('#pro_show').html(count);
              $('#pri_show').html(ji);
            }
          })
        }else{
            confirm("请您登录后再添加您的宝贝！3秒后转回登录页");
            var k=3;
            setInterval(function(){
              k--;
              if(k==1){
                location="login.html";
              }
            },1000)
        }
      })
    });
    $('#fan').click(function(){
      $("#add_bg").hide();
      $("#cart").hide();
    });
    $('.back_pro').click(function(){
      $("#add_bg").hide();
      $("#cart").hide();
    })
});