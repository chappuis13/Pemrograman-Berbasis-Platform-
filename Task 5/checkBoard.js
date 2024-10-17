const { checkKing, chessCheck } = require("./chessCheck");

const board = [
  ["*", "*", "*", "*", "*", "*"],
  ["*", "*", "*", "*", "*", "*"],
  ["*", "*", "R", "*", "*", "*"],
  ["*", "*", "*", "K", "*", "*"],
  ["*", "*", "*", "*", "*", "*"],
];
chessCheck(board);
const result = checkKing();
console.log(result);
