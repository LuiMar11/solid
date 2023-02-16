/* Liskov Substitution Principle (Principio de substitución de Liskov) 
Objects should be replaced with instances of their subclasses without altering the behavior.
*/

class Bird {
  layEggs() {
    console.log("can lay eggs");
  }
}

class FlyingBird {
  fly() {
    console.log("can fly");
  }
}

class SwimmingBird {
  swim() {
    console.log("can swim");
  }
}
class Condor extends FlyingBird {}
class Penguin extends SwimmingBird {}

let condor = new Condor();
let penguin = new Penguin();

console.log("Condor") + condor.fly();
console.log("Penguin ") + penguin.swim();
