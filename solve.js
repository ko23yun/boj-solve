// add, commit, push 해주기!!!
let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim();

let N = Number(input);
let sixValue = [];
// 666부터 모든 수를 비교해서 2번째 666이 들어가는 수를 뽑아야하겠네

function tripleSix(n) {
  let num = String(n);

  for (let i = 0; i < num.length - 2; i++) {
    if (num[i] === "6" && num[i + 1] === "6" && num[i + 2] === "6") {
      sixValue.push(num);
    }
  }
}

let n = 666;

while (sixValue.length < N) {
  tripleSix(n);

  n++;
}

console.log(sixValue[sixValue.length - 1]);
