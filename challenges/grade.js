function calculateGrade() {
    // Prompt student for marks
    const marksInput = prompt("Enter your marks");

    // Check if user entered a value and convert it to a number
    const studentMarks = parseInt(marksInput);

    if (studentMarks === null || marksInput.trim() === "") {
        alert("Please enter a valid value for marks");
        return;
    } else if (studentMarks < 0 || studentMarks > 100) {
        alert("Please enter a value between 0 and 100");
        return;
    }

    // Determine grade based on the input marks
    if (studentMarks > 79) {
        console.log("Grade A");
    } else if (studentMarks >= 60 && studentMarks <= 79) {
        console.log("Grade B");
    } else if (studentMarks >= 50 && studentMarks <= 59) {
        console.log("Grade C");
    } else if (studentMarks >= 40 && studentMarks <= 49) {
        console.log("Grade D");
    } else {
        console.log("Grade E");
    }
}
