<?php
require_once("../../init.php");
function getCarousel(){
    global $conn;
	$sql="select * from y_index_carousel";
	$result=mysqli_query($conn,$sql);
	echo json_encode(mysqli_fetch_all($result,1));
}
//getCarousel();
function getProduct1(){
   global $conn;
   @$sid=$_REQUEST["shop_id"];
   $sql=" select shop_words,shop_pic ";
   $sql.=" from y_shop where shop_id=$sid";

   $result=mysqli_query($conn,$sql);
   if(mysqli_error($conn)){
     echo mysqli_error($conn);
   }
   $rows = mysqli_fetch_all($result,1);
   echo json_encode($rows);
//   var_dump($rows);

}
//getProduct1();

function getProduct2(){
   global $conn;
   @$sid=$_REQUEST["shop_id"];

   $sql=" select brand_id,brand_name ";
   $sql.=" from y_brand ";
   $sql.=" where ";
   $sql.=" sh1_id=$sid ";
   $result=mysqli_query($conn,$sql);
   if(mysqli_error($conn)){
     echo mysqli_error($conn);
   }
   $rows = mysqli_fetch_all($result,1);
   echo json_encode($rows);
//   var_dump($rows);

}
//getProduct2();

function getProduct3(){
   global $conn;
   @$sid=$_REQUEST["shop_id"];

   $sql=" select st_id ";
   $sql.=" from y_st_list ";
   $sql.=" where ";
   $sql.=" sh2_id=$sid";
   $result=mysqli_query($conn,$sql);
   if(mysqli_error($conn)){
     echo mysqli_error($conn);
   }
   $rows = mysqli_fetch_all($result,1);
//   $arr1=["","仲尼","伏羲","宣和","混沌","灵机","竹节","绿绮","落霞","蕉叶","连珠","神农","连珠D1","连珠D2","霹雳"];
   echo json_encode($rows);
}
//getProduct3();

function getProduct4(){
   global $conn;
   @$sid=$_REQUEST["shop_id"];
   $sql=" select lid,title,price,old_price,sold_count,score,tu1 ";
   $sql.=" from y_laptop ";
   $sql.=" where ";
   $sql.=" shop=$sid";
   $result=mysqli_query($conn,$sql);
   if(mysqli_error($conn)){
     echo mysqli_error($conn);
   }
   $rows = mysqli_fetch_all($result,1);
   echo json_encode($rows);
   //var_dump($rows);
}
//getProduct4();

function getProductDetail(){
   global $conn;
   @$lid=$_REQUEST["lid"];
   $sql=" select *,brand_name,style_name from y_laptop,y_brand,y_style where lid=$lid and brand_id=brand and style_id=style";
   $result=mysqli_query($conn,$sql);
   if(mysqli_error($conn)){
     echo mysqli_error($conn);
   }
   $rows = mysqli_fetch_all($result,1);
   echo json_encode($rows);
   //var_dump($rows);
}
//getProductDetail();
function searchHelper(){
	global $conn;
	@$kw=$_REQUEST["term"];//?term=mac 256g
	$sql="select lid,title,sold_count from y_laptop ";
	if($kw){
		$kws=explode(" ",$kw);
		for($i=0;$i<count($kws);$i++){
			$kws[$i]=" title like '%".$kws[$i]."%' ";
		}
		$sql.=" where ".implode(" and ",$kws);
	}
	$sql.=" order by sold_count DESC limit 10";
	$result=mysqli_query($conn,$sql);
	echo json_encode(mysqli_fetch_all($result,1));
}












  
?>