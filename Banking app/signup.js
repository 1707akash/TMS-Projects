let userName = document.getElementById("user");
let mailid = document.getElementById("mailid");
let mobnum = document.getElementById("mobnum");
let createpw = document.getElementById("createpw");
let confirmPw = document.getElementById("confirm");
let unmatchError = document.getElementById("unmatch");
let submitBtn = document.getElementById("submit");
let successDiv = document.getElementById("success");
let contactError = document.getElementById("contactError");
let accountNo = document.getElementById("accountNo");
let ifscCode = document.getElementById("ifscCode");

mobnum.addEventListener('blur', ()=>{
  // console.log(mobnum.value);
  if(mobnum.value.length>10 || mobnum.value.length<10){
    contactError.style.display="inline-block";
  }
})



submitBtn.addEventListener("click", function () {
  if (
    userName.value !== "" &&
    mailid.value !== "" &&
    mobnum.value !== "" &&
    createpw.value === confirmPw.value
  ) {
    
    successDiv.style.display = "block";
    submitBtn.disabled=true;
    if(submitBtn.disabled){
        submitBtn.style.backgroundColor="pink";
    }
    const emailId = mailid.value;
    localStorage.setItem("email",emailId);
    const password = createpw.value;
    localStorage.setItem("password",password);
    const fullName = userName.value;
    localStorage.setItem("name",fullName);
    const bankIfsc = ifscCode.value;
    localStorage.setItem("Ifsc-Code", bankIfsc);
    const userAccNo = accountNo.value;
    localStorage.setItem("Account No-", userAccNo);
  

    const redirect = setTimeout(directOut,1500);
    function directOut(){
      location.href = "index.html";
    }


    // const userData = {
    //   fullName,
    //   emailId,
    //   password
    // }

    // const userDataJSON=JSON.stringify(userData);
    // localStorage.setItem(userDataJSON);
  }
});
