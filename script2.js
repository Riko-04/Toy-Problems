// Function to detect speeding and calculate demerit points
function detectSpeed() {
    // Constants for speed limit, km per demerit point, and demerit points threshold
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const demeritPointsThreshold = 12;
    
    // Get the input speed value from the input field
    const speedInput = document.getElementById("speedInput").value;
    
    // Convert the input speed to a number
    const speed = parseInt(speedInput, 10);
    
    // Check if the speed is within the limit
    if (speed <= speedLimit) {
      // If within limit, display "Ok"
      document.getElementById("result").innerText = "Ok";
    } else {
      // Calculate excess speed and demerit points
      const excessSpeed = speed - speedLimit;
      const demeritPoints = Math.floor(excessSpeed / kmPerDemeritPoint);
      
      // Check if demerit points exceed the threshold for license suspension
      if (demeritPoints >= demeritPointsThreshold) {
        // If exceeding threshold, display "License suspended"
        document.getElementById("result").innerText = "License suspended";
      } else {
        // If demerit points are within threshold, display the number of points
        document.getElementById("result").innerText = "Points: " + demeritPoints;
      }
    }
}
