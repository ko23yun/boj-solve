// add, commit, push 해주기!!!
let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

let black = [
  ["B", "W", "B", "W", "B", "W", "B", "W"],
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
  ["W", "B", "W", "B", "W", "B", "W", "B"],
];

let white = [
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
];

let NM = input.shift().split(" ");
let N = Number(NM.shift());
let M = Number(NM.shift());
let chess = input.map((word) => word.split(""));

for (let i = 0; i < N - 7; i++) {
  for (let j = 0; j < M - 7; j++) {
    for (let k = 0; k < N - 2; k++) {
      let chessEight = [];
      for (let l = 0; l < M - 5; l++) {
        chessEight.push(chess[k + i][l + j]);
      }
      // 여기서 배열을 확인
      // 0번 교체면 바로 출력
      // 교체가 필요한 수는 배열에 입력 후 최솟값 출력!
    }
  }
}

for (let i = 0; i < N - 2; i++) {
  let chessEight = [];
  for (let j = 0; j < M - 5; j++) {
    chessEight.push(chess[i + 2][j + 5]);
  }
  console.log(chessEight);
}

// console.log로 바로 출력하지 말고 배열에 넣고 출력해보자
// 그리고 가로로 움직이고 세로로 움직이도록 만들어야한다.
// -> i + (0~2 정도 더하도록!!)
// 그리고 W, B 확인 후 출력 0이면 바로 출력하면 된다.
