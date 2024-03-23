function calculate(){
    let math = document.getElementById("math").value;
    eng = document.getElementById("eng").value;
    lang = document.getElementById("lang").value;
    hum = document.getElementById("hum").value;
    tech = document.getElementById("tech").value;
}

let sum = parseFloat(math) + parseFloat(eng) + parseFloat(lang) + parseFloat(hum) + parseFloat(tech);
document.getElementById("spot").innerHTML = `Total mark is = ${sum}`;

let percentage = (sum / 500) * 100;
document.getAnimations("spot1").innerHTML = `Percentage is = ${percentage}%`;

if (percentage > 79) {
        document.getElementById("spot2").innerHTML = `Grade: A`;
    } else if (percentage >= 60 && percentage <= 79) {
        document.getElementById("spot2").innerHTML = `Grade: B`;
    } else if (percentage >= 50 && percentage <= 59) {
        document.getElementById("spot2").innerHTML = `Grade: C`;
    } else if (percentage >= 40 && percentage <= 49) {
        document.getElementById("spot2").innerHTML = `Grade: D`;
    } else if (percentage >=0 && percentage <= 39){
        document.getElementById("spot2").innerHTML = `Grade: E`;
    } else{
        document.getElementById("spot2").innerHTML = `ERROR`;
    }