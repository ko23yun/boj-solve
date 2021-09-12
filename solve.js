// add, commit, push 해주기!!!
let fs = require("fs");
let input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);

let N = input.shift();

// 산술평균 : N개의 수들의 합을 N으로 나눈 값
// 중앙값 : N개의 수들을 증가하는 순서로 나열했을 경우 그 중앙에 위치하는 값
// 최빈값 : N개의 수들 중 가장 많이 나타나는 값
// 범위 : N개의 수들 중 최댓값과 최솟값의 차이

let result = [];

function stat(arr) {
  // 산술평균
  let sum = 0;
  for (let i = 0; i < N; i++) {
    sum += arr[i] / N;
  }
  result.push(Math.round(sum));
  // 중앙값
  let centerArr = input;
  centerArr.sort((a, b) => a - b);
  result.push(centerArr[Math.floor(N / 2)]);
  // 최빈값
  // 셋째 줄에는 최빈값을 출력한다. 여러 개 있을 때에는 최빈값 중 두 번째로 작은 값을 출력한다.
  let map = new Map();
  for (let i = 0; i < N; i++) {
    if (!map.has(input[i])) {
      map.set(input[i], 1);
    } else {
      map.set(input[i], map.get(input[i]) + 1);
    }
  }
  console.log(map.entries());
  // 범위
  result.push(input[input.length - 1] - input[0]);
}

stat(input);

console.log(result);
