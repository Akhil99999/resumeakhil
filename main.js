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
educ(data.education);
tech(data.tech);
achieve(data.achieve)
});
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
function educ(edu){
  var h1 =document.createElement("h1");
  h1.textContent="Education qualification";
  right.appendChild(h1);
     var hr =document.createElement("hr");
       right.appendChild(hr);
       for(var i=0;i<edu.length;i++){
           var p =document.createElement("li");
           p.textContent =edu[i].name;
             right.appendChild(p);
             var p =document.createElement("p");
             p.textContent =edu[i].inst;
               right.appendChild(p);
               var p =document.createElement("p");
               p.textContent =edu[i].percentage;
                 right.appendChild(p);
       }
     }
       function tech(tec){
         var h1 =document.createElement("h2");
         h1.textContent="Technical qualification";
         right.appendChild(h1);
            var hr =document.createElement("hr");
              right.appendChild(hr);
              for(var i=0;i<tec.length;i++){
                  var p =document.createElement("li");
                  p.textContent =tec[i].name;
                    right.appendChild(p);
                    var p =document.createElement("p");
                    p.textContent=tec[i].value;
                      right.appendChild(p);

              }
              function achieve(ach){
        var abc= document.createElement("h4")
        abc.textContent="Achievements:";
        abc.appendChild(document.createElement("hr"))
        right.appendChild(abc);
        var para3=document.createElement("p");
        para3.textContent=ach.details;
        right.appendChild(para3);
              }
}
