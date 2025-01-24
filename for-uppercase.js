const str = "hello";

let result = "";
for (let i = 0; i <= str.length - 1; i++) {
  if (i % 2 === 0) {
    result += str[i].toUpperCase();
  } else {
    result += str[i];
  }
}
console.log(result);
