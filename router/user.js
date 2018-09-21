const qs=require("querystring");
const  express=require("express");
const pool=require("../pool");

let router=express.Router();
//var app=express();
//注册检测手机号
router.get("/phonever",(req,res)=>{
    var phone=req.query.phone;
    var phonereg=/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
    if(!phonereg.test(phone)){
        res.json({code:-1,msg:"手机号格式有误"});
        return;
    };
    var sql="SELECT count(uid) as c FROM tea_user WHERE phone=?";
    pool.query(sql,[phone],(err,result)=>{
        if(err) throw err;
        if(result[0].c>0){
            res.json({code:-1,msg:"此用户已存在"})
        }else{
            res.json({code:1,msg:"用户名可用"})
        }
    })
})
//注册账号
router.post("/reg",(req,res)=>{
    req.on("data",(buf)=>{
        var obj=qs.parse(buf.toString());
        var phone=obj.phone;
        var upwd=obj.upwd1;
        var phonereg=/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
        if(!phonereg.test(phone)){
            res.json({code:-1,msg:"手机号格式有误"});
            return;
        }
        var upwdreg=/^[0-9]{6,}$/;
        if(!upwdreg.test(upwd)){
            res.json({code:-1,msg:"密码格式有误"});
            return;
        }
        var sql="INSERT INTO tea_user(uid, upwd, phone) VALUES(null,?,?)";
        pool.query(sql,[upwd,phone],(err,result)=>{
            if(err) throw err;
            if(result.affectedRows>0){
                res.json({code:1,msg:"注册成功"})
            }else{
                res.json({code:-1,msg:"注册失败"})
            }
        })
    })
});
//用户登录
router.post("/login",(req,res)=>{
    req.on("data",(buf)=>{
        var obj=qs.parse(buf.toString());
        var phone=obj.phone;
        var upwd=obj.upwd;
        var phonereg=/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
        if(!phonereg.test(phone)){
            res.json({code:-1,msg:"手机号格式有误"});
            return;
        }
        var sql="SELECT count(uid) as c ,uid FROM tea_user WHERE phone=? AND upwd=?";
        pool.query(sql,[phone,upwd],(err,result)=>{
            if(err) throw err;
            console.log(req.session);
            //if(req.session.sign) {//检查用户是否已经登录
            // console.log(req.session.uid);//打印session的值
            //} else {//否则展示index页面
            req.session.sign = true;
            req.session.uid= result[0].uid;
            console.log(req.session.uid);
            //}
            if(result[0].c>0){
                res.json({code:1,msg:"登录成功"});
            }else{
                res.json({code:-1,msg:"用户名或密码错误"});
            }
        });
    })
})
//判断登陆状态
router.get("/islogin",(req,res)=>{
    var uid=req.session.uid;
    if(uid!=null){
        sql="SELECT uid FROM tea_user WHERE uid=?";
        pool.query(sql,[uid],(err,result)=>{
            if(err) throw err;
            res.json({ok:1,uid:result})
        })
    }else{
        res.json({ok:0})
    }
})
//加入购物车
router.get('/addCat',(req,res)=>{
    var uid=req.session.uid;
    var count=req.query.count;
    var id=req.query.id;
    console.log(id);
    console.log(count);
    if(uid!=null&&id!=null&&count!=null){
        var sql="select cid from tea_shoppingcart_item where user_id=? and product_id=?";
        pool.query(sql,[uid,id],(err,result)=>{
            if(err) throw  err;
            console.log(result);
            if(result[0]==null) {
                var id=req.query.id;
                var sql = "insert into tea_shoppingcart_item values (null, ?, ?, ?, 0)";
                pool.query(sql, [uid, id, count], (err, result) => {
                    if (err) throw err;
                    res.json({code: 1, msg: "添加商品成功"})
                })
            }else{
                var id=result[0].cid;
                var sql="update tea_shoppingcart_item set count=count+? where cid=?";
                pool.query(sql,[count,id],(err,result)=>{
                    if(err) throw  err;
                    res.json({code:1,msg:"商品添加成功"})
                })
            }
        })
    }
})
//查看购物车
router.get('/getCart',(req,res)=>{
    var uid=req.session.uid;
    if(uid!=null){
        var sql="select a.*,b.* from tea_shoppingcart_item a,tea_laptop b where a.product_id=b.id and a.user_id=? "
        pool.query(sql,[uid],(err,result)=>{
            if(err) throw  err;
            res.json(result);
        })
    }
})
//推出用户
module.exports=router;
