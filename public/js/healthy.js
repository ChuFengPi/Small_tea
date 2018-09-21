$(function () {
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        var $nav = $(".top>.header-nav");
    });
    function volatility1() {
        var $ul=$(".seasons .solid>ul");
        var $section=$(".seasons .solid-box>ul");
        var LIEIFTH=960,moved=0;
        $ul.css("width",LIEIFTH*4);
        $(".seasons .next").click(function () {
            if(!$ul.is(":animated")){
                if(moved<3){
                    moved++;
                    cut(moved);
                    $ul.animate({
                        left:-moved*LIEIFTH
                    },400);
                }
            }
        })
        $(".seasons .prve").click(function () {
            if(!$ul.is(":animated")){
                if(moved!=0)
                    moved--;
                cut(moved);
                $ul.animate({
                    left:-moved*LIEIFTH
                },400);
            }
        })
        $section.on("click","li",function () {
            if(!$ul.is(":animated")) {
                var i = $(this).index();
                moved = i;
                cut(moved);
                $ul.animate({
                    left: -moved * LIEIFTH
                }, 500);
            }
        })
    }
    volatility1();
    function cut(moved) {
            var $fsTxt=$("#fs-txt");
            var $season=$("#season");
            $fsTxt.children(":eq(" + moved + ")").addClass("action").siblings().removeClass("action");
            $season.children(":eq(" + moved + ")").addClass("season-action").siblings().removeClass("season-action");
             if(moved==0){
                 $("#SP").addClass("SP").siblings().removeClass("SM AU WI");
             }else if(moved==1){
                 $("#SM").addClass("SM").siblings().removeClass("SP AU WI");
             }else if(moved==2){
                 $("#AU").addClass("AU").siblings().removeClass("SM SP WI");
             }else if(moved==3){
                 $("#WI").addClass("WI").siblings().removeClass("SP SM AU");
             }
    }
    function volatility2() {
        var $ul=$(".time .solid>ul");
        var $section=$(".time>.solid-box>ul");
        var LIEIFTH=960,moved=0;
        $ul.css("width",LIEIFTH*3);
        $(".time .next").click(function () {
            if(!$ul.is(":animated")){
                if(moved<2){
                    moved++;
                    cut1(moved);
                    $ul.animate({
                        left:-moved*LIEIFTH
                    },400);
                }
            }
        })
        $(".time .prve").click(function () {
            if(!$ul.is(":animated")){
                if(moved!=0)
                    moved--;
                cut1(moved);
                $ul.animate({
                    left:-moved*LIEIFTH
                },400);
            }
        })
        $section.on("click","li",function () {
            if(!$ul.is(":animated")) {
                var i = $(this).index();
                moved = i;
                cut1(moved);
                $ul.animate({
                    left: -moved * LIEIFTH
                }, 500);
            }
        })
    }
    volatility2()
    function cut1(moved) {
        var $fsTxt=$("#sf-txt");
        var $season=$("#day");
        $fsTxt.children(":eq(" + moved + ")").addClass("action").siblings().removeClass("action");
        $season.children(":eq(" + moved + ")").addClass("season-action").siblings().removeClass("season-action");
        console.log($("#MO").siblings().html())
        if(moved==0){
             $("#MO").addClass("MO").siblings().removeClass("NO EV");
         }else if(moved==1){
             $("#NO").addClass("NO").siblings().removeClass("MO EV");
         }else if(moved==2){
             $("#EV").addClass("EV").siblings().removeClass("MO NO");
         }
    }
});