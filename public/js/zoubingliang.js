$(function () {
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        var $nav = $(".top>.header-nav");
        if (scrollTop >= 78) {
            $nav.addClass("suspension");
        } else {
            $nav.removeClass("suspension");
        }
        if (scrollTop>=2220){
            $("#volatility1").addClass("volatility").removeClass("hidden");
        }else{
            $("#volatility1").removeClass("volatility").addClass("hidden");
        }
        if (scrollTop>=2800){
            $("#volatility2").addClass("volatility").removeClass("hidden");
        }else {
            $("#volatility2").removeClass("volatility").addClass("hidden");
        }
    });
    function shuffling(ul,Right,Left){
        var $ul=$("#"+ul+"");
        var LIEIFTH=1170,moved=0;
        $ul.css("width",LIEIFTH*3);
        $("#"+Right+"").click(function () {
            if(!$ul.is(":animated")){
                if(moved<2){
                    moved++;
                    if(moved==2){
                        $ul.removeClass("cooked");
                    }
                    $ul.animate({
                        left:-moved*LIEIFTH
                    },500)
                }
            }
        })
        $("#"+Left+"").click(function () {
            if(!$ul.is(":animated")){
                if(moved!=0)
                    moved--;
                $ul.animate({
                    left:-moved*LIEIFTH
                },500,function () {
                    if(!$ul.hasClass("cooked")){
                        $ul.addClass("cooked");
                    }
                })
            }
        })
    }
    shuffling("cooked","Right-move1","Left-move1");
    shuffling("raw","Right-move2","Left-move2");
});