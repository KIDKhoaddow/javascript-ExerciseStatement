let Button=document.getElementById("ButtonNo")
Button.style.position='absolute';
window.onload=init;


function yesClick(){
    alert("Yes, you are right");
}

function ChangePosition(){
    Button.style.top=parseInt(Math.random()*1000)+"px"
    Button.style.right=parseInt(Math.random()*1000)+"px"

}
