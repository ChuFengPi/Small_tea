$(function () {
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        var $nav = $(".top>.header-nav");
        if (scrollTop >= 78) {
            $nav.addClass("suspension");
        } else {
            $nav.removeClass("suspension");
        }
        if (scrollTop>=2000){
            $("#volatility").addClass("volatility").removeClass("hidden");
        }else{
            $("#volatility").removeClass("volatility").addClass("hidden");
        }
    });
    var $ul=$("#cooked");
    var LIEIFTH=1170,moved=0;
    $ul.css("width",LIEIFTH*3);
    $("#Right-move").click(function () {
        if(!$ul.is(":animated")){
            if(moved<2){
                moved++;
                $ul.animate({
                    left:-moved*LIEIFTH
                },500);
                if(moved==2){
                    $ul.removeClass("cooked").addClass("cook");
                }
            }
        }
    })
    $("#Left-move").click(function () {
        if(!$ul.is(":animated")){
            if(moved!=0)
                moved--;
            $ul.animate({
                left:-moved*LIEIFTH
            },500,function () {
                if(!$ul.hasClass("cooked")){
                    $ul.addClass("cooked").removeClass("cook");
                }
            })
        }
    })
});