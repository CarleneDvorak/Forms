var fName = document.myForm.fname;
var lName = document.myForm.lname;
var eMail = document.myForm.email;
var phoneNum = document.myForm.phone;
var radio = document.myForm.subscribe;
var fnameErr = document.getElementById("fNameErr");
var lnameErr = document.getElementById("lNameErr");
var emailErr = document.getElementById("emailErr");
// Authors:Carlene Dvorak, Stan Razumov
// Date: October 24, 2018 

var phoneErr = document.getElementById("phoneErr");
var radioErr = document.getElementById("radioErr");
var emailRgx = /\S+@\S+\.\S+/;
var phoneRgx = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;


function Default (){
    var formLen = document.myForm.length;
    for (var i = 0; formLen > i; i++){
        document.myForm[i].style.backgroundColor = "white";
    }
    fnameErr.style.display ="none";
    lnameErr.style.display ="none";
    emailErr.style.display ="none";
    phoneErr.style.display ="none";
}
function validateForm(){

    if (fName.value.length < 6){
        fnameErr.style.display ="inline";
        fName.style.backgroundColor = "pink";
        fnameErr.innerHTML = "* Required fields are missing";
        fName.focus();
        return false;
    }
    if (lName.value.length < 6){
        lnameErr.style.display ="inline";
        lName.style.backgroundColor = "pink";
        lnameErr.innerHTML = "* Required fields are missing";
        lName.focus();
        return false;
    }
    if (!emailRgx.test(eMail.value)){
        emailErr.style.display ="inline";
        eMail.style.backgroundColor = "pink";
        emailErr.innerHTML = "* Required fields are missing";
        eMail.focus();
        return false;
    }
    if (!phoneRgx.test(phoneNum.value)){
        phoneErr.style.display ="inline";
        phoneNum.style.backgroundColor = "pink";
        phoneErr.innerHTML = "* Required field is incorrect";
        phoneNum.focus();
        return false;
    }
    if(radio.value == ""){
        radioErr.style.display ="inline";
        radioErr.innerHTML = "* Please make a selection";
        return false;
    }
    return true;
}
function Redirect(){
    if (validateForm()== true){
        document.myForm.submit()
    }
}
