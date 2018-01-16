$(()=>{
//	  登录页面加载头部
  $("#header").load("header.html",()=>{
		     $(".nav_content_show").mouseenter(e=>{
             $tar=$(e.target);
		         $tar.next().css("display","block");
         });
         $(".nav_content").mouseleave(e=>{
             $tar=$(e.target);
		         $(".nav_content_hide").css("display","none");
         });
	});
//	  登录页面加载尾部
  $("#footer").load("footer.html");

});