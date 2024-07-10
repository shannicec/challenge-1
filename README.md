# challenge-1

# Speed Monitor Function
This function speedMonitor is designed to monitor the speed of a vehicle and determine if penalties apply based on exceeding the speed limit.

Usage
Prompt for Input: When called, the function prompts the user to enter their current speed.

Validation: It validates the input to ensure it is a number greater than zero.

Speed Limit Check: If the speed entered is within the speed limit of 70 km/h, it outputs "Your speed is within the speed limit."

Excess Speed Calculation: If the speed exceeds the limit, it calculates how much the speed is over the limit and determines penalty points based on every 5 km/h over.

License Suspension: If the calculated penalty points reach or exceed 12, it warns that "Your license will be suspended due to excessive penalty points."

Notes
Ensure that the input provided is a valid number greater than zero.
The function uses parseInt to convert input to a number.
Adjust speedLimit and kmPerPoint constants as per local regulations if different from defaults.
Running in a browser console or a Node.js environment with appropriate user input handling is recommended.

# Grade Calculator Function
This function calculateGrade is designed to calculate and display a grade based on the marks entered by a student.

Usage
Prompt for Input: When called, the function prompts the user to enter their marks.

Validation: It validates the input to ensure it is a number between 0 and 100.

Grade Determination:

If the marks are above 79, it prints "Grade A".
If the marks are between 60 and 79 (inclusive), it prints "Grade B".
If the marks are between 50 and 59 (inclusive), it prints "Grade C".
If the marks are between 40 and 49 (inclusive), it prints "Grade D".
If the marks are 40 or below, it prints "Grade E".
Notes
Ensure that the input provided is a valid number between 0 and 100.
The function uses parseInt to convert input to a number.
Adjust the grade boundaries (> 79, >= 60 && <= 79, etc.) as per your grading scale if different from the example.
Running in a browser console or a Node.js environment with appropriate user input handling is recommended.

# Net Salary Calculator
This JavaScript program calculates the net salary after deducting taxes (PAYE), NHIF, and NSSF contributions based on user input. The program prompts the user for monthly salary, benefits, and year of taxation/payment, then computes the deductions accordingly.

Features:
Tax Calculation: Supports different tax rates and thresholds for years >= 2023 and < 2023.
NHIF Deduction: Calculates NHIF deduction based on specified benefits.
NSSF Contribution: Computes NSSF contribution based on monthly salary and year of payment.
Usage:
Input: Enter monthly salary, benefits amount, and year of taxation/payment when prompted.
Output: Displays calculated monthly or yearly PAYE tax, NHIF deduction, and NSSF contribution.
Notes:
Ensure all inputs are numeric values greater than zero.
Follow the prompts carefully to select the correct taxation period (monthly/yearly) and provide accurate information.