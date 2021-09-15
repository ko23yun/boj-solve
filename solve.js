// add, commit, push 해주기!!!
let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

// x1, y1, r1, x2, y2, r2
// 3
// 0 0 13 40 0 37
// 0 0 3 0 7 4
// 1 1 1 1 1 5
let T = input.shift();
input = input.map((xy) => xy.split(" ").map((v) => +v));

// 겹치는 부분 1 => 2가지 경우
// 겹치는 부분 2 => 1가지 경우
// 겹치는 부분 무한대 => 1가지 경우

for (let i = 0; i < T; i++) {
  let [x1, y1, r1, x2, y2, r2] = input[i];

  // 두 점 사이의 거리
  let d = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
  let rSum = r1 + r2;
  let rSub = Math.sqrt(Math.pow(r1 - r2, 2));

  // 1. 원이 두 점에서 만나는 경우 (두 점)(r2 - r1 < d < r1 + r2)
  if (d < rSum && d > rSub) {
    console.log(2);
    // 2. 두 원이 외접하는 경우 (한 점)( d = r1 + r2)
    // 3. 두 원이 내접하는 경우 (한 점)( d = r2 - r1 && d != 0)
  } else if (d === rSum || (d === rSub && d !== 0)) {
    console.log(1);
    // 4. 하나의 원이 다른 원을 포함하는 경우 (못 만남)( d < r2 - r1 )
    // 5. 두 원이 멀리 떨어져 만나지 않는 경우 (못 만남)( d > r1 + r2 )
  } else if (d < rSub || d > rSum) {
    console.log(0);
    // 6. 두 원이 일치하는 경우 (무수히)( d = 0, r1 = r2 )
  } else if (d === 0) {
    if (r1 === r2) {
      console.log(-1);
    } else {
      console.log(0);
    }
  }
}
