$(function(){
	var $box=$(".banner>.wrapper>div"),$span=$(".pagination>span"),moved=0;
	function move(){
		if(moved==4)
			moved=0;
		$($box[moved]).addClass("in").siblings().removeClass("in");
		$($span[moved]).addClass("current").siblings().removeClass("current");
		if(moved<4)
			moved++;
	}
	var stop=setInterval(move,2000)
	$(".pagination").on("click","span",function(){
		$(this).addClass("current").siblings().removeClass("current");
		$box.eq($(this).index()).addClass("in").siblings().removeClass("in");
        moved=$(this).index();
	})
});