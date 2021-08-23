// 문제 풀고 나서 add, commit 해주기
const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split(" ");

let a = BigInt(input[0]);
let b = BigInt(input[1]);

let answer = a + b;

console.log(answer.toString());
