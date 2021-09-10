// add, commit, push 해주기!!!
let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim();

let N = Number(input);
let arr = [];

for (let i = 1; i < N; i++) {
  let answer = i;
  for (let j = 0; j < String(i).length; j++) {
    answer += Number(String(i)[j]);
  }

  if (answer === N) {
    arr.push(i);
    // console.log(i);
    console.log(arr[0]);
    break;
  }
}

if (arr.length === 0) {
  console.log(0);
}
