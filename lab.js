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


