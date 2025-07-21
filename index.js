let a1=document.getElementById("a1");
let a2=document.getElementById("a2");
let a3=document.getElementById("a3");
let l1=document.getElementById("l1");
let l2=document.getElementById("l2");
let l3=document.getElementById("l3");
  
a1.addEventListener("click",red);
a2.addEventListener("click",yellow);
a3.addEventListener("click",green);

function red(){
    a1.style.backgroundColor="red";
    l1.style.backgroundColor="red";
    a2.style.backgroundColor="black";
    l2.style.backgroundColor="black";
    a3.style.backgroundColor="black";
    l3.style.backgroundColor="black";
   
  
    
}

function yellow(){
    a2.style.backgroundColor="yellow";
    l2.style.backgroundColor="yellow";
    a1.style.backgroundColor="black";
    l1.style.backgroundColor="black";
    a3.style.backgroundColor="black";
    l3.style.backgroundColor="black";
    
}
function green(){
    a3.style.backgroundColor="green";
    l3.style.backgroundColor="green";
    a1.style.backgroundColor="black";
    l1.style.backgroundColor="black";
    a2.style.backgroundColor="black";
    l2.style.backgroundColor="black";
   
}