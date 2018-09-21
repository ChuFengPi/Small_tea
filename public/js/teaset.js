$(function(){
    var $ul=$(".slider");
    var $ulIds=$(".bx-pager-item");
    var LIEIFTH=1420,moved=0;
    $ul.css("width",LIEIFTH*5);
    $(".next").click(function () {
        if(!$ul.is(":animated")){
            moved++;
            $ul.animate({
                left:-moved*LIEIFTH
            },500,function(){
                if(moved==3){
                    $ul.css("left",0);
                    moved=0;
                }
                $ulIds.children(":eq("+moved+")").addClass("active").siblings().removeClass("active");
            });
        }
    });
    $(".prev").click(function () {
        if(!$ul.is(":animated")) {
            if (moved == 0) {
                moved = 3;
                $ul.css("left", -moved * LIEIFTH);
            }
            moved--;
            $ul.animate({
                left: -moved * LIEIFTH
            }, 500, function () {
                $ulIds.children(":eq(" + moved + ")").addClass("active").siblings().removeClass("active");
            });
        }
    });
    timer=setInterval(function () {
        if(!$ul.is(":animated")){
            moved++;
            $ul.animate({
                left:-moved*LIEIFTH
            },500,function(){
                if(moved==3){
                    $ul.css("left",0);
                    moved=0;
                }
                $ulIds.children(":eq("+moved+")").addClass("active").siblings().removeClass("active");
            });
        }
    },5000);
    $ulIds.on("click","a",function () {
        if(!$ul.is(":animated")) {
            var $a = $(this);
            var i = $a.index();
            moved = i;
            $ul.animate({
                left: -moved * LIEIFTH
            }, 500, function () {
                $ulIds.children(":eq(" + moved + ")").addClass("active").siblings().removeClass("active");
            });
        }
    })
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        var $nav = $(".top>.header-nav");
        if (scrollTop >= 78) {
            $nav.addClass("suspension");
        } else {
            $nav.removeClass("suspension");
        }
    });
    $(".testing").on("click",".title",function () {
        var $content=$(this).next();
        if($content.is(".in"))
            $content.removeClass("in");
        else
            $content.addClass("in").siblings(".content").removeClass("in");
    })
});

