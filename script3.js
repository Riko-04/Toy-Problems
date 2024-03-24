// Function to calculate net salary based on basic salary and benefits
function calculateNetSalary() {
    // Retrieve basic salary and benefits from input fields and convert them to floating-point numbers
    const basicSalary = parseFloat(document.getElementById("basicSalary").value);
    const benefits = parseFloat(document.getElementById("benefits").value);

    // Define tax rates based on basic salary ranges
    let taxRate;
    if (basicSalary <= 24000) {
        taxRate = 0.1;
    } else if (basicSalary <= 32333) {
        taxRate = 0.25;
    } else if (basicSalary <= 500000) {
        taxRate = 0.3;
    } else if (basicSalary <= 800000) {
        taxRate = 0.325;
    } else {
        taxRate = 0.35;
    }

    // Calculate payee (tax), NHIF deductions, and NSSF deductions
    const payee = basicSalary * taxRate;
    const NHIFDeductions = 0.05 * basicSalary; // 5% NHIF deduction
    const NSSFDeductions = 0.06 * basicSalary; // 6% NSSF deduction

    // Calculate gross salary
    const grossSalary = basicSalary + benefits;

    // Calculate net salary
    const netSalary = grossSalary - (payee + NHIFDeductions + NSSFDeductions);
    
    // Format numbers as currency in Kenyan Shillings (KES)
    const currencyFormatter = new Intl.NumberFormat('en-KE', {
        style: 'currency',
        currency: 'KES'
    });

    // Display the results in HTML
    const resultsDiv = document.getElementById("results");
    resultsDiv.style.display = "block";
    resultsDiv.innerHTML = `
        <h3>Salary Details</h3>
        <p>Payee: ${payee.toFixed(2)}</p>
        <p>NHIF Deductions: ${NHIFDeductions.toFixed(2)}</p>
        <p>NSSF Deductions: ${NSSFDeductions.toFixed(2)}</p>
        <p>Gross Salary: ${grossSalary.toFixed(2)}</p>
        <p>Net Salary: ${netSalary.toFixed(2)}</p>
    `;
}

calculateNetSalary(); // Call the function initially to display default values
