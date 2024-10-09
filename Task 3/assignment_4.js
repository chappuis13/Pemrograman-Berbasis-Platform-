const prompt = require("prompt-sync")({ sigint: true });

// program to display a prime number output after a certain number
console.log("----------------------------------------------------------------");
console.log("program to display a prime number output after a certain number");
console.log("----------------------------------------------------------------");

let prime_number = Number(prompt("input prime number: "));
let next_prime_number = prime_number + 1;
let factor = 0;
let next_prime_not_found = true;
for (let i = 1; i <= prime_number; i++) {
  if (prime_number % i === 0) {
    factor++;
  }
}

if (factor === 2) {
  while (next_prime_not_found) {
    let factor = 0;
    for (let i = 1; i <= next_prime_number; i++) {
      if (next_prime_number % i === 0) {
        factor++;
      }
    }
    if (factor === 2) {
      next_prime_not_found = false;
      console.log(
        `The next prime number after ${prime_number} is ${next_prime_number}`
      );
    } else {
      next_prime_number++;
    }
  }
} else {
  console.log("Not a prime number");
}
