<?php
//data/controllers/user.controller.php
//data/init.php
require_once("../../init.php");
function register(){
	global $conn;//引入全局变量
	//从request中获得uname和upwd
	@$uname=$_REQUEST["uname"];
	@$upwd=$_REQUEST["upwd"];
	@$email=$_REQUEST["email"];
	@$phone=$_REQUEST["phone"];
  @$yzm=$_REQUEST["yzm"];
//6:创建sql并且发送sql
  session_start();
  $code = $_SESSION["code"];
  if($code!=$yzm){
    echo '{"code":-3,"msg":"验证码不正确"}';
    exit;
  }
	 $sql="insert into y_user values (null,'$uname',md5('$upwd'),'$email','$phone','0')";
	 $result = mysqli_query($conn,$sql);
	 //解决方案二:判断sql是否出错
	 if(mysqli_error($conn)){
		 echo mysqli_error($conn);
	 }
	 $row = mysqli_affected_rows($conn);
	 //7:判断返回结果是否正确
	 //8:输出结果 json
	 echo $row;
}
function checkName(){
	global $conn;
	@$uname=$_REQUEST["uname"];//从request中获得uname
	if($uname){
		$sql=//定义SQL语句select * from xz_user...
			"select * from y_user where uname='$uname'";
		$result=mysqli_query($conn,$sql);//执行SQL查询
		$users=//获得查询结果
			mysqli_fetch_all($result,1);//MYSQLI_ASSOC
		if($users!=null){//如果查询结果中有数据
			return false;//不能使用
		}else{//否则
			return true;//可以使用
		}
	}
}
//checkName();
function login(){
	global $conn;
	//从request中获得uname和upwd
	@$uname=$_REQUEST["uname"];
	@$upwd=$_REQUEST["upwd"];
	@$yzm=$_REQUEST["yzm"];
	session_start();//打开session
  $code = $_SESSION["code"];
  if($code!=$yzm){
    echo '{"code":-3,"msg":"验证码不正确"}';
    exit;
  }
	if($uname&&$upwd){
		//定义SQL语句: select 
		$sql="select * from y_user where uname='$uname' and binary upwd=md5('$upwd')";
		$result=mysqli_query($conn,$sql);//执行查询
		//获得查询结果
		$user=mysqli_fetch_all($result,1);
		if(count($user)!=0){//如果有结果			
			$_SESSION["uid"]=$user[0]["uid"];
			return true;//登录成功
		}else//否则
			return false;//登录失败
	}
}
function logout(){
	session_start();
	$_SESSION["uid"]=null;
}
function isLogin(){
	global $conn;
	session_start();
	@$uid=$_SESSION["uid"];
	if($uid){
		$sql=
			"select uname from y_user where uid=$uid";
		$result=mysqli_query($conn,$sql);
		$user=mysqli_fetch_all($result,1);
		return ["ok"=>1,"uname"=>$user[0]["uname"]];
	}else
		return ["ok"=>0];
}



























