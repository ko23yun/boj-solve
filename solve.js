// 문제 풀고 나서 add, commit 해주기
const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .split("\n")
  .map((v) => +v);

// 함수를 2개 만들어야 하나??

let count = 0;

function checkPrime(number) {
  if (number < 2) {
    return;
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return;
    }
  }
  count++;
}

function primeNumber(n) {
  for (let i = n; i <= n * 2; i++) {
    checkPrime(i);
  }

  console.log(count);
  count = 0;
}

// primeNumber(13);

for (let i = 0; i < input.length - 1; i++) {
  primeNumber(input[i]);
}
