// Assignment 1

const myArray = [5,6,9,12,4,4,5,6,7,4];
console.log(myArray);

const filteredArray = myArray.filter(val => val > 5);
const mappedArray = myArray.map(val => ({num:val, id:"HockyGanteng"}));
const reducedValue = myArray.reduce((pre, cur) => pre*cur, 1);

console.log(filteredArray);
console.log(mappedArray);
console.log(reducedValue);

// Assignment 2

let findMax = (...numbers) => {
  let ret = numbers[0];
  for(const curnum of numbers){
    ret = Math.max(ret, curnum);
  }
  return ret;
}

console.log(findMax(...myArray));

// Assignment 3

findMax = (...numbers) => {
  let ret = [numbers[0],numbers[0]];
  for(const curnum of numbers){
    ret = [Math.min(ret[0], curnum), Math.max(ret[1],curnum)];
  }
  return ret;
}

console.log(findMax(...myArray));

// Assignment 4

uniqueList = new Set();

myArray.forEach(val => {uniqueList.add(val)});

console.log(uniqueList.entries());