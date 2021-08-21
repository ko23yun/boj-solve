// 문제 풀고 나서 add, commit 해주기
const fs = require("fs");
const { isRegExp } = require("util");
let input = fs
  .readFileSync("./input.txt")
  .toString()
  .split("")
  .map((v) => v.toUpperCase());

// for loop 사용해서 indexof 로 값이 같다면 account에 추가해주기
// 출력은 반드시 대문자

let arr = [];

for (let i = 0; i < input.length; i++) {
  arr.push(input.filter((x) => input[i] === x));
}

console.log(arr);
