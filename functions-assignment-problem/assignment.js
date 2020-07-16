const sayHello = (name = "Hocky") => {
  console.log(`Hi ${name}`);
}

const hello1 = (greet, name) => {
  console.log(`${greet} ${name}`);
}

const hello2 = () => {
  console.log("henlo")
  console.log(arguments[0])
}

const hello3 = (name = "Hocky") => {
  return (`Hi ${name}`);
}

sayHello("coba")
hello1("Hello", "Hocky")
hello2("hello");
console.log(hello3())

const noInput = function(){
  console.log("No input is given");
};

const printInput = (str) => {
  for(const s of str) console.log(s);
}

const checkInput = (cb = noInput,...str) => {
  cb(str);
}

checkInput(printInput, "hocku", 5,4,3);

sayHello();