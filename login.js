//validate code for inputs
var email = document.forms["form"]["email"];
var password = document.forms["form"]["password"];
var cpassword = document.forms["form"]["cpassword"];

var email_error = document.getElementById("email_error");
var pass_error = document.getElementById("pass_error");
var conf_error = document.getElementById("conf_error");

email.addEventListener("textInput", email_verify);
password.addEventListener("textInput", pass_verify);
cpassword.addEventListener("textInput", conf_verify);

function validated(){
    if (email.value.length < 9){
        email.style.border = "1px solid red";
        email_error.style.display = "block";
        email.focus();
        return false;
    }

    if (password.value.length < 6){
        password.style.border = "1px solid red";
        pass_error.style.display = "block";
        password.focus();
        return false;
    }

    if (cpassword.value.length < 6){
        cpassword.style.border = "1px solid red";
        conf_error.style.display = "block";
        cpassword.focus();
        return false;
    }

    if (cpassword.value.length != password.value.length){
        cpassword.style.border = "1px solid silver";
        conf_error.style.display = "block";
        cpassword.focus();
        return false;
    }

}

function email_verify(){
    if (email.value.length >= 8){
        email.style.border = "1px solid silver";
        email_error.style.display = "none";
        return true;
    }
}

function pass_verify(){
    if (password.value.length >= 6){
        password.style.border = "1px solid silver";
        pass_error.style.display = "none";
        return true;
    }
}

function conf_verify(){
    
    if (password.value == cpassword.value){
        conf_error.style.display = "none";
        return true;
    }

}