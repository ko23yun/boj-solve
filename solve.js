// add, commit, push 해주기!!!
let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

function solution(input) {
  [n, x] = input;
  x = x.split(" ").map((v) => +v);

  let answer = [];
  let set = Array.from(new Set([...x])).sort((a, b) => a - b);
  let object = {};

  set.forEach((item, idx) => (object[item] = idx));

  for (let i = 0; i < x.length; i++) {
    answer.push(object[x[i]]);
  }

  return answer.join(" ");
}

console.log(solution(input));
