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