<?php
header("Content-Type:application/json;charset=utf-8");
header('Access-Control-Allow-Origin:http://127.0.0.1:3000');
header('Access-Control-Allow-Credentials: true');
session_start();
$yzm=$_REQUEST["yzm"];
$code=$_SESSION["code"];
if($code!=$yzm){
    echo('{"code":-1,"msg":"验证码输入有误"}');
}else{
    echo('{"code":1,"msg":"验证码输入正确"}');
}
?>