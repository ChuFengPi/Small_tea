$(function(){
	$("#head").load("head.html",function(){
		var link=document.createElement("link");
		link.rel="stylesheet";
		link.href="css/head.css";
		document.head.appendChild(link);
    })
});