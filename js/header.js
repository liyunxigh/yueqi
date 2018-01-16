$(()=>{
		function loadStatus(){
		//判断登录:
				var $headerLogins=$(".header_logins");
				var $headerWelcome=$(".header-welcome");
				$.ajax({
				   type:"get",
					 url:"data/routes/users/isLogin.php",
					 success:function(data){
						   console.log(data);
               console.log(123);
               if(data.ok==1){
						     $headerLogins.hide();
						     $headerWelcome.show();
						     $("#uname1").html(data.uname);
					     }else{
						     $headerLogins.show();
						     $headerWelcome.hide();
					     }
           },
				   error:function(){
							alert("网络故障请检查");
					 }
				})
	  }
	//向header.html发送ajax get请求
	$("#header").load("header.html",()=>{
		 $(".nav_content_show").mouseenter(e=>{
         $tar=$(e.target);
		     $tar.next().css("display","block");
     });
     $(".nav_content").mouseleave(e=>{
         $tar=$(e.target);
		     $(".nav_content_hide").css("display","none");
     });
		
		/*为search按钮添加单击事件，跳转到商品列表页*/
		//查找data-trigger属性为search的a绑定单击事件
		$("[data-trigger=search]").click(()=> {
      //获得id为txtSearch的内容,去掉开头和结尾的空格保存在变量kw中
      var kw = $("#keywords").val().trim();
      if (kw != ""){
      	  //如果kw不为""
					var i = kw.search(/天音|传习/);
					if (i != -1) {
						location.href = "gq_product_list.html?shop_id=1";
            return;
					}
					var j = kw.search(/夔音/);
					if (j != -1) {
						location.href = "gq_product_list.html?shop_id=2";
            return;
					}
					var k = kw.search(/木乙/);
					if (k != -1) {
						location.href = "gq_product_list.html?shop_id=3";
            return;
					}
					var q = kw.search(/东篱/);
					if (q != -1) {
						location.href = "gq_product_list.html?shop_id=4";
            return;
					}
					var y = kw.search(/敦煌/);
					if (y != -1) {
						location.href = "gq_product_list.html?shop_id=5";
            return;
					}
      }

		});

		loadStatus();

		//注销: 
		$("#logout").click(()=>{
			$.get("data/routes/users/logout.php")
				.then(()=>location.reload());
		});

		//搜索帮助:
		var $txtSearch=$("#keywords"),
			  $shelper=$("#shelper");
			$txtSearch.keyup(e=>{
				if(e.keyCode!=13){
					if(e.keyCode==40){
						if(!$shelper.is(":has(.focus)")){
							$shelper.children()
											.first().addClass("focus");
						}else{
							if($shelper.children().last()
									.is(".focus")){
								$shelper.children(".focus")
											.removeClass("focus");
								$shelper.children()
											.first().addClass("focus");
							}else{
								$shelper.children(".focus")
											.removeClass("focus")
											.next().addClass("focus");
							}
						}
						$txtSearch.val(
							$shelper.children(".focus")
											.attr("title")
						);
					}else if(e.keyCode==38){
						if(!$shelper.is(":has(.focus)")){
							$shelper.children()
								.last().addClass("focus");
						}else{
							if($shelper.children()
								.first().is(".focus")){
								$shelper.children(".focus")
											.removeClass("focus");
								$shelper.children()
											.last().addClass("focus");
							}else{
								$shelper.children(".focus")
											.removeClass("focus")
											.prev().addClass("focus");
							}
						}
						$txtSearch.val(
							$shelper.children(".focus").attr("title")
						);
					}else{
						var $tar=$(e.target);
						$.get(
							"data/routes/products/searchHelper.php",
							"term="+$tar.val()
						).then(data=>{
							var html="";
							for(var p of data){
								html+=`<li title="${p.title}">
									<div class="search-item" title="${p.title}" data-url="product_details?lid=${p.lid}">${p.title}</div>
								</li>`
							}
							$shelper.show().html(html);
						});
					}
				}else{
           $("[data-trigger=search]").click();
        }
			});
      $shelper.on("click",".search-item",(e)=>{
          console.log(1234);
          $("#keywords").val($(e.target).html());
          $("#shelper").hide();
        })
	});

	$(window).scroll(()=>{
			var scrollTop=$(window).scrollTop();
			//如果scrollTop>=380,就让id为header-top的div固定定位
			if(scrollTop>=380){
				$("#header").css({"position":"fixed","z-index":1000});
			}else{
				$("#header").css("position","relative");
      }
	});
});