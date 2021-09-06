let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

input.pop();

for (let i = 0; i < input.length; i++) {
  let arr = input[i].split(" ").map((v) => +v);

  arr.sort((a, b) => a - b);

  console.log(arr[0] ** 2 + arr[1] ** 2 === arr[2] ** 2 ? "right" : "wrong");
}
