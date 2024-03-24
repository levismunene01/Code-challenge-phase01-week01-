//Write a program that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade: 

// Function to calculate grade based on mark
function calculateGrade(mark) {
  if (mark > 79) {
    return "A";
  } else if (mark >= 60 && mark <= 79) {
    return "B";
  } else if (mark >= 49 && mark <= 59) {
    return "C";
  } else if (mark >= 40 && mark <= 49) {
    return "D";
  } else {
    return "E";
  }
}

// Main function to handle user input and display grade
function main() {
  while (true) {
    // Prompt user for input
    let input = prompt("Enter a mark between 0 and 100:");
    let mark = parseFloat(input);
    // Validate input
    if (!isNaN(mark) && mark >= 0 && mark <= 100) {
      // Calculate grade
      let grade = calculateGrade(mark);
      // Calculate grade range
      let lowerRange = Math.floor(mark / 10) * 10;
      let upperRange = lowerRange + 9;
      // Display result
      console.log(`The grade for ${mark} is: ${grade} (${lowerRange} to ${upperRange})`);
      break;
    } else {
      // Alert for invalid input
      alert("Invalid input! Please enter a mark between 0 and 100.");
    }
  }
}

// Call the main function to start the program
main();



 