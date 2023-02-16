/*  Dependency Inversion Principle (Principio de inversión de dependencias)  
En este principio se establecen que las dependencias deben de estar en las abstracciones y no en las concreciones, 
en otras palabras, nos piden que las clases nunca dependan de otras clases y que toda esta relación debe estar en una abstracción. 
Este principio tiene dos reglas:
Los módulos de alto nivel no deben de depender de módulos de bajo nivel. Esta lógica debe de estar en una abstracción.
Las abstracciones no deben de depender de detalles. Los detalles deberían depender de abstracciones
*/

class Inventario {
  constructor(items, requester) {
    this.items = items;
    this.requester = requester;
  }

  requestItems() {
    this.items.forEach((item) => {
      this.requester.requestItem(item);
    });
  }
}

class InventarioV1 {
  constructor() {
    this.REQ_METHODS = ["HTTP"];
  }

  requestItem(item) {}
}

class InventarioV2 {
  constructor() {
    this.REQ_METHODS = ["WS"];
  }

  requestItem(item) {
  }
}

const inventario = new Inventario(["Mango", "Limón"], new InventarioV2());
inventario.requestItems();
console.log(inventario.items);
