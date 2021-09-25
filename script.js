// var form = document.getElementById("form");
// function validate() {
//     let email = document.getElementById("email") ;
//     let pwd = document.getElementById("pwd").value.trim() ;
    
//      var emailcheck = /^([a]{1}[d]{1}[m]{1}[i]{1}[n]{1})$/;
//      var pwdcheck = /^([1]{1}[2]{1}[3]{1}[4]{1}[5]{1})$/;

//      if (emailcheck.test(email.value.trim())) {
//         document.getElementById("emailerror").innerHTML="";
//         email.style.border="5px solid green";
//     } else {
//         document.getElementById("emailerror").innerHTML="**userid is invalid";
//         email.style.border="5px solid red";
//         return false;
        
//     }
//     if (pwdcheck.test(pwd)){
//         document.getElementById("perror").innerHTML="valid";
//         // pwd.style.border="5px solid green";
//     } else {
//         document.getElementById("perror").innerHTML="**password is invalid";
//         // pwd.style.border="5px solid red";
//         return false;
        
//     }
//     }


    function valcredential(callback){
        let email = document.getElementById("email") ;
        let pwd = document.getElementById("pwd") ;

        if (email.value.trim()=="admin" && pwd.value.trim() == "12345") {
            callback();
        } else {
            alert("There is an error username:admin & password:12345")
        }
        
    }function validate(){
        window.open("redirectlist.html")
    }







    // let email = document.getElementById("email") ;
    // let pwd = document.getElementById("pwd") ;


    // let emailerror = document.getElementById("emailerror");
    // function emailinput(){
    //     if (email.value.trim()=="admin") {
    //         emailerror.innerHTML="";
    //     email.style.border="5px solid green";
    //     return true;
    //     } else {
    //         document.getElementById("emailerror").innerHTML="**userid is invalid";
    //     email.style.border="5px solid red";
    //     return false;
    //     }
    // }
    // function pwdinput(){
    //     if (pwd.value.trim()== "12345"){
    //         document.getElementById("perror").innerHTML="valid";
    //     pwd.style.border="5px solid green";
    //     return true;
    //     }else{
    //         document.getElementById("perror").innerHTML="**password is invalid";
    //                 pwd.style.border="5px solid red";
    //                 return false;
                    
    //     }
    // }
    
    
    
    // function valcredential(validate){
    //     if (emailinput() && pwdinput()){
    //         validate();
    //     }else{
    //         return false;
    //     }
    // }
    // function validate(){
    //     window.open("redirectlist.html");
    //     return true;
    // }