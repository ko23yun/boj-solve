let fs = require("fs");
let input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);

let T = input.shift();

for (let i = 0; i < T; i++) {
  let num = input[i];
  // 일단 소수를 구해야한다.
  let isPrimeNumber = Array(num + 1).fill(true);
  isPrimeNumber[0] = isPrimeNumber[1] = false;

  for (j = 2; j <= Math.ceil(Math.sqrt(num)); j++) {
    if (isPrimeNumber[j]) {
      let m = 2;
      while (m * j <= num) {
        isPrimeNumber[m * j] = false;
        m++;
      }
    }
  }
  // 각 소수를 찾아서 num만큼의 값이 나와야 함
  let primeArr = [];

  for (let k = 2; k < num; k++) {
    if (isPrimeNumber[k]) {
      primeArr.push(k);
    }
  }

  let primeSum = [];

  for (let l = 0; l < primeArr.length; l++) {
    for (let m = 0; m < primeArr.length; m++) {
      if (primeArr[l] + primeArr[m] === num) {
        primeSum.push([
          primeArr[l],
          primeArr[m],
          Math.abs(primeArr[l] - primeArr[m]),
        ]);
      }
    }
  }

  primeSum.sort((a, b) => a[2] - b[2]);

  console.log(primeSum[0][0], primeSum[0][1]);
}
