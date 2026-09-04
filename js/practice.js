// Grading System
let marks = 20;

if (marks > 100 && marks < 0) {
  console.log("Something is wrong📉🚫!!!");
} else if (marks < 33) {
  console.log("You are a failure!!!😞");
} else if (marks >= 33 && marks < 40) {
  console.log("You got a D");
} else if (marks >= 40 && marks < 50) {
  console.log("You got a C");
} else if (marks >= 50 && marks < 60) {
  console.log("You got a B");
} else if (marks >= 60 && marks < 70) {
  console.log("You got an A-");
} else if (marks >= 80 && marks <= 100) {
  console.log("You got an A+!!🎉");
}

// Matrimonial Site
let age = 25;
let place = "Dhaka";
let salary = "10000$";
let gender = "male";

if (age <= 30) {
  if (place == "Dhaka") {
    if (salary >= "10000$") {
      console.log("You are chosen for marriage🤵🏻");
    } else {
      console.log("You need more money to get married💵");
    }
  } else {
    console.log("We want someone from Dhaka.");
  }
} else {
  console.log("You are too old👴🏻");
}

// Matrimonial Women part
let gender1 = "Female";
let trait = "Patience";

if (trait == "Patience" && gender1 == "Female") {
  console.log(
    "Error 404: Patience in women has never been found in human history. 🤦‍♂️ 💀 ⚰️ *Man died waiting*",
  );
}
