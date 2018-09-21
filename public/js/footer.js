$(function(){
	$("#footer").load("footer.html",function(){
		var link=document.createElement("link");
		link.rel="stylesheet";
		link.href="css/footer.css";
		document.head.appendChild(link);
		$("#to_top").click(function(){
			$("html,body").animate({scrollTop:0},1000);
		});
        $("#weixin").click(function () {
            $("#weixin-layout").show();
            $("#mask").show();
        });
        $("#weixin-layout>a").click(function () {
            $("#weixin-layout").hide();
            $("#mask").hide();
        });
	});
});