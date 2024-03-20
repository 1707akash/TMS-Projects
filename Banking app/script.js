

let loginBtn = document.getElementById("loginBtn");
let enteredEmail = document.getElementById("email");
let enteredPw = document.getElementById("password");
let storedPw = localStorage.getItem('password');
let storedEmail = localStorage.getItem('email');
let pwError = document.getElementById("pwError");


loginBtn.addEventListener('click',function(){
    // window.open("banking.html","_blank");
    if(enteredEmail.value == storedEmail && enteredPw.value == storedPw){
        location.href = "banking.html";
    }
    else{
        pwError.style.display="block";
    }

    
})