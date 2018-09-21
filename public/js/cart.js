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
    var id;
    function lodPage() {
        $.ajax({
            type: "get",
            url: "/user/islogin",
            success: function (data) {
                console.log(data);
                if(data.ok=1){
                    id=data.uid[0].uid;
                    $.ajax({
                        type:"get",
                        url:"/user/getCart",
                        data:{uid:id},
                        success:function (data) {
                            console.log(data);
                            var html="";
                            var sum=0;
                            var total=0;
                            data.forEach(function(p,i){
                                if(p.is_checked==1){
                                    total+=p.price*p.count;
                                    sum+=parseInt(p.count);
                                }
                                var {img1,title,price}=p
                                html+=`<div class="shopcartGoodsBox">
                                        <div class="allGoods">
                                            <table>
                                                <tbody>
                                                <tr>
                                                    <td width="53%">   
                                                        <div class="goodsNews clears" data-name="${p.id}">
                                                            <input data-choose="${p.is_checked}" type="checkbox" data-name="${p.cid}" ${!p.is_checked==0?'checked':'unchecked'}>
                                                            <a href="" class="lf">
                                                                <img src="${p.img1}" alt="">
                                                            </a>
                                                            <div class="goodsDet lf">
                                                                <h3>
                                                                    <a href="">${p.title}</a>
                                                                </h3>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td width="13%">
                                                        <span class="unitPrice">${parseFloat(p.price).toFixed(2)}</span>
                                                    </td>
                                                    <td width="12%">
                                                        <div class="addNum clears" data-name="${p.cid}">
                                                            <a href="" class="reduce">-</a>
                                                            <input type="text" disabled="disabled" value="${p.count}">
                                                            <a href="" class="add">+</a>
                                                        </div>
                                                    </td>
                                                    <td width="12%">
                                                        <span class="subtotal">${parseFloat(p.count*p.price).toFixed(2)}</span>
                                                    </td>
                                                    <td width="10%">
                                                        <a href="" class="deleteGoodsBtn" data-name="${p.cid}">删除</a>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>`
                            })
                            $("#goods").html(html);
                            $("#totalMoney").html(total.toFixed(2));
                            $("#selectCheck").html(sum);
                            $(".selectAllGoods,.shopcartListTitBox input").prop(
                                "checked",$("#goods").is(":has([data-choose=0])")?false:true
                            );
                            console.log($("#goods").is(":has[unchecked]"));
                        },
                        err:function () {alert("网络故障请检查")}
                    })
                }
            },
            error: function () {
                alert("网络故障请检查")
            }
        })
    }
    lodPage();
    $("#goods").on("click",".add,.reduce",function (e) {
        e.preventDefault();
        var cid=$(this).parent().attr("data-name"),
            count=parseInt($(this).siblings(":text").val());
        if($(this).html()=="+"){
            count++;
        }else{
            if(count>1) {
                count--;
            }else{
                $(this).siblings(":text").val(count);
            }
        }
        $.ajax({
            type:"get",
            url:"/product/upCart",
            data:{cid,count},
            success:function (data) {
                console.log(data);
                lodPage();
            }
        })
    }).on("click",".deleteGoodsBtn",function (e) {
        e.preventDefault();
        if(confirm("是否删除选中商品？")){
            var cid=$(this).attr("data-name");
            $.ajax({
                type:"get",
                url:"/product/deleteCar",
                data:{cid},
                success:function () {
                    lodPage()
                }
            })
        }
    }).on("click","input",function () {
        var cid=$(this).attr("data-name"),
            is_checked=$(this).prop("checked")==false?0:1;
        $.ajax({
            type:"get",
            url:"/product/checkOne",
            data:{cid,is_checked},
            success:function () {
                lodPage();
            },
            err:function () {alert("网络故障请检查")}
        })
    })
    $(".shopcartListTitBox input").click(function () {
        var choose=$(this).prop("checked"),
            is_checked=$(this).prop("checked")==false?0:1;
        $.ajax({
            type:"get",
            url:"/product/checkAll",
            data:{is_checked},
            success:function () {
                lodPage()
            },
            err:function () {alert("网络故障请检查")}
        })
        $(".shopcartGoodsBox input").prop("checked",choose);
        $(".selectAllWrapper input").prop("checked",choose);
    })
    $(".selectAllWrapper input").click(function () {
        var choose=$(this).prop("checked"),
            is_checked=$(this).prop("checked")==false?0:1;
        $.ajax({
            type:"get",
            url:"/product/checkAll",
            data:{is_checked},
            success:function () {
                lodPage()
            },
            err:function () {alert("网络故障请检查")}
        })
        $(".shopcartGoodsBox input").prop("checked",choose);
        $(".shopcartListTitBox input").prop("checked",choose);
    })
});