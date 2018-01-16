$(function(){
    var lid =parseInt(location.search.split("?")[1]);
    $.ajax({
        type:"get",
        url:"data/routes/products/getProductDetail.php",
        data:{lid:lid},
        success:function (data) {
            console.log(data);
            var html="";
            for(var obj of data ){
                $('.stage img').attr('src',obj.tu1);
                $('#img1').attr('src',obj.tu1);
                $('#img2').attr('src',obj.tu2);
                $('#img3').attr('src',obj.tu3);
                $('#img4').attr('src',obj.tu4);
                $('#img5').attr('src',obj.tu1);
                $('.st').html(obj.brand_name);
                $('.br_title').html(obj.title);
                $('.sn').html(obj.ec_num);
                $('#current_price').html(obj.price);
                $('.old_price').html(obj.old_price);
                $('#JS_goods_saled_number').html(obj.sold_count);
                $('#JS_goods_comment_num').html(obj.score);
                $('.style').html(obj.style_name);
                $('.brand').html(obj.brand_name);
                $('.place').html(obj.place);
                $('.kucun').html(obj.score);
                $('#JS_goods_panel_add').attr("href","javascript:"+obj.lid);
                $('#largeDiv').css("backgroundImage","url("+obj.tu1+")");
                $('#largeDiv').css("backgroundRepeat","no-repeat");
                $('#largeDiv').css("backgroundSize","1240px 764px");
            }
        }
    })
    var moved=0, LIWIDTH=142;
    $('.prev').hide();
    $('.next').show();
    $('#JS_goods_album_btn').on('click','a',function(e){
          e.preventDefault();
          var $tar=$(e.target);
          if($tar.hasClass('next')){
              moved++;
             $('#JS_goods_album_stage').css("left",-moved*LIWIDTH+"px");
             if(moved==1){
                  $('.next').hide();
                  $('.prev').show();
             }
          }else{
             moved--;
            $('#JS_goods_album_stage').css("left",-moved*LIWIDTH+3+"px");
            if(moved==0){
              $('.prev').hide();
              $('.next').show();
            }
          }
    });
    $('.album_item').on("click","img",function(e){
        e.preventDefault();
        var $tar=$(e.target);
        var img=$tar.attr("src");
        $(".stage img").attr("src",img);
        $("#largeDiv").css("backgroundImage","url("+img+")");
        $('#largeDiv').css("backgroundRepeat","no-repeat");
        $('#largeDiv').css("backgroundSize","1240px 764px");
    });
    $('#superMask').on("mouseenter",function(e){
         e.preventDefault();
         $('#mask').css("display","block");
         $('#largeDiv').css("display","block");
    });
    $('#superMask').on("mouseleave",function(e){
      e.preventDefault();
      $('#mask').css("display","none");
      $('#largeDiv').css("display","none");
    });
    var XMSIZE=310,YMSIZE=191;
    $('#superMask').mousemove(function(e){
        var x=e.offsetX,y=e.offsetY;
        var top=y-YMSIZE/2,left=x-XMSIZE/2;
        if(top<0) top=0;
        else if(top>191) top=191;
        if(left<0) left=0;
        else if(left>310) left=310;
        $('#mask').css({display:"block",top:top,left:left});
        $('#largeDiv').css({backgroundPosition:-2.4*left+"px "+(-2.4*top)+"px"});
    });
    $('.click').on("click",".ber",function(e){
           e.preventDefault();
           var $tar=$(e.target);
           var n=$('#product_amount').val();
          if($tar.hasClass('JS_add')){
                n++;
          }else if(n>1){
               n--;
          }
         $('#product_amount').val(n);
    });
    $('#JS_goods_panel_add').click(function(){
        $.ajax({
          type: "get",
          url: "data/routes/users/isLogin.php"
        }).then(data=>{
             if(data.ok==1){
                 var count=parseInt($('#product_amount').val());
                 var lid=parseInt($('#JS_goods_panel_add').attr("href").split(":")[1]);
                 $.ajax({
                     type:"get",
                     url:"data/routes/cart/addToCart.php",
                     data:{lid:lid,count:count},
                     success:function (data) {
                           $("#add_bg").show();
                           $("#cart").show();
                           console.log(data);
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