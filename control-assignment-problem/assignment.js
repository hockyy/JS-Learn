const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

if (randomNumber >= 0.7) alert(`Your random number is ${randomNumber}`);

randomArr = [];
for (let i = 0; i < 5; i++) randomArr.push(Math.floor(Math.random() * 100));

console.log("\n");
for (const num of randomArr) {
  console.log(num);
}

console.log("\n");
for (let i = 0; i < randomArr.length; i++) {
  console.log(randomArr[i]);
}

console.log("\n");
for (let i = randomArr.length - 1; i >= 0; i--) {
  console.log(randomArr[i]);
}

const anotherRN = Math.random();

console.log(randomNumber);
console.log(anotherRN);

if (
  (randomNumber >= 0.7 && anotherRN >= 0.7) ||
  randomNumber <= 0.2 ||
  anotherRN <= 0.2
) {
  alert("Yes");
}
