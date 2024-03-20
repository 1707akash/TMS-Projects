// DOM SELECTION PART ..........................

// Name.................
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let fnameError = document.getElementById('fnameError');
let lnameError = document.getElementById('lnameError');
let fname = "";
let lname = "";

// firstName code.

firstName.addEventListener('blur',function(){
    fname= firstName.value;
for(let i=0; i<fname.length; i++){
    let code = fname.charCodeAt(i);
    if (!((code>=65 &&code<=90)||(code>=97 &&code<=122))) {
        fnameError.innerText="Please enter a valid text";
    }
};
})


// // lastname code 

lastName.addEventListener('blur', function(){
    lname= lastName.value;
for(let i=0; i<lastName.value.length; i++){
    let code = lastName.value.charCodeAt(i);
    if (!((code>=65 &&code<=90)||(code>=97 &&code<=122))) {
        lnameError.innerText="Please enter a valid text";
    }
};
});


// Birthdate ....................
let birthDate = document.getElementById('birthDate');


// Gender........................
let gender = document.querySelectorAll(".gender");
let selectedGender = null;


// phone .................
let mobNum = document.getElementById('mobNum');
let numError = document.getElementById('numError');


// Higher Education...............
let education = document.querySelectorAll(".edu");
let highestEducation = null;
let selectedDegree = "";



// Description...................
let description = document.getElementById("description");


// Choose file ..................
let file = document.getElementById("file");
let profilePic = document.getElementById("profile");

file.addEventListener('change', function(){
    profilePic.src = URL.createObjectURL(file.files[0]);



    // this method for API URL .......
    // let selectedFile = file.files[0];
    // const reader = new FileReader();
    // reader.onload = (event) =>{
    //     profilePic.src = event.target.result;
    // }
    // reader.readAsDataURL(selectedFile);
})

// Skills adding...... 
let arrowBtn = document.getElementById("arrowBtn");
let skillSet = document.getElementById("skillSet");
arrowBtn.addEventListener('click', function(){
    skillSet.style.height= '12rem' ;
})

// Enabling and disabling... 
let submitBtn = document.querySelector("#submitBtn");
submitBtn.disabled = true;
if(submitBtn.disabled){
    submitBtn.style.backgroundColor = 'pink';
}

description.addEventListener('mouseout', function(){
    if(firstName.value !=="" && lastName.value !=="" && birthDate.value !=="" && mobNum.value !=="" && lnameError!=="" && fnameError!=="" && numError!==""){
        submitBtn.disabled = false;
        submitBtn.style.backgroundColor = '#6c2ed0';
    }else{
        submitBtn.disabled = true;
        submitBtn.style.backgroundColor = 'pink';
    }
    
})


// EVENT FIRING PART ......................

submitBtn.addEventListener('click', ()=>{
    // // gender code ..
    gender.forEach(function(radioBtn){
        if(radioBtn.checked){
            selectedGender=radioBtn.value;
        }
    });

    // Mobile number code.
    let number = mobNum.value;
    if (number.length>10 || number.length<10){
        numError.innerText = "Please select a valid number"
    };
    // Skills acquired.......
      const selectedSkills = [];
      for (const option of skillSet.options) {
        if (option.selected) {
          selectedSkills.push(option.value);
        }
      }

    //Education acquired....
      for (let i = 0; i < education.length; i++) {
        if (education[i].checked) {
          selectedDegree += (education[i].value + ", ");
        }
      }
    let personDetails ={};
    personDetails.name = fname + " " + lname;
    personDetails.birthDate = birthDate.value;
    personDetails.contact = number;
    personDetails.gender = selectedGender;
    personDetails.skills = selectedSkills;
    personDetails.education = selectedDegree;
    personDetails.description = description.value;
    personDetails.path = profilePic.src;
    console.log(personDetails);
})