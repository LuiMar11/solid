/*  Interface Segregation Principle (Principio de segregación de interfaz)  
Este principio establece que los clientes no deben ser forzados a depender de interfaces que no utilizan. 
Es importante que cada clase implemente las interfaces que va a utilizar. 
De este modo, agregar nuevas funcionalidades o modificar las existentes será más fácil*/
interface Animal {
  walk(): void;
  fly(): void;
}

interface AnimalCanWalk {
  walk(): void;
}

interface AnimalCanFly {
  fly(): void;
}

class Dog implements AnimalCanWalk {
  walk() {
    console.log("Walking");
  }
}

class Duck implements AnimalCanWalk, AnimalCanFly {
  walk() {
    console.log("Walking");
  }

  fly() {
    console.log("Flying");
  }
}
