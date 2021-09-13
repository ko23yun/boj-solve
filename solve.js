// add, commit, push 해주기!!!
// Nodemon restarts the server automatically!!
// npm init 확인해보기!!
let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim();

let radius = +input;

function Euclid(radius) {
  return Math.pow(radius, 2) * Math.PI;
}

function taxi(radius) {
  return Math.pow(radius, 2) * 2;
}

console.log(Euclid(radius).toFixed(6));
console.log(taxi(radius).toFixed(6));
