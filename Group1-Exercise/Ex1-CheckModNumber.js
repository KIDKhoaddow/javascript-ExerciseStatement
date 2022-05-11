function CheckModNumber(){
    let Number1=parseFloat(document.getElementById("Number1").value);
    let Number2=parseFloat(document.getElementById("Number2").value);
    ((Number1%Number2)==0)?
        (document.getElementById("Result").innerText="a có chia hết cho b"):
        (document.getElementById("Result").innerText="a không chia hết cho b")
}