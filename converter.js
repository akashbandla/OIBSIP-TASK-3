let a=document.getElementById("clear");
a.addEventListener("click",clear);
let b=document.getElementById("convert");
b.addEventListener("click",convert);
function clear(){
    document.getElementById("user-input").value="";
    document.getElementById("in").value=0;
    document.getElementById("out").value=0;
    document.getElementById("result").value="";
}
function convert(){
    let res=document.getElementById("result");
    let val=document.getElementById("user-input").value;
    let inputvalue=document.getElementById("in").value;
    let outputvalue=document.getElementById("out").value;
    if(inputvalue==="CELSIUS" && outputvalue==="FAHRENHEIT"){
        res.value=((val)*9/5)+32;
    }
    else if(inputvalue==="CELSIUS" && outputvalue==="KELVIN"){
        res.value=Number(val)+273.15;
    }
    else  if(inputvalue==="CELSIUS" && outputvalue==="CELSIUS"){
        res.value=val;
    }
    else if(inputvalue==="FAHRENHEIT" && outputvalue==="CELSIUS"){
        res.value=((val-32)*5)/9;
    }
    else if(inputvalue==="FAHRENHEIT" && outputvalue==="KELVIN"){
        res.value=((val-32)*5/9)+273.15;
    }
    else if(inputvalue==="FAHRENHEIT" && outputvalue==="FAHRENHEIT"){
        res.value=val;
    }
    else if(inputvalue==="KELVIN" && outputvalue==="CELSIUS"){
        res.value=val-273.15;
    }
    else if(inputvalue==="KELVIN" && outputvalue==="FAHRENHEIT"){
        res.value=((val-273.15)*9/5)+32;
    }
    else if(inputvalue==="KELVIN" && outputvalue==="KELVIN"){
        res.value=val;
    }
}