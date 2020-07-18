// Big Integer

const curNum = 1000000000023132123123123123n;
console.log(curNum);
console.dir(BigInt);

// Ranged random

function nextInt(lo, hi){
  const range = hi-lo+1;
  return Math.floor(range*Math.random()+lo);
}

console.log(nextInt(2,5));

cnt = [0,0,0,0,0,0,0];
for(let i = 0;i < 1000;i++){
  cnt[nextInt(2,5)]++;
}

console.log(cnt);

// Tagged Templates

function stringParser(strings, desc, price){
  console.log(strings);
  console.log(desc);
  console.log(price);
  let priceDesc = "pretty cheap";
  if(price > 20) priceDesc = "expensive af";
  return `${strings[0]}${desc}${strings[1]}${priceDesc}${strings[2]}`;
}

const product = "The sofa";
const price = 19.99;

const prodDesc = stringParser`The price of ${product} is ${price}.`;

console.log(prodDesc);


// Regular Expression - Regex
// is used to search a pattern in string


const email = "hocky.yudhiono@gmail.com"
const regex = new RegExp("");
const emailRegex = /^\S+@\S+\.\S+$/;


console.log(regex);
console.log(emailRegex);

console.dir(RegExp);

const isEmail = emailRegex.test(email);
console.log(isEmail);
console.log(emailRegex.test("ayam.as@gmail"));

const newRegex = /hello/ // Case sensitive
console.log(newRegex.test("hi there, hello ...")) // true
console.log(newRegex.test("hi there, heLlo ...")) // false
