/*Open/Closed Principle (Principio abierto / cerrado) 
Nos dice que debemos ser capaces de extender el comportamiento 
de una clase/función sin modificar.
 */

class Animales {
  animalesZoo = ["Leon", "Elefante", "Serpiente"];

  existeZoo(animal) {
    return this.animales.indexOf(animal) !== -1;
  }

  agregarAnimal(animal) {
    this.animalesZoo.push(animal);
  }
}

let zoo = new Animales();
console.log(zoo.animalesZoo);
zoo.agregarAnimal("Tigre");
console.log(zoo.animalesZoo);
