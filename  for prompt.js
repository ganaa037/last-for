let sum = 1;
const x = prompt("PL");
const n = prompt("please");

for (let i = 1; i <= n; i = i + 1) {
  if (n % x == 0) {
    sum = sum * i;
  }
}
console.log(sum);
alert(sum);

// / let sum = 1;
// const n = prompt("please");
// const x = prompt("PL");

// for (let i = 1; i <= n; i = i + 1) {
//   if (n % x == 0) {
//     sum = sum * i;
//   }
// }
// console.log(sum);
// alert(sum);
