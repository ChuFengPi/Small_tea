const  express=require("express");
const pool=require("../pool");
const session=require("express-session");
let router=express.Router();
//在线商城轮播图
router.get("/banner",(req,res)=>{
    var sql="select * from tea_store_carousel";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.json(result)
    })
})
//上层死商品
router.get("/advertisingon",(req,res)=>{
    var sql="select * from tea_store_on";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.json(result)
    })
})
//热销单品
router.get("/selling",(req,res)=>{
    var sql="select * from tea_store_product";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.json(result)
    })
})
//品牌精选
router.get("/select",(req,res)=>{
    var sql="select * from tea_store_select";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.json(result)
    })
})
//下层死商品
router.get("/advertisingup",(req,res)=>{
    var sql="select * from tea_store_under";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.json(result)
    })
})
//全部商品列表
router.get('/getproducts',(req,res)=>{
    var pno=parseInt(req.query.pno);
    var pageSize=parseInt(req.query.pageSize);
    if(!pno){
        pno=1
    }
    if(!pageSize){
        pageSize=9
    }
    var obj={pno:pno,pageSize:pageSize};
    var progreaa=0;
    var sql="SELECT count(pid) as c FROM tea_store_goodslist";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        var total=result[0].c;
        var pageCount=Math.ceil(total/pageSize);
        obj.total=total;
        obj.pageCount=pageCount;
        progreaa+=50;
        if(progreaa==100){
            res.json(obj);
        }
    })
    var sql="SELECT * FROM tea_store_goodslist LIMIT ?,?";
    var offset=(pno-1)*pageSize;
    pool.query(sql,[offset,pageSize],(err,result)=>{
        if(err) throw err;
        obj.data=result;
        progreaa+=50;
        if(progreaa==100){
            res.json(obj);
        }
    })
})
//模糊查询
router.get('/fuzzy',(req,res)=>{
    var cid=req.query.cid;
    var pno=parseInt(req.query.pno);
    var pageSize=parseInt(req.query.pageSize);
    if(!pno){
        pno=1
    }
    if(!pageSize){
        pageSize=9
    }
    var obj={pno:pno,pageSize:pageSize};
    var progreaa=0;
    var sql="SELECT count(pid) as c FROM tea_store_goodslist WHERE tta LIKE '%"+cid+"%' ";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        var total=result[0].c;
        var pageCount=Math.ceil(total/pageSize);
        obj.total=total;
        obj.pageCount=pageCount;
        progreaa+=50;
        if(progreaa==100){
            res.json(obj);
        }
    })
    var sql="SELECT * FROM tea_store_goodslist  WHERE tta LIKE '%"+cid+"%' LIMIT ?,?";
    var offset=(pno-1)*pageSize;
    pool.query(sql,[offset,pageSize],(err,result)=>{
        if(err) throw err;
        obj.data=result;
        progreaa+=50;
        if(progreaa==100){
            res.json(obj);
        }
    })
})
//商品详情
router.get('/details',(req,res)=>{
    var id=req.query.id;
    if(!id){
        id=111;
    }
    var obj={};
    var progreaa=0;
    var sql="SELECT spec,id FROM tea_laptop WHERE family_id=(SELECT family_id FROM tea_laptop WHERE id=?)";
    pool.query(sql,[id],(err,result)=>{
        if(err) throw err;
        obj.spec=result;
        progreaa+=50;
        if(progreaa==100){
            res.json(obj);
        }
    })
    var sql="SELECT * FROM tea_laptop WHERE id=?";
    pool.query(sql,[id],(err,result)=>{
        if(err) throw err;
        obj.data=result;
        progreaa+=50;
        if(progreaa==100){
            res.json(obj);
        }
    })
})
//修改当前商品数量
router.get('/upCart',(req,res)=>{
    var cid=req.query.cid;
    var count=req.query.count;
    if(cid!=null&&count!=null){
        var sql="update tea_shoppingcart_item set count=? where cid=?";
        pool.query(sql,[count,cid],(err,result)=>{
            if(err) throw err;
            res.json(result);
        })
    }
})
//删除选中商品
router.get('/deleteCar',(req,res)=>{
    var cid=req.query.cid;
    if(cid!=null){
        var sql="delete from tea_shoppingcart_item where cid=?";
        pool.query(sql,[cid],(err,result)=>{
            if(err) throw  err;
            res.json(result);
        })
    }
})
//修改商品选中
router.get('/checkOne',(req,res)=>{
    var cid=req.query.cid;
    var is_checked=req.query.is_checked;
    if(cid!=null&is_checked!=null){
        var sql="update tea_shoppingcart_item set is_checked=? where cid=?";
        pool.query(sql,[is_checked,cid],(err,result)=>{
            if(err) throw  err;
            res.json(result)
        })
    }
})
//修改商品全选
router.get("/checkAll",(req,res)=>{
    var uid=req.session.uid;
    var is_checked=req.query.is_checked;
    if(uid!=null&is_checked!=null){
        var sql="update tea_shoppingcart_item set is_checked=? where user_id=?";
        pool.query(sql,[is_checked,uid],(err,result)=>{
            if(err) throw err;
            res.json(result)
        })
    }
})
module.exports=router;
