const prompt = require("prompt-sync")({ sigint: true });

// find out the player's position status from the jersey number he wears
console.log("----------------------------------------------------------------");
console.log(
  "find out the player's position status from the jersey number he wears"
);
console.log("----------------------------------------------------------------");

let jersey_number = Number(prompt("Input Number Jersey: "));

if (jersey_number % 3 === 0 && jersey_number % 5 === 0) {
  console.log(`Jersey Number with ${jersey_number} is a Keeper`);
} else if (
  jersey_number % 2 === 0 &&
  jersey_number >= 50 &&
  jersey_number <= 100
) {
  console.log(`Jersey Number with ${jersey_number} is a Team captain`);
} else if (jersey_number % 2 === 0) {
  console.log(`Jersey Number with ${jersey_number} is a Target attacker`);
} else if (jersey_number % 2 === 1 && jersey_number >= 90) {
  console.log(`Jersey Number with ${jersey_number} is a Playmaker`);
} else if (jersey_number % 2 === 1) {
  console.log(`Jersey Number with ${jersey_number} is a Defender`);
}
