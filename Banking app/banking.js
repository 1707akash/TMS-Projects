

let personName = document.getElementById("personName");
let storedName = localStorage.getItem("name");
personName.innerText = storedName;

let eye = document.getElementById("eye");
let showBalance = document.getElementById("showBalance");
eye.addEventListener('click', ()=>{
    eye.style.display ="none";
    showBalance.style.display="inline-block";
});


let depAmt = document.getElementById("depAmt");
let depType = document.getElementById("depType");
let depIfsc = document.getElementById("depIfsc");
let depReasn = document.getElementById("depReasn");
let depBtn = document.getElementById("depBtn");
let drawAmt = document.getElementById("drawAmt");
let drawType = document.getElementById("drawType");
let drawIfsc = document.getElementById("drawIfsc");
let drawReasn = document.getElementById("drawReasn");
let drawBtn = document.getElementById("drawBtn");
let history = document.getElementById("history");
let insufficientError = document.getElementById("insufficientErr");
let tableDiv = document.getElementById("tableDiv");
let depositForm = document.getElementById("depositForm");
let withdrawal = document.getElementById("withdrawal");


let totalWithdraw = document.getElementById("totalDraw");
let totalDeposit = document.getElementById("totalDep");
let logout = document.getElementById("logout");
let deleteId = document.getElementById("deleteId");
let acc = document.getElementById("acc");
let localMail = document.getElementById("localMail");
let ifscCd = document.getElementById("ifscCd");

acc.innerText = localStorage.getItem("Account No-");
localMail.innerText = localStorage.getItem("email");
ifscCd.innerText = localStorage.getItem("Ifsc-Code");



logout.addEventListener('click',()=>{
    location.href = "index.html";
    sessionStorage.clear();
})

deleteId.addEventListener('click',()=>{
    location.href = "index.html";
    localStorage.clear();
})



withdrawal.addEventListener('mouseout',()=>{
    insufficientError.style.display= "none";
})



var table = document.getElementById("table")
let count=0;
// ............Deposit..............
depBtn.addEventListener('click',()=>{
    tableDiv.style.display= "block";
    let finalVal = parseFloat(depAmt.value) + parseFloat(showBalance.innerText);
    showBalance.innerText = finalVal;  

    totalDeposit.innerHTML= finalVal;

    var trow = document.createElement("tr");

    var cell1 = document.createElement("td");
    cell1.textContent= ++count;
    trow.appendChild(cell1);

    var cell2 = document.createElement("td");
    let d= new Date();
    cell2.textContent= d.toLocaleString();
    trow.appendChild(cell2);

    var cell3 = document.createElement("td");
    cell3.textContent= depReasn.value;
    trow.appendChild(cell3);

    var cell4 = document.createElement("td");
    cell4.textContent= depAmt.value;
    trow.appendChild(cell4);

    var cell5 = document.createElement("td");
    cell5.textContent= depType.value;
    trow.appendChild(cell5);

    let transType = "Credit";
    var cell6 = document.createElement("td");
    cell6.textContent= transType;
    trow.appendChild(cell6);

    var cell7 = document.createElement("td");
    cell7.textContent= finalVal;
    trow.appendChild(cell7);

    table.appendChild(trow);
    
    depAmt.value ="";
    depReasn.value="";
    depIfsc.value="";
})

let sum=0;

drawBtn.addEventListener('click',()=>{
    if(parseFloat(showBalance.innerText)<drawAmt.value){
        insufficientError.style.display="inline-block";
        drawAmt.value="";
        drawIfsc.value="";
        drawReasn.value="";
    }
    else{
        tableDiv.style.display= "block";
        let finalVal = parseFloat(showBalance.innerText) - parseFloat(drawAmt.value);
    showBalance.innerText = finalVal;

    sum = parseFloat(sum) + parseFloat(drawAmt.value);
    // console.log(sum);
    totalWithdraw.innerHTML = sum;


    var trow = document.createElement("tr");

    var cell1 = document.createElement("td");
    cell1.textContent= ++count;
    trow.appendChild(cell1);

    var cell2 = document.createElement("td");
    let d= new Date();
    cell2.textContent= d.toLocaleString();
    trow.appendChild(cell2);

    var cell3 = document.createElement("td");
    cell3.textContent= drawReasn.value;
    trow.appendChild(cell3);

    var cell4 = document.createElement("td");
    cell4.textContent= drawAmt.value;
    trow.appendChild(cell4);

    var cell5 = document.createElement("td");
    cell5.textContent= drawType.value;
    trow.appendChild(cell5);

    let transType = "Dedit";
    var cell6 = document.createElement("td");
    cell6.textContent= transType;
    trow.appendChild(cell6);

    var cell7 = document.createElement("td");
    cell7.textContent= finalVal;
    trow.appendChild(cell7);

    table.appendChild(trow);

    drawAmt.value="";
    drawIfsc.value="";
    drawReasn.value="";
    }
})