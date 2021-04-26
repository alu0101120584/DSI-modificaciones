import {Pokemon} from './pokemon';

/**
 * Clase que implementa un objeto pikachu implementando la interfaz
 */
export class Pikachu implements Pokemon {
  constructor(public nombre: string,
      public altura: number,
      public peso: number,
      public stats: number[]) {}

  /**
  * Getter del nombre
  * @return devuelve el atributo nombre
  */
  getNombre() {
    return this.nombre;
  }

  /**
  * Getter de altura
  * @return devuelve el atributo altura
  */
  getAltura() {
    return this.altura;
  }

  /**
  * Getter del peso
  * @return devuelve el atributo peso
  */
  getPeso() {
    return this.peso;
  }

  /**
  * Getter de los stats
  * @return devuelve el atributo stats que es un array de number
  */
  getStats() {
    return this.stats;
  }
}
