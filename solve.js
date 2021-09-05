// 문제 풀고 나서 add, commit 해주기
let fs = require("fs");
let input = fs
  .readFileSync("./input.txt")
  .toString()
  .split("\n")
  .map((v) => +v);

input.pop();

function result(num) {
  let answer = 0;

  let N = num;
  let M = num * 2;

  let isPrimeNumber = Array(M + 1).fill(true);
  isPrimeNumber[0] = isPrimeNumber[1] = false;

  for (let i = 2; i <= Math.ceil(Math.sqrt(M)); i++) {
    if (isPrimeNumber[i]) {
      let m = 2;
      while (i * m <= M) {
        isPrimeNumber[i * m] = false;
        m++;
      }
    }
  }

  for (let i = N + 1; i <= M; i++) {
    if (isPrimeNumber[i]) {
      answer++;
    }
  }

  console.log(answer);

  // answer = [];
}

// result(13);

for (let i = 0; i < input.length; i++) {
  result(input[i]);
}
