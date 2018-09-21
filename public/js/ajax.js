function createXhr(){
    var xhr=null;
	if(window.XMLHttpRequest){
	   xhr=new XMLHttpRequest();
	}else{
	   xhr=new ActiveXObject("Microsoft.XMLHttp");
	}
	return xhr;
}
function ajax({type,url,data,dataType}){
	return new Promise(function(success){
		var xhr=createXhr();
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4&&xhr.status==200){
				var res=xhr.responseText;
				if(dataType==="json")
					res=JSON.parse(res);
				success(res);
			}
		}
		if(type==="get"&&data!==undefined)
			url+="?"+data;
		xhr.open(type,url,true);
		if(type==="post")
			xhr.setRequestHeader(
				"Content-Type",
				"application/x-www-form-urlencoded"
			);
		if(type==="get")
			xhr.send(null);
		else if(data!==undefined)
			xhr.send(data);
	});
}