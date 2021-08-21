// 문제 풀고 나서 add, commit 해주기
const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split("\n");

// 5번 동안 각 케이스의 평균을 구한다.
// 평균이 넘는 학생의 비율을 반올림해서 소수점 셋째 자리까지 출력

let C = Number(input[0]);
let sumArr = [];

for (let i = 1; i <= C; i++) {
  // 일단 각 케이스 배열로 만들기
  let arr = input[i].split(" ").map((v) => +v);

  let sum = 0;
  let account = 0;

  for (let i = 1; i < arr.length; i++) {
    sum += arr[i];
  }

  for (let i = 1; i < arr.length; i++) {
    if (sum / arr[0] < arr[i]) {
      account++;
    }
  }

  let per = (account / arr[0]) * 100;

  console.log(`${per.toFixed(3)}%`);
}
