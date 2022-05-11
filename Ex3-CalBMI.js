function CalBMI(){
    let height=parseFloat(document.getElementById("Height").value);
    let weight=parseFloat(document.getElementById("Weight").value);
    let BMI=weight/(Math.pow(height,2));
    let isUnderweight=BMI<18.5;
    let isNormal=(BMI>=18.5)&&(BMI<25.0);
    let isOverweight=(BMI>=25.0)&&(BMI<30.0);
    let isObese=BMI>=30.0;
    let result=''


    if(isUnderweight){
        result='Underweight';
    }
    else if(isNormal){
        result='Normal';
    }
    else if (isOverweight){
        result='Overweight';
    }else if(isObese){
        result='Obese';
    }
    document.getElementById("result").innerText=result;
}