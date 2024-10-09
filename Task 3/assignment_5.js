const prompt = require("prompt-sync")({ sigint: true });

// program to count the number of prime numbers in the range of initial input to final
console.log("----------------------------------------------------------------");
console.log(
  "program to count the number of prime numbers in the range of initial input to final"
);
console.log("----------------------------------------------------------------");

let initial_input = Number(prompt("Enter the initial input: "));
let final_input = Number(prompt("Enter the final input: "));
let count_prime_number = 0;
let prime_number_sum = "";

for (let i = initial_input; i <= final_input; i++) {
  let factor = 0;
  for (let j = 1; j <= i; j++) {
    if (i % j === 0) {
      factor++;
    }
  }
  if (factor === 2) {
    count_prime_number += i;
    if (prime_number_sum === "") {
      prime_number_sum = i;
    } else {
      prime_number_sum += " + " + i;
    }
  }
}

console.log(
  `The number of prime numbers between ${initial_input} and ${final_input} is ${count_prime_number}`
);
console.log(`${prime_number_sum} = ${count_prime_number}`);
