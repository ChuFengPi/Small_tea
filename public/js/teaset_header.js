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
        $(".nav>.nav-item>a:eq(2)").mouseenter(function () {
            $("#Tea").removeClass("fourth").removeClass("third").addClass("second")
        }).mouseleave(function () {
            $("#Tea").removeClass("second").addClass("third")
        })
        $("#Tea").mouseenter(function () {
             $("#Tea").removeClass("fourth").removeClass("third").addClass("first")
         }).mouseleave(function () {
             $("#Tea").removeClass("first").addClass("third")
         })
    })
});