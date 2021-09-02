// 문제 풀고 나서 add, commit 해주기
const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .split("\n")
  .map((v) => +v);

let minPrime = 0;
let countPrime = 0;

function addPrimeNumbes(n) {
  if (n < 2) {
    return;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return;
    }
  }

  if (minPrime === 0) {
    minPrime = n;
  }

  countPrime += n;
}

for (let i = input[0]; i <= input[1]; i++) {
  addPrimeNumbes(i);
}

let answer = countPrime + "\n" + minPrime;

console.log(minPrime !== 0 ? answer : -1);
