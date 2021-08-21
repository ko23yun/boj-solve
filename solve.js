// 문제 풀고 나서 add, commit 해주기
const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString();

let word = ["dz=", "c=", "c-", "d-", "lj", "nj", "s=", "z="];

// 반복문으로 "dz=" 부터 (input.length - 3) 번 만큼 찾는다.
// 그리고 나머지는 다 2번 씩

for (let i = 0; i < word.length; i++) {
  // "dz=" 는 (input.length - 2) 만큼 계산하고
  // 나머지 word는 (input.length - 1) 만큼 계산한다.
  if (word[i].length == 3) {
    for (let j = 0; j < input.length - 2; j++) {
      if (word[i] == input.substring(j, j + 3)) {
        input = input.replace(input.substring(j, j + 3), 1);
      }
    }
  } else {
    for (let k = 0; k < input.length - 1; k++) {
      if (word[i] == input.substring(k, k + 2)) {
        input = input.replace(input.substring(k, k + 2), 1);
      }
    }
  }
}

console.log(input.length);
