class Course{

  #price;
  get price(){
    return `\$${this.#price}`;
  }
  set price(price){
    this.#price = price;
    this.#price = Math.max(this.#price, 0);
  }
  constructor(title, length, price){
    this.title = title;
    this.length = length;
    this.price = price;
  }
  getLengthOverPrice(){
    return this.length/this.#price;
  }
  printCourseDescription(){
    console.log(`The title of this course is : ${this.title}
    The length is ${this.length}
    The price is ${this.price}
    The length over price is ${this.getLengthOverPrice()}
    `);
  }
}

class PracticalCourse extends Course{
  constructor(title, length, price, numOfExercises){
    super(title, length, price);
    this.numOfExercises = numOfExercises;
  }
  numOfExercises;
}

class TheoreticalCourse extends Course{
  constructor(...args){
    super(...args)
  }
  publish(){
    console.log("Course published");
  }
}

const course1 = new PracticalCourse("Javascript", 120, 89.99, 30);
const course2 = new TheoreticalCourse("Java", 250, 39.99, 20);

course1.printCourseDescription();
course2.printCourseDescription();
course2.publish();

course1.#price = 200;