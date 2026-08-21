let inp1 = document.getElementById('inp1');
let inp2 = document.getElementById('inp2');
let inp3 = document.getElementById('inp3');
let select1 = document.getElementById('select1');
let btn = document.getElementById('btn');
let h3 = document.getElementById('h3');
let select2 = document.getElementById('select2')
let spans = document.querySelectorAll('.spans')[0];
let span1 = document.getElementById('span1');
let span2 = document.getElementById('span2');
let clearresult = document.getElementById('clearresult');
let small = document.getElementById('small')
function x(){
    setTimeout(() => {
        h3.innerText = '';
    }, 1000);
}
function time(){
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();    
    small.innerText = `Time: ${hours}:${minutes}:${seconds}`
}
time()
btn.onclick = function(){
    if(inp1.value === ""){
        h3.innerText = 'Please Enter your weight';
        x()
        return;
    }
    if(inp2.value === ""){
        h3.innerText = 'Please Enter your height';
        x()
        return;
    }
    if(inp3.value === ""){
        h3.innerText = 'Please Enter your age';
        x()
        return;
    }
    if(select1.value === "none1"){
        h3.innerText = 'Please Enter your age';
        x()
        return;
    }
    if(select2.value === "none"){
        h3.innerText = 'Please select your gender';
        x();
        return;
    }
    acount();
    inp1.value ='';
    inp2.value='';
    inp3.value='';
    select1.value='none1';
    select2.value='none';
}
function acount(){
    let bmr;
    if(select2.value === "man"){
        bmr = (inp1.value * 10) + (inp2.value * 6.25) - (inp3.value * 5) + 5;
        }else{
       bmr= (inp1.value * 10) + (inp2.value * 6.25) - (inp3.value * 5) -161;
    }
    let tdeee = bmr*Number(select1.value);
    console.log(bmr)
    console.log(tdeee)
    spans.style.display = 'block'
    span1.innerText = 'Basal metabolic rate (BMR): ' + Math.round(bmr);
    span2.innerText = 'Total Daily Intake (TDEE): ' + Math.round(tdeee);
    clearresult.style.display = 'block'
}
clearresult.onclick = function(){
    span1.innerText = '';
    span2.innerText='';
    spans.style.display ='none'
    clearresult.style.display = 'none';
}