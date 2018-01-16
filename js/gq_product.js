$(function(){

    var $ulImgs=$("#banner>.banner-img"),
        $ulInds=$("#banner>.indicators"),
        LIWIDTH=1900,INTERVAL=400,WAIT=2000,
        moved=0,timer=null,canMove=true;
		$.get("data/routes/products/getCarousel.php")
			.then(data=>{
					console.log(data);
					var html="";
					html+=`
						<li>
							 <a href="${data[0].href}" title="${data[0].title}">
									<img src="${data[0].img}">
							 </a>
						</li> `;
					html+=`
						<li>
							 <a href="${data[1].href}" title="${data[1].title}">
									<img src="${data[1].img}">
							 </a>
						</li> `;
					html+=`
						<li>
							 <a href="${data[2].href}" title="${data[2].title}">
									<img src="${data[2].img}">
							 </a>
						</li> `;
					html+=`
						<li>
							 <a href="${data[0].href}" title="${data[0].title}">
									<img src="${data[0].img}">
							 </a>
						</li> `;
					$ulImgs.html(html)
							.css("width",4*LIWIDTH);
					$ulInds.html("<li></li>".repeat(3))
							.children().first().addClass("hover");

					function autoMove(){
						if(canMove){
							if(moved==3){//先判断是否最后一张
								moved=0;//将moved归0
								$ulImgs.css("left",0);//将ul的left瞬间归0
							}
							timer=setTimeout(()=>{//先等待WATI秒
								move(1,autoMove);
							},WAIT);
						}
					}
					autoMove();
					
					$("#banner").hover(
						()=>{//关闭轮播的开关变量
							canMove=false;
							clearTimeout(timer);//停止等待
							timer=null;
						},
						()=>{//打开轮播开关，启动自动轮播
							canMove=true;
							autoMove();
						}
					);

					$ulInds.on("click","li",e=>{
						moved=$(e.target).index();
						$ulImgs.stop(true).animate({
							left:-LIWIDTH*moved
						},INTERVAL);
						$ulInds.children(":eq("+moved+")")
									.addClass("hover")
									.siblings().removeClass("hover");
					});
					function move(dir,callback){
						moved+=dir;//按照方向增减moved
						//如果moved没有到头
						if(moved<3){
							//让ulInds中moved位置的li设置hover
							$ulInds.children(":eq("+moved+")")
										.addClass("hover")
										.siblings().removeClass("hover");
						}else{//否则，如果到头了
							//让ulInds中第一个li设置为hover
							$ulInds.children(":eq(0)")
										.addClass("hover")
										.siblings().removeClass("hover");
						}						
						//先清除ulImgs上动画，让ulImgs移动到新的left位置
						$ulImgs.stop(true).animate({
							//新的left位置永远等于-LIWIDTH*moved
							left:-LIWIDTH*moved     
						},INTERVAL,callback);
					}

					$("#banner>[data-move=right]").click(()=>{
						if(moved==3){
							moved=0;
							$ulImgs.css("left",0);
						}
						move(1);
					});
					$("#banner>[data-move=left]").click(()=>{
						//如果是第一张
						if(moved==0){//就跳到最后一张
							moved=data.length;
							$ulImgs.css("left",-LIWIDTH*moved);
						}
						move(-1);
					})
			});
});






 //var arr3=["","仲尼","伏羲","宣和","混沌","灵机","竹节","绿绮","落霞","蕉叶","连珠","神农","连珠D1","连珠D2","霹雳"];
