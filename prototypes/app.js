// class AgedPerson {
//   printAge() {
//     console.log(this.age);
//   }
// }

// class Person extends AgedPerson {
//   name = 'Max';

//   constructor() {
//     super();
//     this.age = 30;
//   }

//   greet() {
//     console.log(
//       'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.'
//     );
//   }
// }

function Person() {
  this.age = 30;
  this.name = 'Max';
  this.greet = function() {
    console.log(
      'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.'
    );
  };
}

Person.prototype = {
  printAge() {
    console.log(this.age);
  }
};

// Person.prototype = Object;

console.dir(Person);

const p = new Person();
p.greet();
p.printAge();
console.log(p.__proto__);

class Tes{
  age = 30;
  print = function(){
    console.log('coba');
  }
}

class Tmp extends Tes{
  ayam = 30;
  // age = 45;
  print = function(){
    console.log("apa"+this.age);
  }
}

console.log("here");
console.log(Tmp.__proto__);
baru = new Tmp();

console.log(baru);
baru.print();