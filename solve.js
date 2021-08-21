// 문제 풀고 나서 add, commit 해주기
const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().toUpperCase();

let arr = [];

arr.push(input[0]);

for (let i = 1; i < input.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    // input[i] 가 arr에 들어있는지 확인!!
    if (arr.indexOf(input[i]) == -1) {
      arr.push(input[i]);
    }
  }
}

let newArr = [];

for (let i = 0; i < arr.length; i++) {
  let count = 0;

  for (let j = 0; j < input.length; j++) {
    if (arr[i] == input[j]) {
      count++;
    }
  }

  newArr.push(count);
}

let max = newArr[0];

for (let i = 0; i < newArr.length; i++) {
  if (max < newArr[i]) {
    max = newArr[i];
  }
}

let countMax = 0;

for (let i = 0; i < newArr.length; i++) {
  if (max == newArr[i]) {
    countMax++;
  }
}

if (countMax > 1) {
  // 최댓값이 겹치는 경우
  console.log("?");
} else if (countMax == 1) {
  // 최댓값이 하나인 경우
  console.log(arr[newArr.indexOf(max)]);
}
