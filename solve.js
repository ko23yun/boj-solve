// add, commit, push 해주기!!!
let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

let black = [
  "B",
  "W",
  "B",
  "W",
  "B",
  "W",
  "B",
  "W",
  "W",
  "B",
  "W",
  "B",
  "W",
  "B",
  "W",
  "B",
  "B",
  "W",
  "B",
  "W",
  "B",
  "W",
  "B",
  "W",
  "W",
  "B",
  "W",
  "B",
  "W",
  "B",
  "W",
  "B",
  "B",
  "W",
  "B",
  "W",
  "B",
  "W",
  "B",
  "W",
  "W",
  "B",
  "W",
  "B",
  "W",
  "B",
  "W",
  "B",
  "B",
  "W",
  "B",
  "W",
  "B",
  "W",
  "B",
  "W",
  "W",
  "B",
  "W",
  "B",
  "W",
  "B",
  "W",
  "B",
];

let white = [
  "W",
  "B",
  "W",
  "B",
  "W",
  "B",
  "W",
  "B",
  "B",
  "W",
  "B",
  "W",
  "B",
  "W",
  "B",
  "W",
  "W",
  "B",
  "W",
  "B",
  "W",
  "B",
  "W",
  "B",
  "B",
  "W",
  "B",
  "W",
  "B",
  "W",
  "B",
  "W",
  "W",
  "B",
  "W",
  "B",
  "W",
  "B",
  "W",
  "B",
  "B",
  "W",
  "B",
  "W",
  "B",
  "W",
  "B",
  "W",
  "W",
  "B",
  "W",
  "B",
  "W",
  "B",
  "W",
  "B",
  "B",
  "W",
  "B",
  "W",
  "B",
  "W",
  "B",
  "W",
];

let NM = input.shift().split(" ");
let N = Number(NM.shift());
let M = Number(NM.shift());
let chess = input.map((word) => word.split(""));

let countArr = [];

for (let i = 0; i < N - 7; i++) {
  for (let j = 0; j < M - 7; j++) {
    let chessEight = [];
    for (let k = 0; k < 8; k++) {
      for (let l = 0; l < 8; l++) {
        chessEight.push(chess[k + i][l + j]);
      }
    }
    // 여기서 확인
    let count = 0;
    if (chessEight[0] === "B") {
      for (let m = 0; m < 64; m++) {
        if (chessEight[m] !== black[m]) {
          count++;
        }
      }
    } else {
      for (let m = 0; m < 64; m++) {
        if (chessEight[m] !== white[m]) {
          count++;
        }
      }
    }
    countArr.push(count);
  }
}

countArr.sort((a, b) => a - b);
console.log(countArr[0]);
