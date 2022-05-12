function calCommission(){
    let netRevene=parseFloat(document.getElementById("NetRevene").value);
    let ValuePayment=parseFloat(document.getElementById("ValuePayment").value);
    document.getElementById("Result").innerText=(netRevene*ValuePayment)/100
}