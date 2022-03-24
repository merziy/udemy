let random = Math.random();

if (random < 0.5) {
  console.log("Your number is less than 0.5");
  console.log(random);
}

if (random <= 0.5) {
  console.log("Your number is greater than 0.5");
  console.log(random);
}

/* Control-flow Statements */
/* Else ifs */

const dayOfWeek = prompt("Please enter a day:").toLowerCase;

if (dayOfWeek === "monday") {
  console.log("It is a monday.");
} else if (dayOfWeek === "saturday") {
  console.log("It is a Saturday.");
} else if (dayOfWeek === "sunday") {
  console.log("It is a Sunday.");
} else {
  console.log("It is a different day.");
}

const age = 8;

if (age < 5) {
  console.log("You are a baby. You get in for free");
} else if (age < 10) {
  console.log("You are a child. You get in for $10");
} else if (age < 65) {
  console.log("You are an adult. You get in for $20");
} else if (age >= 65) {
  console.log("You are a senior. You get in for $10");
}

/* Nesting Conditionals */

const password = prompt("Please enter a new password.");
// Checking if password has 6+ characters
if (password.length >= 6) {
  // Checking if password has no spaces
  if (password.indexOf(" ") === -1) {
    console.log("Valid password.");
  } else {
    console.log("Password cannot contain spaces.");
  }
} else {
  console.log("Your password must be at least six characters.");
}

/** Logical Comparison Operators */
const password2 = prompt("Please enter a new password.");
if (password2.length >= 6 && password2.indexOf(" ") === -1) {
  console.log("Valid password.");
} else {
  console.log(
    "Your password must be at least six characters and not contain any spaces."
  );
}

const age2 = 50;

if ((age2 >= 0 && age2 < 5) || age2 >= 65) {
  console.log("You get in for free");
} else if (age2 >= 5 && age2 < 10) {
  console.log("You get in for $10");
} else if (age2 >= 10 && age2 < 65) {
  console.log("You get in for $20");
} else {
  console.log("Invalid age.");
}

const firstName = prompt("Enter your first name:");

if (!firstName) {
  prompt("Please enter your first name:");
}

/* Switch Statements */
const day = 2;

switch (day) {
  case 1:
    console.log("Monday.");
    break;
  case 2:
    console.log("Tuesday.");
    break;
  case 3:
    console.log("Wednesday.");
    break;
  case 4:
    console.log("Thursday.");
    break;
  case 5:
    console.log("Friday.");
    break;
  case 6:
    console.log("Saturday.");
    break;
  case 7:
    console.log("Sunday.");
    break;
  default:
    console.log("Invalid input!");
    break;
}
