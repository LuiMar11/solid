/* Single responsibility principle (Principio de responsabilidad única)
Nos dice que una clase o función debe centrarse en una única responsabilidad, 
que debe existir una única razón para cambiar; en resumen podemos decir que 
éste principio nos pide que todos los métodos o sub-funciones tengan alta cohesión.

En la clase solo se tienen metodos para leer o escribir información
*/

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  getNombre() {
    return this.nombre;
  }
  getEdad() {
    return this.edad;
  }
  setNombre(nombre) {
    this.nombre = nombre;
  }
  setEdad(edad) {
    this.edad = edad;
  }
}

const persona1 = new Persona("Felipe", 29);
console.log("Nombre: " + persona1.getNombre() + "\nEdad " + persona1.getEdad());
