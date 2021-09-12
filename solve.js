// add, commit, push 해주기!!!
let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

let N = Number(input.shift());
let map = new Map();
let newArr = [];

for (let i = 0; i < N; i++) {
  if (!map.has(input[i])) {
    map.set(input[i], input[i].length);
  }
}

for (let entry of map) {
  newArr.push(entry);
}

// 각 단어 길이로 정렬 후 사전 순으로 계산
newArr.sort().sort((a, b) => {
  if (a[1] !== b[1]) {
    return a[1] - b[1];
  }
});

for (let i = 0; i < newArr.length; i++) {
  console.log(newArr[i][0]);
}
