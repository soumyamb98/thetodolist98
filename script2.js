$(document).ready(function(){
    var xhttp= new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
    if(this.readyState==4 && this.status==200){
        var response= JSON.parse(this.responseText);
        var putout ="";
        for (var i=0; i< response.length; i++){
            if(response[i].completed==true){
                putout+='<li id="idli"><input type="checkbox" name="test" id="chkbxdisabled" checked disabled>' + `${response[i].title}` + '</li>'
            }else{
                putout+='<li id="idli"><input type="checkbox" name="test" id="chkbx2" onchange="listcheck()">' + `${response[i].title}` + '</li>'
            }
            // if(response[i].completed==true){
            //     putout+='<tr><td><input type="checkbox" name="test" id="c1" checked disabled>' + response[i].title + '</td></tr>';
            // }else{
            //     putout+='<tr><td><input type="checkbox" name="test" id="c1" value="" >' + response[i].title + '</td></tr>';
            // }
            // putout+="<li>" + response[i].title + "</li>";
           

        }
        document.getElementById("ajax").innerHTML=putout;
    }
}
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
});

// var count=0;
// console.log(count);
function listcheck(){
    var totallistcheck=document.querySelectorAll('input[id="chkbx2"]:checked').length;
    // totallistcheck.value =5
    var prom=new Promise(function(resolve,reject){
        // var count=0;
        // for (var totallistcheck=0; totallistcheck'input[type="checkbox"]:checked'.length; i++){
            //  count +=1;
        if(totallistcheck==5){
            resolve("5 tasks is completed, congrats");
            // reject("5 tasks not yet completed..");
        }else{
            reject("5 tasks not yet completed..");
            // resolve(alert("5 tasks is completed, congrats"));
        }
    // }
    });
    prom.then(function(m){
       
        alert(m);
        console.clear();
    }).catch(function(e){
        console.log(e)
    });
}

// $("#c1").css("background-color", "red");
