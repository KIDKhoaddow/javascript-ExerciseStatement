function calAreaSquare(){
    let number1= parseFloat(document.getElementById("InputNumber1").value);
    let number2= parseFloat(document.getElementById("InputNumber2").value);
    let number3= parseFloat(document.getElementById("InputNumber3").value);

    let areaSquare1=Math.pow(number1,2);
    let areaSquare2=Math.pow(number2,2);
    let areaSquare3=Math.pow(number3,2);

    let result="Diện tích hình vuông cạnh a là :" +areaSquare1+"\n"
        +"Diện tích hình vuông cạnh b là :"+areaSquare2+"\n"
        +"Diện tích hình vuông cạnh c là :"+areaSquare3;

    document.getElementById("Result").innerText=result;

}

function equationSolve1(){
    let number1= parseFloat(document.getElementById("InputNumber1").value);
    let number2= parseFloat(document.getElementById("InputNumber2").value);
    let isEqualZero=number1==number2&&number2==0;

    let result=""
    if(isEqualZero){
        result="vô số nghiệm ";
    }
    else if(number1!=0&&number2==0){
        result="có nghiệm x = 0";
    }
    else if(number2!=0&&number1!=0){
        result="có nghiệm x=a/b="+(number1/number2).toFixed(3);
    }
    document.getElementById("Result").innerText="Phương trình "+result;
}

function  calRectangle(){
    let number1= parseFloat(document.getElementById("InputNumber1").value);
    let number2= parseFloat(document.getElementById("InputNumber2").value);

    let areRectangle=number1*number2;

    document.getElementById("Result").innerText="Diện tích hình chũ nhật là :"+areRectangle;
}

function equationSolve2(){
    let number1= parseFloat(document.getElementById("InputNumber1").value);
    let number2= parseFloat(document.getElementById("InputNumber2").value);
    let number3= parseFloat(document.getElementById("InputNumber3").value);



}
function checkAge(){
    let number1= parseFloat(document.getElementById("InputNumber1").value);
    let number2= parseFloat(document.getElementById("InputNumber2").value);
    let number3= parseFloat(document.getElementById("InputNumber3").value);

    let isNumber1Man= number1>0&&number1<120;
    let isNumber2Man= number2>0&&number2<120;
    let isNumber3Man= number3>0&&number3<120;

    let result1=""
    let result2=""
    let result3=""
    if(isNumber1Man){
        result1="Số thứ nhất là số tuổi của một người"
    }
    else result1="Số thứ nhất không là số tuổi của một người"
    if(isNumber2Man){
        result2="Số thứ hai là số tuổi của một người";
    }
    else result2="Số thứ hai không là số tuổi của một người";
    if(isNumber3Man){
        result3="Số thứ ba là số tuổi của một người"
    }
    else result3="số thứ ba không là số tuổi của một người";
document.getElementById("Result").innerText=result1+"\n"+result2+"\n"+result3;
}
function  calAreaTriangle(){
    let number1= parseFloat(document.getElementById("InputNumber1").value);
    let number2= parseFloat(document.getElementById("InputNumber2").value);

    let AreaTriangle=(number1*number2/2)
    document.getElementById("Result").innerText="Diện tích tam giác vuông là :"+AreaTriangle;
}
function  checkTriangle(){
    let number1= parseFloat(document.getElementById("InputNumber1").value);
    let number2= parseFloat(document.getElementById("InputNumber2").value);
    let number3= parseFloat(document.getElementById("InputNumber3").value);
    if(number3>0&&number2>0&&number1>0){
        if((number1+number2)>number3&&
            (number1+number3)>number2&&
            (number3+number2)>number1){
            document.getElementById("Result").innerText="Đây là 1 tam giác"
        }
    }
}