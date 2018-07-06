function Loadjson(file,callback){
 var a=new XMLHttpRequest();
  a.overrideMimeType("application/json");
  a.open("get",file,true);
  a.onreadystatechange=function(){
    if(a.readyState===4 && a.status=="200"){
      callback(a.responseText);
    }
  }
  a.send(null);
}
Loadjson("data.json",function (text) {
let data=JSON.parse(text);
console.log(data);
career(data.basics);
})
var right = document.getElementById('right');
function career(edu){
  var h1=document.createElement("h3");
  h1.textContent="CAREER OBJECTIVE";
  right.appendChild(h1);
    var hr=document.createElement("hr");
      right.appendChild(hr);
      var p=document.createElement("p");
      p.textContent=edu.co;
      right.appendChild(p);
}
