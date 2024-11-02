"use strict"
const $ = selector => document.querySelector(selector);

// Entry function to set and validate the user input
function processEntry() {

  // Sets the user entry to the value of the #cents input
  const userEntry = parseInt($("#cents").value, 10);

  // Check if the user entry is a number between 0 and 99
  if (!isNaN(userEntry) && userEntry >= 0 && userEntry <= 99) {
    // If it is, run the makeChange function
    makeChange(userEntry);
  } else {
    // If not, display an alert
    alert("Please enter a number between 0 and 99.");
  }
}

// Function to calculate quarters, dimes, nickels, and pennies
function makeChange(cents) {
  const quarters = Math.floor(cents / 25);
  cents %= 25;

  const dimes = Math.floor(cents / 10);
  cents %= 10;

  const nickels = Math.floor(cents / 5);
  const pennies = cents % 5;

  // Display results in the corresponding text boxes
  $("#quarters").value = quarters;
  $("#dimes").value = dimes;
  $("#nickels").value = nickels;
  $("#pennies").value = pennies;
}

// Attach the event handler when DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  $("#calculate").addEventListener("click", processEntry);
});
