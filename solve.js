let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

let xValue = [];
let yValue = [];

for (let i = 0; i < input.length; i++) {
  xValue.push(input[i].split(" ")[0]);
  yValue.push(input[i].split(" ")[1]);
}

// xValue, yValue 안에서 가장 적게 쓰인 값만 구하면 된다.
xValue.sort((a, b) => a - b);
yValue.sort((a, b) => a - b);

// 첫번째 값과 나머지 2개의 값을 비교,, 총 3가지 경우의 수가 있음
let x = xValue[0];
if (x === xValue[1] && x !== xValue[2]) {
  x = xValue[2];
} else if (x !== xValue[1] && x === xValue[2]) {
  x = xValue[1];
} else {
  x = xValue[0];
}

let y = yValue[0];
if (y === yValue[1] && y !== yValue[2]) {
  y = yValue[2];
} else if (y !== yValue[1] && y === yValue[2]) {
  y = yValue[1];
} else {
  y = yValue[0];
}

console.log(x, y);
