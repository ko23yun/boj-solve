// 문제 풀고 나서 add, commit 해주기
const { KeyObject } = require("crypto");
const fs = require("fs");
let input = fs
  .readFileSync("./input.txt")
  .toString()
  .split("\n")
  .map((v) => +v);

for (let i = 0; i < input[0]; i++) {
  let arr = [];

  let k = input[2 * i + 1]; // 1, 2
  let n = input[2 * i + 2]; // 3, 3

  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }

  console.log(arr);
}

// 1층 3호 구하는 방법
// 1번 : [1, 2, 3] => 합

// 4층 3호 구하는 방법
// 1번 : [1, 2, 3]
// 2번 : [1, 3, 6]
// 3번 : [1, 4, 10]
// 4번 : [1, 5, 15] => 합
