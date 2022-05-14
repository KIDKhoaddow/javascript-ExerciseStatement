function number1(){
    document.getElementById("showCalculation").innerText+=document.getElementById("number1").value
}
function number2(){
    document.getElementById("showCalculation").innerText+=document.getElementById("number2").value

}
function number3(){
    document.getElementById("showCalculation").innerText+=document.getElementById("number3").value

}
function number4(){
    document.getElementById("showCalculation").innerText+=document.getElementById("number4").value

}
function number5(){
    document.getElementById("showCalculation").innerText+=document.getElementById("number5").value

}
function number6(){
    document.getElementById("showCalculation").innerText+=document.getElementById("number6").value

}
function number7(){
    document.getElementById("showCalculation").innerText+=document.getElementById("number7").value

}
function number8(){
    document.getElementById("showCalculation").innerText+=document.getElementById("number8").value

}
function number9(){
    document.getElementById("showCalculation").innerText+=document.getElementById("number9").value

}
function number0(){
    document.getElementById("showCalculation").innerText+=document.getElementById("number0").value
}
function plus(){
    document.getElementById("showCalculation").innerText+=document.getElementById("plus").value

}
function minus(){
    document.getElementById("showCalculation").innerText+=document.getElementById("minus").value

}
function multi(){
    document.getElementById("showCalculation").innerText+=document.getElementById("multi").value
}
function division(){
    document.getElementById("showCalculation").innerText+=document.getElementById("division").value

}
function equal(){
    let ans=document.getElementById("showCalculation").value
    document.getElementById("showCalculation").innerText=eval(ans).toFixed(2)
}
function clearShow(){
    document.getElementById("showCalculation").innerText=""

}
