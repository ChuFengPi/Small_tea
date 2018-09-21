$(function(){
    $("#head").load("homeheader.html",function(){
        var link=document.createElement("link");
        link.rel="stylesheet";
        link.href="css/homeheader.css";
        document.head.appendChild(link);
        $("#ipl").mouseover(function () {
            $(this).addClass("ipl").removeClass("ipt");
        }).mouseout(function () {
            $(this).addClass("ipt").removeClass("ipl");
        });
        $("#personalBox").mouseover(function () {
            $("#logoutBox").show();
            $("#center").addClass("sonat")
        })
        $("#logoutBox").mouseover(function () {
            $("#logoutBox").show();
            $("#center").addClass("sonat")
        }).mouseout(function () {
            $("#logoutBox").hide();
            $("#center").removeClass("sonat")
        })
        $.ajax({
            type:"get",
            url:"/user/islogin",
            success:function (data) {
                if(data.ok==1){
                    $("#personalBox").show();
                    $(".personal").hide();
                }else{
                    $("#personalBox").hide();
                    $(".personal").show();
                }
            },
            error:function () {alert("网络故障请检查")}
        })
    })
});