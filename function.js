// function countChar(text, char) {
//   let count = 0;
//   for (i = 0; i < text.length; i++) {
//     if (text[i] == char) {
//       count = count + 1;
//     }
//   }
//   console.log(count);
//   return count;
// }
// countChar("Hello wordl", "h");

// countChar("badral", "b");
// countChar("batmend", "b");
// const count = countChar("batmend", "b");

//  2. Count Occurrences of a Character
//    function countChar(str, char) {

//     let count = 0;
//     for (let i = 0; i < str.length; i++) {

//         if(str[i] == char) {
//             count++
//         }
//     }
//     return count

//    }

//    console.log(countChar("Hello World", "H")); // 3
//  3. Reverse Each Word
// function reverseEachWord(sentence) {
//   let array = sentence.split(" ");
//   for (let i = 0; i < array.length; i++) {
//     let reverse = "";
//     let str = array[i];
//     for (let k = str.length - 1; k >= 0; k--) {
//       reverse += str[k];
//     }
//     array[i] = reverse;
//   }
//   console.log(array);

//   // array to string
//   // return array.join("");
// }

// console.log(reverseEachWord("hello world")); // olleh dlrow
//  4. Split a String into Chunks
// function chunkString(str, limit) {
//     let size = "";
//     let array = [];
//     for (let i = 0; i < str.length; i++) {
//         size += str[i];
//         if(size.length >= limit) {
//             array.push(size);
//             size = "";
//         }

//     }
//     array.push(size);
//     return array
// }
// console.log(chunkString("HelloWorld", 3)); // ["Hel", "loW", "orl", "d"]
// char loop
// 1-3 size
// size === 3 array.push

// exercise4

//5.
// const fruits = ["apple", "banana", "cherry", "Date"];
// const upperCasefruits = fruits.map((value) => {
//   return value.toUpperCase();
// });
// console.log(upperCasefruits);
6;
// const fruits = ["apple", "banana", "cherry", "Date"];
// const result = fruits.filter((value, index) => {
//   return value.length > 5;
// });
// console.log(result);
7;
// let students = [
//   ["John", 20, [91, 92, 99]],
//   ["Jane", 22, [81, 94, 98]],
// ];
// // students[0][0] = "Jane";
// // students[0][2][0] = 95;
// // console.log(students);

// let an = [];
// const Names = students.forEach((student, index) => {
//   an.push(student[0]);
// });
// console.log(an);

// const deesh = students.filter((value, index) => {
//   return students[index][2][0] >= 90;
// });
// console.log(deesh);

// students = students.map((value, index) => {
//   students[index][1] = students[index][1] + 1;
//   return students[index];
// });
// console.log(students);

// students.unshift(["Doe", 22, [85, 87, 90]]);
// students[0].pop();
// console.log(students);

// function twosum(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let k = i; k < nums.length; k++) {
//       if (nums[i] + nums[k] === target) {
//         return [i, k];
//       }
//     }
//   }
// }
// console.log(twosum([3, 4, 5], 7));

// function countChar(text, char) {
//   let count = 0;
//   for (i = 0; i < text.length; i++) {
//     if (text[i] == char) {
//       count = count + 1;
//     }
//   }
//   console.log(count);
//   return count;
// }
// countChar(["Hello wordl", "l"]);

// function nums(nums) {
//   let sum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     sum = sum + nums[i];
//   }
//   return sum;
// }

// console.log(nums([1, 2, 3, 4, 5, -1, -2, 6, 7, 8, 9, 10]));
// function findMax(nums) {
//   let max = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (max < nums[i]) {
//       max = nums[i];
//     }
//   }

//   return max;
// }
// console.log(findMax([1, 2, 3, 4, 5, -1, -2, 6, 7, 8, 9, 10]));

const person = { firstName: "john", LastName: "doe", age: 25, city: "ub" };
console.log(Object.values(person));
console.log(Object.keys(person));
console.log(person.firstName, person.city);

person.email = "yofasdf";
console.log(person);
person.city = "ulaanbaatar";
console.log(person);
const student = {
  Name: "Jane",
  age: 20,
  grades: {
    math: 80,
    science: 70,
    history: 77,
  },
  address: (street = {
    street: "hanuul",
    city: "ub",
    zip: 1508,
  }),
};
console.log(student);
student.city = "ulaanbaatar";
console.log(student);
student.grades.math = 95;
console.log(student);

console.log(Object.keys(student));
delete student.address.zip;
console.log(student);
