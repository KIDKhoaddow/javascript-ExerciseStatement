function findMax(){
    let number1=parseFloat(document.getElementById("Number1").value);
    let number2=parseFloat(document.getElementById("Number2").value);
    let number3=parseFloat(document.getElementById("Number3").value);
    let ShowResult=document.getElementById("Result").innerText
    if(number1>number2){
        if(number1>number3){
            document.getElementById("Result").innerText="Số 1 là số lớn nhất"
        }
        else{
            document.getElementById("Result").innerText="Số 3 là số lớn nhất"
        }
    }else if(number1<number2){
        if(number2>number3){
            document.getElementById("Result").innerText="Số 2 là số lớn nhất"
        }
        else{
            document.getElementById("Result").innerText="Số 3 là số lớn nhất"
            ShowResult='a';
        }
    }else {
        if(number1>number3){
            document.getElementById("Result").innerText="Số 1 và số 2 là số lớn nhất"
        }
        else{
            document.getElementById("Result").innerText="Số 3 là số lớn nhất"


    }
}}