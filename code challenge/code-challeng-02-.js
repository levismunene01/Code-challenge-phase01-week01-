//Write a program that takes as input the speed of a car e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

// Importing the 'readline' module
const readline = require('readline');

// Creating an interface for reading from standard input
const rl = readline.createInterface({
    input: process.stdin,  
    output: process.stdout 
});

// Function to calculate demerit points based on speed
function calculateDemeritPoints(speed) {
    const speedLimit = 70; 
    const kmPerPoint = 5; 

    // Check if speed is within limit
    if (speed <= speedLimit) {
        console.log("Ok"); 
    } else {
        // Calculate demerit points for exceeding the speed limit
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerPoint);
        

        // Check if demerit points exceed 12
        if (demeritPoints > 12) {
            // Print "License suspended" if demerit points exceed 12
            console.log("License suspended"); 
        } else {
            // Print demerit points if below or equal to 12
            console.log("Points:", demeritPoints); 
        }
    }
}

// Prompt the user to enter the speed of the car
rl.question("Enter the speed of the car: ", (speed) => {
    calculateDemeritPoints(parseFloat(speed)); 
    rl.close(); ce
});
