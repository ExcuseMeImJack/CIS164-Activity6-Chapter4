"use strict";
const $ = selector => document.querySelector(selector);

// Entry function to set and validate the user input
function processEntry() {

	// Sets the user entry to the value of the #cents input
	const userEntry = parseInt($("#income").value);

	// Check if the user entry is a number over 0
	if (!isNaN(userEntry) && userEntry > 0) {
		// If it is, run the makeChange function
		calculateTax(userEntry);
	} else {
		// If not, display an alert
		alert("Please enter a number over 0.")
	}
}

// Function to calculate income tax
function calculateTax(income) {
	let tax;

	// Check the income against the tax brackets
	if (income <= 9875) {
		tax = income * 0.10;
	} else if (income <= 40125) {
		tax = 987.50 + (income - 9875) * 0.12;
	} else if (income <= 85525) {
		tax = 4617.50 + (income - 40125) * 0.22;
	} else if (income <= 163300) {
		tax = 14605.50 + (income - 85525) * 0.24;
	} else if (income <= 207350) {
		tax = 33271.50 + (income - 163300) * 0.32;
	} else if (income <= 518400) {
		tax = 47367.50 + (income - 207350) * 0.35;
	} else {
		tax = 156235.00 + (income - 518400) * 0.37;
	}

	// Display the result in the #tax text box
	$("#tax").value = (Math.round(tax * 100) / 100).toFixed(2);
}

// Attach the event handler when DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
	$("#calculate").addEventListener("click", processEntry);
});
