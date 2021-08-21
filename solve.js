// 문제 풀고 나서 add, commit 해주기
// https://velog.io/@exploit017/%EB%B0%B1%EC%A4%80Node.js-1316%EB%B2%88-%EA%B7%B8%EB%A3%B9-%EB%8B%A8%EC%96%B4-%EC%B2%B4%EC%BB%A4 참고...
const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split("\n");

let N = Number(input[0]);
let countGroupWord = 0;

for (let i = 1; i <= N; i++) {
  const word = input[i];
  const letter = [];
  let isGroupWord = true;

  for (let j = 0; j < input[i]; j++) {
    if (letter.indexOf(word[j]) === -1) {
      letter.push(word[j]);
    } else {
      if (letter.indexOf(word[j]) !== letter.length - 1) {
        isGroupWord = false;
        break;
      }
    }
  }

  if (isGroupWord) {
    countGroupWord += 1;
  }
}

console.log(countGroupWord);
