// 문제 풀고 나서 add, commit 해주기
const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString();

let word = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

// word 단어 있는지 전체 확인, 그리고 제거!

let count = 0;

for (let i = 0; i < word.length; i++) {
  if (input.indexOf(word[i]) > -1) {
    count++;
  }
}
