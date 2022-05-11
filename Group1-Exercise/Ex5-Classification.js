function Classification(){
    let Score15_1=parseFloat(document.getElementById("MathScore15-1").value);
    let Score15_2=parseFloat(document.getElementById("MathScore15-2").value);
    let Score15_3=parseFloat(document.getElementById("MathScore15-3").value);
    let Score45_1=parseFloat(document.getElementById("MathScore45-1").value);
    let Score45_2=parseFloat(document.getElementById("MathScore45-2").value);
    let ScoreMidTerm=parseFloat(document.getElementById("MathScoreMidTerm").value);
    let ScoreEndTerm=parseFloat(document.getElementById("MathScoreEnd").value);
    let AverageScore=(Score15_1+Score15_2+Score15_3+
        Score45_1*2+ Score45_2*2+
        ScoreEndTerm*3+ScoreMidTerm*3)/13;
    let Classification=""
    if(AverageScore<=5){
        Classification="Yếu"
    }else if(AverageScore>5&&AverageScore<=8){
        Classification="Khá"
    }else if(AverageScore>8){
        Classification="Giỏi"
    }else {
        Classification="Xuất sắc"
    }
    document.getElementById("Classification").innerText=Classification;
}