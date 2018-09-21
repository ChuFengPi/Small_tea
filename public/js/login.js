$(function(){
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
    $("#login").click(function(){
        var phone=$(".userInfo>input").val();
        var upwd=$(".userPassword>input").val();
        if(!phone){
            $("#promptph").html("手机号不能为空").show();
        }
        if(!upwd){
            $("#promptup").html("密码不能为空").show();
            return;
        }
        var phonereg=/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
        if(phonereg.test(phone)){
            $.ajax({
                type:"post",
                url:"/user/login",
                data:{phone,upwd},
                success:function(data){
                    if(data.code==1){
                        location.href="home.html";
                    }else{
                        alert(data.msg)
                    }
                },
                error:function(){alert("网络故障请检查")}
            })
        }else{
            $("#promptph").html("手机号格式不正确").show();
        }
    })
});