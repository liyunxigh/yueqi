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

  function register(){
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
						     $.ajax({
									 type:"post",
									 url:"data/routes/users/checkName.php",
									 data:{uname:uname},
									 success:function(data){
										 if(data=="false"){
                       var html="";
				               html+=`<span>用户名已存在，请重新输入！</span>`;
											 $("#uname_show").html(html);
										 }else{
                       var html="";
				               html+=`<span><img class="tr" src="img/header/tr.png"></span>`;
											 $("#uname_show").html(html);
										 }
									 },
						       error:function(){
							     //404 json php语法出错
							       alert("网络故障请检查");
						       }
			           })
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
				         html+=`<span><img class="tr" src="img/header/tr.png"></span>`;
								 $("#upwd_show").html(html);
						 } 
				 }         
	   });
		 //为cupwd添加获得焦点事件
		 $("#cupwd").on("focus",function(e){
			   e.preventDefault();
				 var html="";
				 html+=`<span>请再次输入密码</span>`;
         $("#cupwd_show").html(html);
		 });
		 //为cupwd添加失去焦点事件
		 $("#cupwd").on("blur",function(e){
			   e.preventDefault();
		     //当前触发事件的文本框
				 var cupwd=$("#cupwd").val();
				 var upwd=$("#upwd").val();
				 if(cupwd==""){
					   var html="";
				     html+=`<span>密码不能为空</span>`;
				     $("#cupwd_show").html(html);
				 }else{
					   var cupwdReg = /^[a-z0-9]{6,8}$/i;
						 if(!cupwdReg.test(cupwd)){
							   var html="";
				         html+=`<span>密码格式不正确！</span>`;
							   $("#cupwd_show").html(html);
							   return;
						 }else if(cupwd!=upwd){
							   var html="";
				         html+=`<span>两次密码不一致，请重输</span>`;
								 $("#cupwd_show").html(html);
						 }else{
						     var html="";
				         html+=`<span><img class="tr" src="img/header/tr.png"></span>`;
								 $("#cupwd_show").html(html);
						 } 
				 }         
	   });
		 //为email添加获得焦点事件
		 $("#email").on("focus",function(e){
			   e.preventDefault();
				 var html="";
				 html+=`<span>可以输入邮箱地址</span>`;
         $("#email_show").html(html);
		 });
		 //为email添加失去焦点事件
		 $("#email").on("blur",function(e){
			   e.preventDefault();
		     //当前触发事件的文本框
				 var email=$("#email").val();
				 if(email==""){
					    var html="";
							$("#email_show").html(html);
					   return;
				 }else{
					   var emailReg = /^[a-zA-Z0-9]+([._\\-]*[a-zA-Z0-9])*@([a-zA-Z0-9]+[-a-zA-Z0-9]*[a-zA-Z0-9]+.){1,63}[a-z0-9]+$/;
						 if(!emailReg.test(email)){
							   var html="";
				         html+=`<span>邮箱格式不正确！</span>`;
							   $("#email_show").html(html);
							   return;
						 }else{
						     var html="";
				         html+=`<span><img class="tr" src="img/header/tr.png"></span>`;
								 $("#email_show").html(html);
						 } 
				 }         
	   })
		 //为phone添加获得焦点事件
		 $("#phone").on("focus",function(e){
			   e.preventDefault();
				 var html="";
				 html+=`<span>可以留下联系方式</span>`;
         $("#phone_show").html(html);
		 });
		 //为phone添加失去焦点事件
		 $("#phone").on("blur",function(e){
			   e.preventDefault();
		     //当前触发事件的文本框
				 var phone=$("#phone").val();
				 if(phone==""){
					    var html="";
							$("#phone_show").html(html);
					   return;
				 }else{
					   var phoneReg = /^((([0\+]\d{2,3}-)?(0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?)|(((\+86)|(86))?1[3|4|5|8][0-9]\d{4,8})$/;
						 var phonesReg =/^(((\+86)|(86))?1[3|4|5|8][0-9]\d{4,8})$/;
						 if(!phoneReg.test(phone)){
							   var html="";
				         html+=`<span>号码格式不正确！</span>`;
							   $("#phone_show").html(html);
							   return;
						 }else{
						     var html="";
				         html+=`<span><img class="tr" src="img/header/tr.png"></span>`;
								 $("#phone_show").html(html);
						 } 
				 }         
	   })
	} 
  register();
  
  setYzm.onclick = function(){
     this.src = "data/03_code_gg.php";
  }

	//查找id为btnReg的按钮,绑定单击事件
	$("#btnReg").on("click",()=>{
		  console.log(123);
      var uname=$("#uname").val();
	    var upwd=$("#upwd").val();
			var cupwd=$("#cupwd").val();
	    var email=$("#email").val();
	    var phone=$("#phone").val();
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
		  if(uname!=""&&upwd!=""&&cupwd!=""&&yzm!=""){
			  $.ajax({
				  type:"post",
				  url:"data/routes/users/register.php",
				  data:{uname:uname,upwd:upwd,email:email,phone:phone,yzm:yzm},
				  success:function(data){
							var obj=JSON.parse(data);
							if(obj.code==-3){
							       var html="";
				             html+=`<span>验证码不正确，请重新输入</span>`;
				             $("#yzm_show").html(html);
                     return;
							}
							$("#register").hide();
							$(".register").css("display","block");
							if(data>0){  
									var html="";
									html+=`
										<h1>注册成功</h1>
 						        <h3><a href="login.html">去登录</a></h3>`;
									$(".register").html(html);
							}else {
                  var html="";
									html+=`
										<h1>注册失败</h1>
 						        <h3><a href="register.html">重新注册</a></h3>`;
									$(".register").html(html);
							}
				  },
				  error:function(){
						  //404 json php语法出错
							alert("网络故障请检查");
				  }
			  })
			}			
	});
});