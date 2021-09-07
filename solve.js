// add, commit, push 해주기!!!
let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim();

let N = Number(input);

function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(N));
