const prompt = require("prompt-sync")({ sigint: true });

// // Find Member Of Mafia
// console.log("Find Member Of Mafia");
// console.log("----------------------------------------------------------------");

let name = prompt("What Your Name: ");
let age = Number(prompt("How Old are you?: "));
let place_to_live = prompt("Where Are You place to live: ");
let savings_in_dollars = Number(
  prompt("How Much Money Do You Have in Dollar?: ")
);

if (
  (age > 40 &&
    savings_in_dollars >= 10000000 &&
    place_to_live === "New York") ||
  place_to_live === "Havana" ||
  place_to_live === "Nevada"
) {
  console.log(`${name} is likely a mafia member with Don`);
} else if (
  (age > 25 && place_to_live === "New Jersey") ||
  place_to_live === "Nevada" ||
  (place_to_live === "Manhattan" &&
    savings_in_dollars >= 1000000 &&
    savings_in_dollars <= 2000000)
) {
  console.log(`${name} is likely a mafia member with Underboss`);
} else if (
  (age > 18 && place_to_live === "California") ||
  place_to_live === "Detroit" ||
  (place_to_live === "Boston" &&
    savings_in_dollars >= 0 &&
    savings_in_dollars <= 1000000)
) {
  console.log(`${name} is likely a mafia member with Capo`);
} else {
  console.log(`${name} is not suspicious`);
}
