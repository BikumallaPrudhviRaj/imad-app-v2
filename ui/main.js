var button =document.getElementById('counter');
var counter =0;
button.onclick =function(){
    var request =new XMLHttprequest();
    request.onreadystatechange = function(){
        if(request.readystate===XMLHttprequest.DONE){
            if(requset.status===200){
                var counter = requset.responseText;
                span.innerHTML=counter.toString();
            }
        }
    };
    request.open('GET','http:http://bikumallaprudhviraj.imad.hasura-app.io/counter',true);
    request.send(null);
};
var submit =document.getElementById('submit_btn');
submit.onclick=function(){
    var request =new XMLHttprequest();
    request.onreadystatechange = function(){
        if(request.readystate===XMLHttprequest.DONE){
            if(requset.status===200){
               var names=request.responseText;
               names=JSON.parse(names);
                var list='';
                for(var i=0;i<names.length;i++){
                    list+='<li>'+names[i]+'</li>';
                }
                var ul=document.getElementById('namelist');
                ul.innerHTML='list';
            }
        }
    };
    var nameInput= document.getElementById('name');
    var name =nameInput.value;
    request.open('GET','http:http://bikumallaprudhviraj.imad.hasura-app.io/submit-name?name= '+name,true);
    request.send(null);
};