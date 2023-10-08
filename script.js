function addNewWEField(){
//console.log("Adding New Field");
let newNode=document.createElement("textarea");
newNode.classList.add("form-control");
newNode.classList.add("weField");
newNode.classList.add("mt-2")
newNode.setAttribute("rows",3);
newNode.setAttribute("placeholder","Enter Here");

let weOb = document.getElementById("we");

let weAddButtonOb = document.getElementById("weAddButton");

weOb.insertBefore(newNode,weAddButtonOb);
}

function addNewAQField(){
    let newNode=document.createElement("textarea");
newNode.classList.add("form-control");
newNode.classList.add("eqField");
newNode.classList.add("mt-2")
newNode.setAttribute("rows",3);
newNode.setAttribute("placeholder","Enter Here");

let aqOb = document.getElementById("aq");

let aqAddButtonOb = document.getElementById("aqAddButton");

aqOb.insertBefore(newNode,aqAddButtonOb);
}

//genrating cv
function generateCV()
{
//console.log("generating cv");
let nameField=document.getElementById("namefield").value;

let nameT1=document.getElementById('nameT1');

nameT1.innerHTML=nameField;

//direct

document.getElementById('nameT2').innerHTML = nameField;
document.getElementById('contactT').innerHTML = document.getElementById("contactfield").value;

//address
document.getElementById('addressT').innerHTML = document.getElementById("addressfield").value;
//facebook 
document.getElementById('fbT').innerHTML = document.getElementById("fbfield").value;
//insta
document.getElementById('instaT').innerHTML = document.getElementById("instafield").value;
//linked
document.getElementById('LinkedT').innerHTML = document.getElementById("linkedfield").value;
//github
document.getElementById('gitT').innerHTML = document.getElementById("githubfield").value;

//objective
document.getElementById('objectiveT').innerHTML=document.getElementById("objectivefield").value;

//we
let wes = document.getElementsByClassName("wefield");

let str = '';

for (let e of wes) {
    str = str + ` <li> ${e.value} </li>`;
}

document.getElementById("weT").innerHTML = str;

//aq

let aqs=document.getElementsByClassName("eqfield");

let str1 = '';

for(let e of aqs) {
    str1 = ` <li> ${e.value} </li> `;
}

document.getElementById('aqT').innerHTML = str1;

//image setting
let file=document.getElementById('imgfield').files[0];

console.log(file);

let reader=new FileReader()

reader.readAsDataURL(file);

console.log(reader.result);

//set img to template

reader.onloadend=function(){
    document.getElementById("imgTemplate").src=reader.result;
};

document.getElementById('cv-form').style.display='none';
document.getElementById('cv-template').style.display='block';

}

//printcv
function printCV(){
    window.print()
}

//image setting