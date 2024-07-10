function calculateNetSalary() {
    // Prompt the user for input
    let salary = parseFloat(prompt("Enter monthly salary"));
    let benefits = parseFloat(prompt("Enter benefits amount"));
    let yearOfTaxation = parseInt(prompt("Enter taxation year"));

    // Validate input values
    if (isNaN(salary) || isNaN(benefits) || isNaN(yearOfTaxation) ||
        salary <= 0 || benefits <= 0 || yearOfTaxation <= 0) {
        alert("Please enter valid numeric values greater than zero.");
        return;
    }

    // Determine taxation rules based on the year of taxation
    if (yearOfTaxation >= 2023) {
        let taxPeriod = prompt("Monthly or yearly taxation?").toLowerCase();

        if (taxPeriod === "monthly") {
            calculateMonthlyPAYE2023(salary);
            calculateNHIFDeduction(benefits);
            calculateNSSFContribution();
        } else if (taxPeriod === "yearly") {
            calculateYearlyPAYE2023(salary);
            calculateNHIFDeduction(benefits);
            calculateNSSFContribution();
        } else {
            alert("Invalid input for tax period.");
            return;
        }
    } else if (yearOfTaxation >= 2022 && yearOfTaxation < 2023) {
        let taxPeriod = prompt("Monthly or yearly taxation?").toLowerCase();

        if (taxPeriod === "monthly") {
            calculateMonthlyPAYE2022(salary);
            calculateNHIFDeduction(benefits);
            calculateNSSFContribution();
        } else if (taxPeriod === "yearly") {
            calculateYearlyPAYE2022(salary);
            calculateNHIFDeduction(benefits);
            calculateNSSFContribution();
        } else {
            alert("Invalid input for tax period.");
            return;
        }
    } else {
        alert("Invalid year of taxation.");
        return;
    }
}

// Function to calculate monthly PAYE for taxation year >= 2023
function calculateMonthlyPAYE2023(salary) {
    let tax = 0;

    if (salary <= 24000) {
        tax = salary * 0.1;
    } else if (salary <= 32333) {
        tax = salary * 0.25;
    } else if (salary <= 500000) {
        tax = salary * 0.03;
    } else if (salary <= 800000) {
        tax = salary * 0.325;
    } else {
        tax = salary * 0.35;
    }

    console.log(`Monthly PAYE (Tax): ${tax}`);
}

// Function to calculate yearly PAYE for taxation year >= 2023
function calculateYearlyPAYE2023(salary) {
    let tax = 0;

    if (salary <= 288000) {
        tax = salary * 0.1;
    } else if (salary <= 388000) {
        tax = salary * 0.25;
    } else if (salary <= 6000000) {
        tax = salary * 0.03;
    } else if (salary <= 9600000) {
        tax = salary * 0.325;
    } else {
        tax = salary * 0.35;
    }

    console.log(`Yearly PAYE (Tax): ${tax}`);
}

// Function to calculate monthly PAYE for taxation year < 2023
function calculateMonthlyPAYE2022(salary) {
    let tax = 0;

    if (salary <= 24000) {
        tax = salary * 0.1;
    } else if (salary <= 32333) {
        tax = salary * 0.25;
    } else {
        tax = salary * 0.3;
    }

    console.log(`Monthly PAYE (Tax): ${tax}`);
}

// Function to calculate yearly PAYE for taxation year < 2023
function calculateYearlyPAYE2022(salary) {
    let tax = 0;

    if (salary <= 288000) {
        tax = salary * 0.1;
    } else if (salary <= 388000) {
        tax = salary * 0.25;
    } else {
        tax = salary * 0.3;
    }

    console.log(`Yearly PAYE (Tax): ${tax}`);
}

// Function to calculate NHIF deduction based on benefits
function calculateNHIFDeduction(benefits) {
    let deduction = 0;

    if (benefits <= 59999) {
        deduction = Math.min(Math.max(benefits * 0.05, 150), 1700);
    } else {
        deduction = 1700;
    }

    console.log(`NHIF deduction: ${deduction}`);
}

// Function to calculate NSSF deduction based on monthly salary and year
function calculateNSSFContribution() {
    let monthlySalary = parseFloat(prompt("Enter monthly salary"));
    let yearOfPayment = parseInt(prompt("Enter year of payment"));

    let contribution = 0;

    if (monthlySalary <= 6000 && yearOfPayment <= 2023) {
        contribution = monthlySalary * 0.06;
    } else if (monthlySalary <= 7000 && yearOfPayment >= 2024) {
        contribution = monthlySalary * 0.06;
    } else if (monthlySalary <= 36000 && yearOfPayment >= 2024) {
        contribution = monthlySalary * 0.06;
    }

    console.log(`NSSF contribution: ${contribution}`);
}
