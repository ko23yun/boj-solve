// add, commit, push 해주기!!!
let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

let black = [
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
];

let white = [
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
];

let NM = input.shift().split(" ");
let N = Number(NM.shift());
let M = Number(NM.shift());
let chess = input.map((word) => word.split(""));

let countArr = [];

// 배열을 [8개] ~ [8개] 이런식으로 만들어서 비교해보자

for (let i = 0; i < N - 7; i++) {
  for (let j = 0; j < M - 7; j++) {
    let chessEight = [];
    for (let k = 0; k < 8; k++) {
      let line = "";
      for (let l = 0; l < 8; l++) {
        line += chess[k + i][l + j];
      }
      chessEight.push(line);
    }
    // 여기서 확인
    // 210927 각 배열 비교 및 확인하기
    let count = 0;
    if (chessEight[0][0] === "B") {
      // for (let m = 0; m < 64; m++) {
      //   if (chessEight[m] !== black[m]) {
      //     count++;
      //   }
      // }
    } else {
      // for (let m = 0; m < 64; m++) {
      //   if (chessEight[m] !== white[m]) {
      //     count++;
      //   }
      // }
    }
    countArr.push(count);
  }
}

// countArr.sort((a, b) => a - b);
// console.log(countArr[0]);
