// add, commit, push 해주기!!!
let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim();

// input을 Number로 바꿈
input = Number(input);

function num(tri) {
  let i = 1;
  while (Math.pow(3, i) < tri) {
    i++;
  }
  return i;
}

// input의 거듭제곱근을 구함
let repeatedNum = num(input);

// 일단 N이 3일 때 출력 모습을 갖추고 그리고 재귀로 반복
// function star (n) {
//   for (let i = 0; i < )
// }

let star = "*";

for (let i = 0; i < 1; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(star);
  }
}
