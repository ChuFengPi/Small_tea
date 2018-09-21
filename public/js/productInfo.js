$(function() {
    $(".Focus").mousemove(function () {
        $(".nav-content").show();
    }).mouseout(function () {
        $(".nav-content").hide();
    })
    $(".phone").mousemove(function () {
        $(".nav-content1").show();
    }).mouseout(function () {
        $(".nav-content1").hide();
    })
    var id=location.href;
    id=id.substring(id.lastIndexOf("=")+1);
    $.ajax({
        type:"get",
        url:"/product/details",
        data:{id:id},
        success:function (data) {
            var html1="",html="",html3="",html4="",html5="";
            console.log(data);
            var {img1,img2,img3,img4,img5,title,price,number,ingredients,content,level,ensure,origin,production,details}=data.data[0];
            data.spec.forEach(function (p,i) {
                html5+=`
                    <i class="skuChoose">
                        <a href="javascript:;" class="pinfosku" data-name="${p.id}">${p.spec}</a>
                    </i>
                `
            });
            html=`<img src="${img1}" alt="">`;
            html1=`
                      <li class="active">
                          <img src="${img1}" alt="">
                      </li>
                      <li>
                          <img src="${img2}" alt="">
                      </li>
                      <li>
                          <img src="${img3}" alt="">
                      </li>
                      <li>
                           <img src="${img4}" alt="">
                      </li>
                      <li>
                           <img src="${img5}" alt="">
                      </li>
                      `;
            html3=`
                   <h2>${title}</h2>
                   <p class="goodsPrice">￥ ${price}.00</p>
                   <div class="buyNum clears">
                       <span class="buyNumTit lf">购买数量</span>
                       <span class="addNum lf">
                           <a href="" id="red">-</a>
                           <input type="text" value="1" disabled="disabled" id="goodsNum">
                           <a href="" id="add">+</a>
                       </span>
                   </div>
                   <div class="action clears">
                       <a href="" class="addShop" id="addShop">立即购买</a>
                       <a href="" class="addShopCart" id="addShopCart">加入购物车</a>
                   </div>
                   <ul class="goodsMsg">
                       <li></li>
                       <li>
                           <span>商编：${number}</span>
                           <span>配料：${ingredients}</span>
                       </li>
                       <li>
                           <span>净含量：${content}</span>
                           <span>等级：${level}</span>
                       </li>
                       <li>
                           <span>保质期：${ensure}</span>
                           <span>产地：${origin}</span>
                       </li>
                       <li>
                           生产日期：${production}
                       </li>
                   </ul>
                   <p class="buyTel">订购热线: <em></em>400-004-5028 </p>
                   `;
            html4=`<img src="${details}" alt="">`;
            $(".scrollGoods").html(html);
            $(".scrollSmallGoods>ul").html(html1);
            $(".goodsDetail").html(html3);
            $(".goodsDetailImg").html(html4);
            $(".goodsMsg>li").eq(0).html(html5);
            $(".goodsMsg [data-name="+id+"]").addClass("act");
            $(".goodsMsg [data-name]").on("click",function () {
                var id=$(this).attr("data-name");
                location.href="productInfo.html?id="+id;
            });
            var number=$("#goodsNum").val();
            $("#add").click(function (e) {
                e.preventDefault();
                number++;
                $("#goodsNum").val(number);
            });
            $("#red").click(function (e) {
                e.preventDefault();
                if(number>1){
                    number--;
                    $("#goodsNum").val(number);
                }
            })
            var LIEIFTH=80,ul=$("#scrollSmallImg"),moved=0;
            ul.css("width",LIEIFTH*5);
            $("#right").click(function (e) {
                e.preventDefault();
                if(moved<4){
                    moved++;
                    $(".scrollGoods>img").attr("opacity",0);
                    var src=$("#scrollSmallImg li:eq("+moved+") img").attr("src");
                    $("#scrollSmallImg li:eq("+moved+")").addClass("active").siblings().removeClass("active");
                    $(".scrollGoods>img").attr("src",src).css("display",'none').fadeIn({'duration':500});
                }
            })
            $("#left").click(function (e) {
                e.preventDefault();
                if(moved>0){
                    moved--;
                    var src=$("#scrollSmallImg li:eq("+moved+") img").attr("src");
                    $("#scrollSmallImg li:eq("+moved+")").addClass("active").siblings().removeClass("active");
                    $(".scrollGoods>img").attr("src",src).css("display",'none').fadeIn({'duration':500});
                }
            })
            $("#scrollSmallImg").on("click","img",function () {
                var src=$(this).attr("src");
                $(this).parent().addClass("active").siblings().removeClass("active");
                $(".scrollGoods>img").attr("src",src).css("display",'none').fadeIn({'duration':500});
                moved=$("#scrollSmallImg .active").index();
            })
            $(".addShopCart").click(function (e) {
                e.preventDefault()
                $.ajax({
                    type:"get",
                    url:"/user/islogin",
                    success:function (data) {
                        console.log(data);
                        if(data.ok==1){
                            var count=parseInt($("#goodsNum").val());
                            console.log(id);
                            $.ajax({
                                type:"get",
                                url:"/user/addCat",
                                data:{count:count,id:id},
                                success:function (data) {
                                   if(data.code==1){
                                       alert("添加成功")
                                       location.href="cart.html";
                                   }else{
                                       alert("添加失败")
                                   }
                                },
                                error:function () {alert("网络故障请检查")}
                            })
                        }else{
                            location.href="login.html";
                        }
                    },
                    error:function () {alert("网络故障请检查")}
                })
            })
        }, error:function () {alert("网络故障请检查")}})
    $.ajax({
        type:"get",
        url:"/product/selling",
        success:function(data){
            var html=``;
            console.log(data);
            for(var c of data){
                html+=`
                   <li class="oneColItem" id="${c.pid}" data-name="${c.href}">
                        <img src="${c.img}" alt="">
                        <span class="goodsName">${c.title}</span>
                        <span class="goodsTips">${c.author}</span>
                        <p class="teaPrice">￥${c.price}</p>
                    </li>
                `
            }
            $(".goodsList>ul").html(html);
        },
        error:function(){alert("网络故障请检查")}
    })
    $(".goodsList>ul").on("click","li",function () {
        var id=$(this).attr("data-name");
        location.href="productInfo.html?id="+id;
    })
});