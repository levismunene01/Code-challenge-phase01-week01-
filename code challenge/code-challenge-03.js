//Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary. 

// Function to calculate PAYE (tax) based on basic salary
function calculatePAYE(basicSalary) {
    // Assuming fixed tax rates
    if (basicSalary <= 24000) {
        return basicSalary * 0.1; // 10%
    } else if (basicSalary <= 32333) {
        return 2400 + (basicSalary - 24000) * 0.15; 
    } else if (basicSalary <= 40385) {
        return 3993 + (basicSalary - 32333) * 0.2; 
    } else if (basicSalary <= 48333) {
        return 7993 + (basicSalary - 40385) * 0.25; 
    } else {
        return 12068 + (basicSalary - 48333) * 0.3; 
    }
}

// Function to calculate NHIF deductions based on basic salary
function calculateNHIF(basicSalary) {
    // Assuming fixed NHIF rates
    if (basicSalary <= 5999) {
        return 150;
    } else if (basicSalary <= 14999) {
        return 500;
    } else if (basicSalary <= 19999) {
        return 850;
    } else if (basicSalary <= 24999) {
        return 1200;
    } else {
        return 1700;
    }
}

// Function to calculate NSSF deductions based on basic salary
function calculateNSSF(basicSalary) {
    // Assuming fixed NSSF rates
    const employeeContribution = basicSalary * 0.06; 
    const employerContribution = basicSalary * 0.06; 
    return {
        employee: employeeContribution,
        employer: employerContribution
    };
}

// Function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
    const payee = calculatePAYE(basicSalary);
    const nhifDeductions = calculateNHIF(basicSalary);
    const nssfDeductions = calculateNSSF(basicSalary);
    const grossSalary = basicSalary + benefits;
    const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions.employee;
    return {
        payee,
        nhifDeductions,
        nssfDeductions,
        grossSalary,
        netSalary
    };
}

// Example usage
const basicSalary = 50000; // Example basic salary
const benefits = 10000; // Example benefits
const result = calculateNetSalary(basicSalary, benefits);
console.log("PAYE (Tax):", result.payee);
console.log("NHIF Deductions:", result.nhifDeductions);
console.log("NSSF Deductions (Employee):", result.nssfDeductions.employee);
console.log("NSSF Deductions (Employer):", result.nssfDeductions.employer);
console.log("Gross Salary:", result.grossSalary);
console.log("Net Salary:", result.netSalary);
