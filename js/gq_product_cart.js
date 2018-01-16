$(function(){
  function loadCart(){
    $.get("data/routes/cart/getCart.php")
      .then(data=>{
        if(data.length){
            $('.cart_bg').css("display","none");
        }else{
           $('.cart_bg').css("display","block");
        }
        var html="";
        for(var p of data){
          html+=`
					<div class="imfor">
						<div class="check">
							<img src="${
              parseInt(p.is_checked)==1?
              'img/gq_index/cart/product_true.png':
              'img/gq_index/cart/product_normal.png'
            }" alt="${p.iid}">
						</div>
						<div class="product">
							<a href="gq_product_detail.html?${p.lid}">
								<img src="${p.tu1}" class="img_tu1">
							</a>
							<span class="desc">
								<a href="gq_product_detail.html?${p.lid}">${p.title}</a>
							</span>
						</div>
						<div class="price">
							<p class="price-desc">本站价格</p>
							<p>
								<b>¥</b>${p.price}
							</p>
						</div>
						<div class="price">
							<p class="price-desc">商铺价格</p>
							<p>
								<b>¥</b>${p.old_price}
							</p>
						</div>
						<div class="num">
							<span class="reduce">&nbsp;-&nbsp;</span>
							<input data-iid="${p.iid}" type="text" value="${p.count}">
							<span class="add">&nbsp;+&nbsp;</span>
						</div>
						<div class="total-price">
							<span>¥</span>
							<span>${(p.price*p.count).toFixed(2)}</span>
						</div>
						<div class="del">
							<a href="javascript:;" data-iid="${p.iid}">删除</a>
						</div>
					</div>
				`;
        }
        var $content=$("#content-box-body");
        $content.html(html);
        setTimeout(()=>{
          getTotal();
          chkAll()
        },50);
        var $checkTop=$(".check-top>img");
        var $checkAll=$(".all img");
        $checkTop.off("click").click(()=>{
          if($checkTop.attr("src")
              .endsWith("normal.png")){
            $checkTop.attr(
              "src","img/gq_index/cart/product_true.png"
            );
            $.post(
              "data/routes/cart/selectAll.php",
              "chkAll=1"
            ).then(()=>{
                loadCart();
              });
          }else{
            $checkTop.attr(
              "src","img/gq_index/cart/product_normal.png"
            );
            $.post(
              "data/routes/cart/selectAll.php",
              "chkAll=0"
            ).then(()=>{
                loadCart();
              });
          }
        });
        $checkAll.off("click").click(()=>{
          if($checkAll.attr("src")
              .endsWith("normal.png")){
            $checkAll.attr(
              "src","img/gq_index/cart/product_true.png"
            );
            $.post(
              "data/routes/cart/selectAll.php",
              "chkAll=1"
            ).then(()=>{
                loadCart();
              });
          }else{
            $checkAll.attr(
              "src","img/gq_index/cart/product_normal.png"
            );
            $.post(
              "data/routes/cart/selectAll.php",
              "chkAll=0"
            ).then(()=>{
                loadCart();
              });
          }
        });

        $content.off("click")
          .on("click",".check>img",e=>{
            var $tar=$(e.target);
            if($tar.attr("src")
                .endsWith("normal.png")){
              $tar.attr(
                "src","img/gq_index/cart/product_true.png"
              );
              $.post(
                "data/routes/cart/selectOne.php",
                "chkOne=1&iid="+$tar.attr("alt")
              ).then(()=>{
                  loadCart();
                });
            }else{
              $checkTop.attr(
                "src","img/gq_index/cart/product_normal.png"
              );
              $.post(
                "data/routes/cart/selectOne.php",
                "chkOne=0&iid="+$tar.attr("alt")
              ).then(()=>{
                  loadCart();
                });
            }
          })
          .on("click",".reduce,.add",e=>{
            var $tar=$(e.target);
            var $input=$tar.siblings("input");
            var n=parseInt($input.val());
            if($tar.is(".add"))
              n++;
            else
              n--;
            if(n==0){
              if(confirm("是否继续删除?"))
                $.get(
                  "data/routes/cart/updateCart.php",
                  "count="+n+"&iid="+$input.data("iid")
                ).then(()=>{
                    loadCart();
                    $checkTop.attr(
                      "src","img/gq_index/cart/product_normal.png"
                    );
                    $checkAll.attr(
                      "src","img/gq_index/cart/product_normal.png"
                    );
                })
            }else
              $.get(
                "data/routes/cart/updateCart.php",
                "count="+n+"&iid="+$input.data("iid")
              ).then(()=>{
                  loadCart();
                })
          });
        $("#del").click(function(){
            if(confirm("是否删除全部商品?")) {
                $.get(
                  "data/routes/cart/clearCart.php"
                ).then(()=> {
                    loadCart();
                    $checkTop.attr(
                      "src","img/gq_index/cart/product_normal.png"
                    );
                    $checkAll.attr(
                      "src","img/gq_index/cart/product_normal.png"
                    );
                })
            }
        });
        $(".del>a").click(function(){
            var iid=parseInt($(".del>a").data("iid"));
            if(confirm("是否删除本件商品?")) {
                $.get(
                  "data/routes/cart/deleteOne.php",
                  "iid="+iid
                ).then(()=> {
                    loadCart();
                })
            }
        })
        var $counts=
          $("#shopping-cart .total,#shopping-cart .totalOne");
        var $totals=
          $("#shopping-cart .totalPrices,#shopping-cart .foot-price");
        function getTotal(){
          var $rows=
            $(".imfor:has(.check>img[src$='true.png'])");
          var $inputs=$rows.find(".num>input");
          var $subs=
            $rows.find(".total-price>:last-child");
          var count=0;
          var total=0;
          for(var input of $inputs){
            count+=parseInt($(input).val());
          }
          for(var sub of $subs){
            total+=parseFloat($(sub).html());
          }
          $counts.html(count);
          $totals.html(total);
        }
        function chkAll(){
          console.log();
          $checkTop.attr("src",
            $content.find(
              ".check>img[src$='normal.png']"
            ).length==0?
              "img/gq_index/cart/product_true.png":
              "img/gq_index/cart/product_normal.png"
          );
        }
      })
  }
  $.get("data/routes/users/isLogin.php")
    .then(data=>{
      if(data.ok==0){
          confirm("请您登录后再添加您的宝贝！3秒后转回登录页");
          var k=3;
          setInterval(function(){
            k--;
            if(k==1){
              location="login.html";
            }
          },1000)
      }
      loadCart();
  });
})