// 문제 풀고 나서 add, commit 해주기
let fs = require("fs");
let input = fs
  .readFileSync("./input.txt")
  .toString()
  .split(" ")
  .map((v) => +v);

let N = input[0];
let M = input[1];
let isPrimeNumber = Array(M + 1).fill(true);
isPrimeNumber[0] = isPrimeNumber[1] = false;

function result() {
  for (let i = 2; i <= Math.ceil(Math.sqrt(M)); i++) {
    if (isPrimeNumber[i]) {
      let m = 2;
      while (i * m <= M) {
        isPrimeNumber[i * m] = false;
        m++;
      }
    }
  }

  let results = [];
  for (let i = N; i < M; i++) {
    if (isPrimeNumber[i]) {
      results.push(i);
    }
  }
  console.log(results.join("\n"));
}

result();
