function makeBill(){
   let numberQuantity=parseFloat(document.getElementById("Quantity").value);
   let bill
   let billState1=1.678,billState2=1.734,billState3=2.014,billState4=2.536,billState5=2.834,billState6=2.927;
   let state1=50*billState1,
       state2=state1+50*billState2,
       state3=state2+100*billState3,
       state4=state3+100*billState4,
       state5=state4+100*billState5,
       state6=state5;
   let numberQuantityA
   if(numberQuantity>0&&numberQuantity<=50){
      bill=numberQuantity*1.678
   }
   else if(numberQuantity>50&&numberQuantity<=100){
      numberQuantityA=numberQuantity-50
      bill=state1+numberQuantityA*billState2
   }
   else if(numberQuantity>100&&numberQuantity<=200){
      numberQuantityA=numberQuantity-100
      bill=state2+numberQuantityA*billState3
   }
   else if(numberQuantity>200&&numberQuantity<=300){
      numberQuantityA=numberQuantity-200
      bill=state3+numberQuantityA*billState4
   }
   else if(numberQuantity>300&&numberQuantity<=400){
      numberQuantityA=numberQuantity-300
      bill=state4+numberQuantityA*billState5
   }
   else if(numberQuantity>400){
      numberQuantityA=numberQuantity-400
      bill=state5+numberQuantityA*billState6
   }
   document.getElementById("result").innerText="Số tiền phải đóng là :"+bill.toFixed(3)
}