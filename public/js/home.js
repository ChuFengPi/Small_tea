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
    var $ul=$("#scrollImg>ul");
    var $span=$(".scrollIcon>span")
    var LIWIDTH=1229,interval=500,wait=3000,moved=1,timer=null;
    $.ajax({
        type:"get",
        url:"/product/banner",
        success:function(data){
            // console.log(data);
            var html="";
            var a=1;
            for(var c of data){
                var {img,href,title}=c;
                html+=`
                    <li>
              			<a href="${href}">
                			<img src="${img}">
              			</a>
           			</li>
                `
            }
            var $ul=$("#scrollImg>ul");
            $ul.html(html);
            $ul.html(html).css("width",LIWIDTH*(data.length+1));
            var $box=$("#scrollImg>ul>li")
            function autoMOve(){
                timer=setInterval(function(){
                    move();
                },wait);
            }
            function move(){
                if(moved==4)
                    moved=0;
                $($box[moved]).removeClass("Imgno").addClass("Imgto").siblings().addClass("Imgno");
                $($span[moved]).addClass("active").siblings().removeClass("active");
                if(moved<4)
                    moved++;
            }
            autoMOve();
            $(".scrollIcon").on("mousemove","span",function(){
                $(this).addClass("active").siblings().removeClass("active");
                move();
                moved=$(this).index();
            })
            $(".scrollBox").mouseenter(function(){
                clearInterval(timer);
                timer=null;
            }).mouseleave(function(){
                autoMOve();
            })
        },
        error:function(){alert("网络故障请检查")}
    })
    $.ajax({
        type:"get",
        url:"/product/advertisingon",
        success:function(data){
            var html="";
            for(var c of data){
                html+=`
                   <img src="${c.img}" class="advert">
                `
            }
            $(".smallTea").html(html)
        },
        error:function(){alert("网络故障请检查")}
    })
    $.ajax({
        type:"get",
        url:"/product/selling",
        success:function(data){
            console.log(data);
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
    $.ajax({
        type:"get",
        url:"/product/select",
        success:function(data){
            console.log(data);
            var html1=`<li class="twoColItem">
                          <img src="img/home/20180524134428_881.jpg" alt="">
                       </li>`,
                html2="";
            data.forEach(function(p,i){
                var {pid,title,author,img,price,href}=p
                if(i<2){
                    html1+=`
                        <li class="oneColItem" id="${pid}" data-name="${href}">
                            <img src="${img}" alt="">
                            <span class="goodsName">${title}</span>
                            <span class="goodsTips">${author}</span>
                            <p class="teaPrice">￥${price}</p>
                        </li>
                    `
                }else{
                    html2+=`
                        <li class="oneColItem" id="${pid}" data-name="${href}">
                            <img src="${img}" alt="">
                            <span class="goodsName">${title}</span>
                            <span class="goodsTips">${author}</span>
                            <p class="teaPrice">￥${price}</p>
                        </li>
                    `
                }
            })
            html2+=`<li class="oneColItemimg">
                        <img src="img/home/20180524134928_981.jpg" alt="">
                    </li>`
            $("#select1").html(html1);
            $("#select2").html(html2);
            $("#cakes").on("click","li",function () {
                var id=$(this).attr("data-name");
                location.href="productInfo.html?id="+id;
            })
        },
        error:function(){alert("网络故障请检查")}
    })
    $.ajax({
        type:"get",
        url:"/product/advertisingup",
        success:function(data){
            var html=``;
            for(var c of data){
                html+=`
                    <img src="${c.img}">
                `
            }
            $(".dynamic").html(html)
        },
        error:function(){alert("网络故障请检查")}
    })
});