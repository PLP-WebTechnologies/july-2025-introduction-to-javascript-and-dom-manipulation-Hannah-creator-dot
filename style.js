// ===========================
// Part 1: Basics
// ===========================
let age = 20;
let userName = "Hannah";
let isStudent = true;

// Conditional check
if (age >= 18) {
  document.getElementById("part1-output").innerText = `${userName} is an adult.`;
} else {
  document.getElementById("part1-output").innerText = `${userName} is a minor.`;
}

// ===========================
// Part 2: Functions
// ===========================

// Function to calculate total price
function calculateTotal(price, quantity) {
  return price * quantity;
}

function showTotal() {
  let total = calculateTotal(100, 3); // Example: 100 * 3
  document.getElementById("total-output").innerText = `Total is: $${total}`;
}

// Another reusable function (string formatting)
function greetUser(name) {
  return `Welcome, ${name}!`;
}
console.log(greetUser("Hannah")); // logs in console

// ===========================
// Part 3: Loops
// ===========================

// Loop Example 1: Countdown
function showCountdown() {
  let countdown = "";
  for (let i = 5; i >= 1; i--) {
    countdown += i + " ";
  }
  document.getElementById("countdown-output").innerText = countdown;
}

// Loop Example 2: Iterate through array
let fruits = ["Apple", "Banana", "Cherry"];
fruits.forEach(fruit => {
  console.log("Fruit:", fruit);
});

// ===========================
// Part 4: DOM Manipulation
// ===========================

// Toggle message visibility
let toggleBtn = document.getElementById("toggleBtn");
toggleBtn.addEventListener("click", () => {
  let message = document.getElementById("message");
  if (message.style.display === "none") {
    message.style.display = "block";
  } else {
    message.style.display = "none";
  }
});

// Add new items dynamically
let addItemBtn = document.getElementById("addItemBtn");
addItemBtn.addEventListener("click", () => {
  let li = document.createElement("li");
  li.textContent = "New Item " + (document.querySelectorAll("#itemList li").length + 1);
  document.getElementById("itemList").appendChild(li);
});

// Change text dynamically
document.getElementById("message").addEventListener("mouseover", () => {
  document.getElementById("message").innerText = "You hovered over me!";
});
