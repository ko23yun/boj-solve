let fs = require("fs");
let input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

let [x, y, w, h] = input;
let distance = [];

distance.push(w - x, x, h - y, y);

distance.sort((a, b) => {
  return a - b;
});

console.log(distance[0]);
