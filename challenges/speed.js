function speedMonitor() {
    // Prompt user for speed
    const speedInput = prompt("Enter your current speed");

    // Check if user entered a value and convert it to a number
    const currentSpeed = parseInt(speedInput);
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (currentSpeed === null || speedInput.trim() === "") {
        alert("Please enter a valid speed");
        return;
    } else if (isNaN(currentSpeed) || currentSpeed < 0) {
        alert("Please enter a valid number greater than 0 for speed");
        return;
    } else if (currentSpeed <= speedLimit) {
        console.log("Your speed is within the speed limit.");
        return;
    }

    // Calculate points and check if license should be suspended
    const excessSpeed = currentSpeed - speedLimit;
    const penaltyPoints = Math.floor(excessSpeed / kmPerPoint);

    console.log("Exceeding speed limit. Penalty points: " + penaltyPoints);

    if (penaltyPoints >= 12) {
        console.log("Your license will be suspended due to excessive penalty points.");
    }
}
