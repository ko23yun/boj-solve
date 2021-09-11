// add, commit, push 해주기!!!
let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

let N = Number(input[0].split(" ")[0]);
let M = Number(input[0].split(" ")[1]);

input.shift();

let chess = input.map((BW) => BW.split(""));
let firstStat = chess[0][0];
let chessArr = [];

// console.log(N, M, chess, firstStat);

for (let i = 0; i <= M - 7; i++) {
  for (let j = 0; j <= M - 7; j++) {
    chessArr.push(chess[j].slice(0, 8));
  }
}

console.log(chessArr);
