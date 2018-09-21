$(function(){
    $("#ipl").mouseover(function () {
        $(this).addClass("ipl").removeClass("ipt");
    }).mouseout(function () {
        $(this).addClass("ipt").removeClass("ipl");
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
    $.ajax({
        type:"get",
        url:"/product/selling",
        success:function(data){
            var html=``;
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
            $(".goodsList>ul").on("click","li",function () {
                var id=$(this).attr("data-name");
                location.href="productInfo.html?id="+id;
            })
        },
        error:function(){alert("网络故障请检查")}
    })
    var address=location.href;
    address=address.substring(address.lastIndexOf("=")+1);
    address=decodeURI(address)
    off(address)
    function off(cid,pno,pageSize){
        $.ajax({
            type:"get",
            url:"/product/fuzzy",
            data:{cid:cid,pno:pno,pageSize:pageSize},
            success:function(data){
                console.log(data);
                var $box=$(".productListBox");
                var html1="",
                    html2="",
                    html3="";
                data.data.forEach(function(p,i){
                    var {pno,pageSize,pageCount,data}=p
                    if(i<3){
                        html1+=`
                        <li class="lf" id="${p.pid}" data-name="${p.href}">
                            <div class="imgBox">
                                <img src="${p.img}" alt="">
                            </div>
                            <span class="name">${p.title}</span>
                            <span class="slogan">${p.author}</span>
                            <span class="price">￥${p.price}</span>
                        </li>
                    `
                    }else if(i<6&&i>2){
                        html2+=`
                        <li class="lf" id="${p.pid}" data-name="${p.href}">
                            <div class="imgBox">
                                <img src="${p.img}" alt="">
                            </div>
                            <span class="name">${p.title}</span>
                            <span class="slogan">${p.author}</span>
                            <span class="price">￥${p.price}</span>
                        </li>
                    `
                    }else if(i<9&&i>5){
                        html3+=`
                        <li class="lf" id="${p.pid}" data-name="${p.href}">
                            <div class="imgBox">
                                <img src="${p.img}" alt="">
                            </div>
                            <span class="name">${p.title}</span>
                            <span class="slogan">${p.author}</span>
                            <span class="price">￥${p.price}</span>
                        </li>
                    `
                    }
                })
                if(!html1){
                    html1="";
                }else{
                    html1=`<ul class="productList clears">${html1}</ul>`;
                }
                if(!html2){
                    html2="";
                }else{
                    html2=html2=`<ul class="productList clears">${html2}</ul>`;
                }
                if(!html3){
                    html3="";
                }else{
                    html3=`<ul class="productList clears">${html3}</ul>`;
                }
                $box.html(html1+=html2+=html3)

                $(".totalPage").html("共有"+data.total+"条记录");
                var pno=parseInt(data.pno);
                var pageCount=parseInt(data.pageCount);
                var html=` <a href="" class="prePage">上一页</a>`;
                if(pno-3>0){
                    html+=`<a href="" data-number="${pno-3}">${pno-3}</a>`;
                }
                if(pno-2>0){
                    html+=`<a href="" data-number="${pno-2}">${pno-2}</a>`;
                }
                if(pno-1>0){
                    html+=`<a href="" data-number="${pno-1}">${pno-1}</a>`;
                }
                html+=`<a href="" class="active"  data-number="${pno}" >${pno}</a>`;
                if(pno+1<=pageCount){
                    html+=`<a href="" data-number="${pno+1}">${pno+1}</a>`;
                }
                if(pno+2<=pageCount){
                    html+=`<a href="" data-number="${pno+2}">${pno+2}</a>`;
                }
                html+=`<a href="" class="nextPage">下一页</a>`;
                if(data.total>9){
                    $(".pageItem").html(html);
                }
            },
            error:function(){alert("网络故障请检查")}
        })
    }
    $(".productListBox").on("click","li",function (e) {
        e.preventDefault();
        var id=$(this).attr("data-name");
        location.href="productInfo.html?id="+id;
    })
    $(".pageItem").on("click","a",function(e){
        e.preventDefault();
        var pno=$(this).text();
        var active=$(".active").text();
        var number=$(".pageItem>[data-number]").length;
        console.log(active);
        console.log(pno);
        console.log(number);
        if(pno=="上一页"&&active>1){
            off(address,--active,9);
        }else if(pno=="下一页"&&active<number){
            off(address,++active,9);
        }else if(pno!="上一页"&&pno!="下一页"){
            console.log(45);
            off(address,pno,9)
        }
    })
});
