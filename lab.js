// PS 308H.7.3 - Classes and Factories
// https://ps-react-curriculum.herokuapp.com/308H/7/lab-4


class Hamster {
  constructor(name) {
    this.owner = '';
    this.name = name;
    this.price = 15;
  }

  wheelRun() {
    console.log('squeak squeak');
  }

  eatFood() {
    console.log('nibble nibble');
  }

  getPrice() {
    return this.price;
  }
}


function hamsterOperations(name) {
    const myHamster = new Hamster(name);
    console.log(myHamster.name);
    console.log(myHamster.getPrice());
    myHamster.wheelRun();
    myHamster.eatFood();
  }

  
hamsterOperations("Mr. Fluff");


  // --------------------------------
 // --------------------------------
// --------------------------------


class Person {
    constructor(name) {
      this.name = name;
      this.age = 0;
      this.height = 0;
      this.weight = 0;
      this.mood = 0;
      this.hamsters = [];
      this.bankAccount = 0;
    }
  
    getName() {
      return this.name;
    }
  
    getAge() {
      return this.age;
    }
  
    getWeight() {
      return this.weight;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name}.`);
    }
  
    eat() {
      this.weight++;
      this.mood++;
    }
  
    exercise() {
      this.weight--;
    }
  
    ageUp() {
      this.age++;
      this.height++;
      this.weight++;
      this.mood--;
      this.bankAccount += 10;
    }
  
    buyHamster(hamster) {
      this.hamsters.push(hamster);
      this.mood += 10;
      this.bankAccount -= hamster.getPrice();
    }
  }
  

console.log("\n");

const john = new Person('John');
console.log(john.getName());
console.log(john.getAge());
console.log(john.getWeight());
john.greet();
john.eat();
console.log(john.getWeight());
john.exercise();
console.log(john.getWeight());
john.ageUp();
console.log(john.getAge());
console.log(john.getWeight());
console.log(john.mood);
console.log(john.bankAccount);

const fluffy = new Hamster('Fluffy');
john.buyHamster(fluffy);
console.log(john.mood);
console.log(john.bankAccount);
console.log(john.hamsters);



console.log("\n");



const timmy = new Person('Timmy');
timmy.ageUp();

for (let i = 0; i < 5; i++) {
  timmy.eat();
}

for (let i = 0; i < 5; i++) {
  timmy.exercise(); // exercise 5 times
}

for (let i = 0; i < 9; i++) {
  timmy.ageUp();
}

const gus = new Hamster('Gus');
gus.owner = "Timmy";
timmy.buyHamster(gus);

for (let i = 0; i < 15; i++) {
  timmy.ageUp(); //age tim by 15 years
}

timmy.eat();
timmy.eat();

timmy.exercise();
timmy.exercise();




console.log("\n");


class Dinner {
    constructor(starter, primary, dessert) {
      this.starter = starter;
      this.primary = primary;
      this.dessert = dessert;
    }
  }
  
  function makeDinner(starter, primary, dessert) {
    return new Dinner(starter, primary, dessert);
  }
  
  const dinner1 = makeDinner('Salad', 'Steak', 'Chocolate Cake');
  const dinner2 = makeDinner('Soup', 'Grilled Chicken', 'Apple Pie');
  const dinner3 = makeDinner('Bruschetta', 'Pasta', 'Tiramisu');
  
  console.log(dinner1);
  console.log(dinner2);
  console.log(dinner3);
  