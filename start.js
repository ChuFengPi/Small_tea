const http=require("http");
const express=require("express");
const routerUser=require("./router/user");//用户模块
const routerProduct=require("./router/product");//产品模块
const session=require("express-session");//保存登陆状态
const cors=require("cors")//跨域请求
var app=express();
var server=http.createServer(app);
server.listen(3000);
//保存session登陆用户的编号
app.use(cors());
app.all('http://127.0.0.1:8081', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8081");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.use(session({
    secret:'hubwiz app',
    // cookie:{maxAge:60 * 1000 *30},
    resave:false,
    saveUninitialized:false
}));
app.use("/user",routerUser);
app.use('/product',routerProduct);
app.use(express.static("public"));