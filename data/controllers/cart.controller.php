<?php
require_once("../../init.php");
function addToCart(){
	global $conn;
	session_start();
	@$uid=$_SESSION["uid"];
	@$product_id=$_REQUEST["lid"];
	@$count=$_REQUEST["count"];
	if($uid){
		$sql="select * from y_shoppingcart_item where user_id=$uid and product_id=$product_id";
		$result=mysqli_query($conn,$sql);
		//如果$uid的购物车中有$product_id商品
		if(count(mysqli_fetch_all($result,1))){
			$sql="update y_shoppingcart_item set count=count+$count where user_id=$uid and product_id=$product_id";
		}else{//否则
			$sql="insert into y_shoppingcart_item (user_id,product_id,count,is_checked) values ($uid,$product_id,$count,0)";
		}
		mysqli_query($conn,$sql);
		$sql="select count from y_shoppingcart_item where user_id=$uid";
		$res=mysqli_query($conn,$sql);
		$row=mysqli_fetch_row($res);
		echo json_encode($row);
		//var_dump($row);
	}
}
//addToCart();
function updateCart(){
	global $conn;
	@$iid=$_REQUEST["iid"];
	@$count=$_REQUEST["count"];
	if($count==0)
		$sql="delete from y_shoppingcart_item where iid=$iid";
	else
		$sql="update y_shoppingcart_item set count=$count where iid=$iid";
	mysqli_query($conn,$sql);
}
//updateCart();
function getCart(){
	global $conn;
	session_start();
	@$uid=$_SESSION["uid"];
	if($uid){
		$sql="select iid, lid, title, price, old_price, tu1, count ,is_checked from y_shoppingcart_item inner join y_laptop on product_id=lid where user_id=$uid";
		$result=mysqli_query($conn,$sql);
		echo json_encode(mysqli_fetch_all($result,1));
	}else{
		echo json_encode([]);
	}
}
//getCart();
function clearCart(){
	global $conn;
	session_start();
	@$uid=$_SESSION["uid"];
	if($uid){
		$sql="delete from y_shoppingcart_item where user_id=$uid";
		mysqli_query($conn,$sql);
//		$sql="update y_shoppingcart_item set is_checked=0 where user_id=$uid";
//		mysqli_query($conn,$sql);
	}
}
function deleteOne(){
	global $conn;
	@$iid=$_REQUEST["iid"];
	if($iid){
		$sql="delete from y_shoppingcart_item where iid=$iid";
		mysqli_query($conn,$sql);
	}
}
function selectAll(){
	global $conn;
	@$chkAll=$_REQUEST["chkAll"];
	session_start();
	@$uid=$_SESSION["uid"];
	$sql="update y_shoppingcart_item set is_checked=$chkAll where user_id=$uid";
	mysqli_query($conn,$sql);
}
function selectOne(){
	global $conn;
	@$chkOne=$_REQUEST["chkOne"];
	@$iid=$_REQUEST["iid"];
	$sql="update y_shoppingcart_item set is_checked=$chkOne where iid=$iid";
	mysqli_query($conn,$sql);
}
