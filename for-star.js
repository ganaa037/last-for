// let n = 4;
// for (let i = 1; i <= n; i++) {
//   let stars = "";
//   for (let k = 1; k <= n; k++) {
//     stars += "*";
//   }
//   console.log(stars);
// }
// 2) hooson dorwoljn
// const n = 5;
// const c = 5;
// for (let i = 1; i <= n; i++) {
//   let stars = "";
//   for (let k = 1; k <= n; k++) {
//     if (i == 1 || i == n || k == 1 || k == c) {
//       stars += " * ";
//     } else {
//       stars += "   ";
//     }
//   }
//   console.log(stars);
// }
// 3.gurvaljin

// for (let i = 5; i >= 1; i--) {
//   let stars = "";
//   for (let j = 0; j < i - 1; j++) {
//     stars += "  ";
//   }

//   for (let k = 1; k <= 5 - i + 1; k++) {
//     stars += "  * ";
//   }
//   console.log(stars);
// }

// 4;
// for (let i = 1; i <= 5; i++) {
//   let stars = "";
//   for (let k = 1; k <= 5; k++) {
//     stars += "*";
//   }
//   console.log(stars);
// }
// 5;
for (let i = 4; i >= 0; i--) {
  let stars = "";
  for (let j = 0; j <= 4; j++) {
    stars += "";
  }
  for (let k = 0; k <= i; k++) {
    stars += "* ";
  }
  console.log(stars);
}
// 6;
// let b = "*";
// for (let i = 0; i <= 4; i++) {
//   let stars = "*";
//   for (let k = 0; k < i; k++) {
//     stars = stars + b;
//   }
//   console.log(stars);
// }

const n = 5;
const c = 5;
for (let i = 1; i <= n; i++) {
  let stars = "";
  for (let k = 1; k <= n; k++) {
    if (i == 1 || i == n || k == 1 || k == c) {
      stars += " * ";
    } else if (i == 3 && k == 3) {
      stars += " * ";
    } else {
      stars += "   ";
    }
  }
  console.log(stars);
}
// for (let i = 1; i <= 5; i++) {
//   let stars = " ";
//   for (let k = 1; k <= i; k++) {
//     stars += "*";
//   }
//   console.log(stars);
// }
// let stars = "";
// for (let i = 5; i >= 1; i--) {
//   let stars = "";
//   for (let j = 0; j < i - 1; j++) {
//     stars += "  ";
//   }
//   for (let k = 1; k <= 5 - i + 1; k++) {
//     stars += "  * ";
//   }
//   console.log(stars);
// }
