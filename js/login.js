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
  
  function login(){
	   //为uame添加获得焦点事件
	   $("#uname").on("focus",function(e){
			   e.preventDefault();
				 var html="";
				 html+=`<span>请输入6~18位由数字或大小写字母组成的昵称</span>`;
         $("#uname_show").html(html);
		 });
		 //为uame添加失去焦点事件
		 $("#uname").on("blur",function(e){
			   //e.preventDefault();
		     //当前触发事件的文本框
				 var uname=$("#uname").val();
				 if(uname==""){
					   var html="";
				     html+=`<span>请输入昵称</span>`;
				     $("#uname_show").html(html);
				 }else{
					   console.log(11);
					   var unameReg = /^[a-z0-9]{6,18}$/i;
						 if(!unameReg.test(uname)){
                 var html="";
				         html+=`<span>格式不正确！</span>`;
							   $("#uname_show").html(html);
							   return;
						 }else{
						     var html="";
                 $("#uname_show").html(html);
						 } 
				 }         
	   });
		 //为upwd添加获得焦点事件
     $("#upwd").on("focus",function(e){
			   e.preventDefault();
				 var html="";
				 html+=`<span>请输入6~8位由数字或大小写字母组成的密码</span>`;
         $("#upwd_show").html(html);
		 });
		 //为upwd添加失去焦点事件
		 $("#upwd").on("blur",function(e){
			   e.preventDefault();
		     //当前触发事件的文本框
				 var upwd=$("#upwd").val();
				 if(upwd==""){
					   var html="";
				     html+=`<span>请输入密码</span>`;
				     $("#upwd_show").html(html);
				 }else{
					   var upwdReg = /^[a-z0-9]{6,8}$/i;
						 if(!upwdReg.test(upwd)){
							   var html="";
				         html+=`<span>密码格式不正确！</span>`;
							   $("#upwd_show").html(html);
							   return;
						 }else{
						     var html="";
                 $("#upwd_show").html(html);
						 } 
				 }         
	   });
	}
  login();

  setYzm.onclick = function(){
     this.src = "data/03_code_gg.php";
  }
  
  //查找id为btns的按钮,绑定单击事件
	$("#btnLogin").on("click",()=>{
	    var uname=$("#uname").val();
	    var upwd=$("#upwd").val();
			var yzm=$("#yzm").val();
      var yzmReg = /^[a-z]{4}$/i;
			if(yzm==""){
			   var html="";
				 html+=`<span>验证码不能为空</span>`;
				 $("#yzm_show").html(html);
      }else if(!yzmReg.test(yzm)){
				 var html="";
				 html+=`<span>验证码格式不正确,请检查后再试</span>`;
				 $("#yzm_show").html(html);
         return;
      }
			if(uname!=""&&upwd!=""&&yzm!=""){
			  $.ajax({
				  type:"post",
				  url:"data/routes/users/login.php",
				  data:{uname:uname,upwd:upwd,yzm:yzm},
				  success:function(data){
							var obj=JSON.parse(data);
							if(obj.code==-3){
							       var html="";
				             html+=`<span>验证码不正确，请重新输入</span>`;
				             $("#yzm_show").html(html);
                     return;
							}
							$("#login").hide();
							$(".login").css("display","block");
							if(data=="true"){  
									location="index.html";
							}else {
                  var html="";
									html+=`
										<h1>用户名或密码不正确</h1>
 						        <h3><a href="login.html">请重新登录</a></h3>`;
									$(".login").html(html);
							}
				  },
				  error:function(){
						  //404 json php语法出错
							alert("网络故障请检查");
				  }
			  })
			}	
	})

});