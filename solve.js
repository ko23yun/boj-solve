// add, commit, push 해주기!!!
let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim();

let N = Number(input);
let result = "";

// (x, y)
function star(i, j, num) {
  if (i % 3 === 1 && j % 3 === 1) {
    result += " ";
  } else {
    if (num === 1) {
      result += "*";
    } else {
      star(Math.floor(i / 3), Math.floor(j / 3), Math.floor(num / 3));
    }
  }
}

function onClose() {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      star(i, j, input);
    }
    result += "\n";
  }
  console.log(result);
}

onClose();
