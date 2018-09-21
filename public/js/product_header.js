$(function(){
    $("#head").load("head.html",function(){
        var link=document.createElement("link");
        link.rel="stylesheet";
        link.href="css/head.css";
        document.head.appendChild(link);
        $(".quick>.search").click(function(e){
            $(".quick>.search_box").css("display","block");
            $(".quick>i").css({left:-150,transitionDuration:0.5});
        })
        $(".nav>.nav-item>a:eq(0)").mouseenter(function () {
            $("#observation").removeClass("leave").removeClass("middle").addClass("observation")
        }).mouseleave(function () {
            $("#observation").removeClass("observation").addClass("leave")
        })
        $("#observation").mouseenter(function () {
            $("#observation").removeClass("leave").removeClass("middle").addClass("observation1")
        }).mouseleave(function () {
            $("#observation").removeClass("observation1").addClass("leave")
        })
    })
});