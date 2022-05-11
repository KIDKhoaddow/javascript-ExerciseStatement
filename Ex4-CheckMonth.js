function checkMonthSwitch(){
    let month = parseInt( document.getElementById("Month").value);
    let day=0;

    switch (month){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
        {
            day=31;
            document.getElementById("result1").innerText="Tháng "+month+"có "+day+" ngày"
            break;
        }
        case 4:
        case 6:
        case 9:
        case 11:
        {
            day=30;
            document.getElementById("result1").innerText="Tháng "+month+"có "+day+"ngày"
            break;
        }
        case 2:
        {
            day=28;
            let april="Tháng "+month+" có "+day+" ngày hoặc "+(day+1)+" ngày"
            document.getElementById("result1").innerText=april;
            break
        }
    }


}
function checkMonthIF(){
    let month = parseInt( document.getElementById("Month").value);
    let day=0;
    let isMonth31Day=month==1||month==3||month==5||month==7||month==8||month==10||month==12;
    let isMonth30Day=month==4||month==6||month==9||month==11;
    let isApril=month==2
    if(isMonth31Day){
        day=31;
        document.getElementById("result2").innerText="Tháng "+month+"có "+day+" ngày";
    }
    else if(isMonth30Day){
        day=30;
        document.getElementById("result2").innerText="Tháng "+month+"có "+day+" ngày";
    }
    else{
        day=28;
        let april="Tháng "+month+" có "+day+" ngày hoặc "+(day+1)+" ngày"
        document.getElementById("result2").innerText=april;
    }
}