function CheckNumber(){
    let number = parseInt(document.getElementById("Number").value);
    (number!=0)?(number>0?document.getElementById("Result").innerText="Số này lớn hơn 0":
       document.getElementById("Result").innerText="Số này nhỏ hơn 0"):
      document.getElementById("Result").innerText="Số này bằng 0";
}