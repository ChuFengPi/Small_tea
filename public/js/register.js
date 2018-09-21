$(function(){
    $("#ipl").mouseover(function () {
        $(this).addClass("ipl").removeClass("ipt");
    }).mouseout(function () {
        $(this).addClass("ipt").removeClass("ipl");
    });
    $("#setYzm").click(function () {
        $(this).attr("src","http://127.0.0.1:8080/SmallTea/public/data/00_code.php")
    })
    $("#send").click(function () {
        var phone=$("#phone").val();
        var yzm=$("#yzm").val();
        yzm=yzm.toLowerCase();
        if(!phone){
            $(".commonBox").html("手机号不能为空").show()
            return;
        }
        var phonereg=/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
        var yzmreg=/^[a-z]{4}$/i;
        if(phonereg.test(phone)){
            if(yzmreg.test(yzm)){
                $.ajax({
                    type:"get",
                    url:"http://127.0.0.1:8080/SmallTea/public/data/register.php",
                    data:{yzm},
                    xhrFields: {
                        withCredentials: true
                    },
                    success:function (data) {
                        if(data.code==1){
                            var moved=60;
                            var iCount = setInterval(function () {
                                moved--;
                                if(moved>1){
                                    $("#send").html("再次发送"+moved+"s").addClass("stop");
                                }else{
                                    $("#send").html("再次发送").removeClass("stop");
                                    clearInterval(iCount);
                                }
                            },1000)
                        }else {
                            $(".layer").show();
                        }
                    },
                    error:function () {alert("网络故障请检查")}
                })
            }else {
                $(".layer").show();
            }
        }else{
            $(".commonBox").html("手机号格式不正确").show()
        }
    })
    $(".btnBox").click(function () {
        $(".layer").hide();
    })
    $(".hint").click(function () {
        $(".layer").hide();
    })
    $("#nextBtn").click(function () {
        var phone=$("#phone").val();
        var yzm=$("#yzm").val();
        var yzm1=$("#yxz1").val();
        var phonereg=/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
        var yzmreg=/^[a-z]{4}$/i;
        if(!phone){
            $(".commonBox").html("手机号不能为空").show();
            return;
        }else if(!phonereg.test(phone)){
            $(".commonBox").html("手机号格式不正确").show()
        }
        if(!yzm){
            $(".layer").show();
        }
        if(!yzm1){
            $(".commonBox2").html("验证码不能为空").show();
            return;
        }else {
            $(".passwordBox").show();
            $(".loginBox").hide();
            $(".bl>i").html(phone);
        }
    })
    $("#submitBtn").click(function(){
        var phone=$("#phone").val();
        var upwd1=$("#typePassword1>input").val();
        var upwd2=$("#typePassword2>input").val();
        if(!upwd1){
            $("#upwd1").html("密码不能为空").show();
        }
        if(!upwd2){
            $("#upwd2").html("重复密码不能为空").show();
            return;
        }
        $.ajax({
            type:"get",
            url:"/user/phonever",
            data:{phone},
            success:function(data){
                if(data.code==-1){
                    alert("用户已存在");
                    return;
                }else{
                    var upwdreg=/^[0-9]{6,}$/;
                    if(upwdreg.test(upwd1)){
                        if(upwd1==upwd2){
                            $.ajax({
                                type:"post",
                                url:"/user/reg",
                                data:{phone,upwd1},
                                success:function(data){
                                    alert(data.msg);
                                },
                                error:function(){alert("网络故障请检查")}
                            })
                        }else{
                            $("#upwd2").html("两次输入的密码不一致").show();
                            return;
                        }
                    }else{
                        alert("不符合密码规则")
                    }
                }
            },
            error:function(){alert("网络故障请检查")}
        })
    });
    $(".Focus").mousemove(function(){
        $(".nav-content").show();
    }).mouseout(function(){
        $(".nav-content").hide();
    })
    $(".phone").mousemove(function(){
        $(".nav-content1").show();
    }).mouseout(function(){
        $(".nav-content1").hide();
    })
});