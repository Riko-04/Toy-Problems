// Declare variables to store marks in different subjects
let math, eng, lang, hum, tech;

// Function to calculate total marks, percentage, and grade
function calc() {
    // Retrieve marks from input fields and convert them to floating-point numbers
    math = parseFloat(document.getElementById("math").value);
    eng = parseFloat(document.getElementById("eng").value);
    lang = parseFloat(document.getElementById("lang").value);
    hum = parseFloat(document.getElementById("hum").value);
    tech = parseFloat(document.getElementById("tech").value);

    // Calculate total marks
    let sum = math + eng + lang + hum + tech;

    // Display total marks
    document.getElementById("spot").innerHTML = `Total mark is = ${sum}`;

    // Calculate percentage
    let percentage = (sum / 500) * 100;

    // Display percentage
    document.getElementById("spot1").innerHTML = `Percentage is = ${percentage}%`;

    // Determine grade based on percentage
    if (percentage > 79 && percentage <= 100) {
        document.getElementById("spot2").innerHTML = `Grade: A`;
    } else if (percentage >= 60 && percentage <= 79) {
        document.getElementById("spot2").innerHTML = `Grade: B`;
    } else if (percentage >= 50 && percentage <= 59) {
        document.getElementById("spot2").innerHTML = `Grade: C`;
    } else if (percentage >= 40 && percentage <= 49) {
        document.getElementById("spot2").innerHTML = `Grade: D`;
    } else if (percentage >= 0 && percentage <= 39) {
        document.getElementById("spot2").innerHTML = `Grade: E`;
    } else {
        // Display an error message if the percentage is out of range
        document.getElementById("spot2").innerHTML = `ERROR`;
    }
}
