const prompt = require("prompt-sync")({ sigint: true });

// Detective investigating of death of a young businessman
console.log("----------------------------------------------------------------");
console.log("Detective investigating of death of a young businessman");
console.log("----------------------------------------------------------------");

let point = 0;
let powder_in_victim_stomach_in_mg = Number(
  prompt("Powder in victim stomach in mg: ")
);
let cctv_show_clearly_someone_putting_something =
  prompt("CCTV show clearly someone putting something Y/n (default: y): ") ===
  "n"
    ? false
    : true;

let cctv_show_blurredly_someone_putting_something =
  cctv_show_clearly_someone_putting_something
    ? false
    : prompt(
        "CCTV show blurred someone putting something Y/n (default: y): "
      ) === "n"
    ? false
    : true;
let there_are_two_or_more_fingerprints_in_the_glass =
  prompt(
    "There are two or more fingerprints in the glass? Y/n (default: y): "
  ) === "n"
    ? false
    : true;
let there_are_suspicius_movements =
  prompt("There ara suspicius movements Y/n (default: y)") === "n"
    ? false
    : true;
let there_was_cyanide_powder_in_the_perpetrator_pocket =
  prompt("There was a cyanide in the perpetratorpocket Y/n (default: n)") ===
  "n"
    ? false
    : true;

if (powder_in_victim_stomach_in_mg > 50) {
  point += 500;
} else if (powder_in_victim_stomach_in_mg >= 0) {
  point += 50;
}

if (cctv_show_clearly_someone_putting_something) {
  point += 250;
} else if (cctv_show_blurredly_someone_putting_something) {
  point += 150;
}

if (there_are_two_or_more_fingerprints_in_the_glass) {
  point += 50;
}

if (there_are_suspicius_movements) {
  point += 100;
}

if (there_was_cyanide_powder_in_the_perpetrator_pocket) {
  point += 750;
}

if (
  cctv_show_clearly_someone_putting_something &&
  there_are_two_or_more_fingerprints_in_the_glass
) {
  console.log("there was a murder of a businessman");
} else {
  if ((point) => 1300) {
    console.log("there was a murder of a businessman");
  } else {
    console.log("there was no murder of a businessman");
  }
}
