let random = Math.random();

if (random < 0.5) {
  console.log("Your number is less than 0.5");
  console.log(random);
}

if (random <= 0.5) {
  console.log("Your number is greater than 0.5");
  console.log(random);
}

/* Else ifs */

const dayOfWeek = "Monday";

if (dayOfWeek === "Monday") {
  console.log("It is a monday.");
} else if (dayOfWeek === "Saturday") {
  console.log("It is a Saturday.");
} else if (dayOfWeek === "Sunday") {
  console.log("It is a Sunday.");
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
