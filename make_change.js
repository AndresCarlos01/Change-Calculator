"use strict";

const $ = (selector) => document.querySelector(selector);

// function for processEntry *handles user input*
function processEntry() {
  const cents = $("#cents").value;

  if (isValidInput(cents)) {
    // calling for makeChange function
    makeChange(parseInt(cents));
  } else {
    alert("Please enter a valid number of cents between 0 and 99.");
  }
}

// makeChange function *calculates the change*
function makeChange(cents) {
  // Calculates the number of quarters, dimes, nickels, and pennies needed to make change
  const quarters = Math.floor(cents / 25);
  cents %= 25;
  const dimes = Math.floor(cents / 10);
  cents %= 10;
  const nickels = Math.floor(cents / 5);
  const pennies = cents % 5;

  // Updates the input fields
  $("#quarters").value = quarters;
  $("#dimes").value = dimes;
  $("#nickels").value = nickels;
  $("#pennies").value = pennies;
}

// Function that Validates user input valid
function isValidInput(input) {
  const parsedInt = parseInt(input);
  return !isNaN(parsedInt) && parsedInt >= 0 && parsedInt <= 99;
}

//Adding event handler to the calculate button
document.addEventListener("DOMContentLoaded", () => {
  $("#calculate").addEventListener("click", processEntry);
});
