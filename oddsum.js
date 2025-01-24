let sum = 0;

for (let i = 1; i <= 5; i = i + 1) {
  if (i % 2 !== 0) {
    sum = sum + i;
  }
}
console.log(sum);
