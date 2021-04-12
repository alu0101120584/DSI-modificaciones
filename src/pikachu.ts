import {Pokemon} from './pokemon';

export class Pikachu implements Pokemon {
  constructor(public nombre: string,
      public altura: number,
      public peso: number,
      public stats: number[]) {}

  getNombre() {
    return this.nombre;
  }

  getAltura() {
    return this.altura;
  }

  getPeso() {
    return this.peso;
  }

  getStats() {
    return this.stats;
  }

  setNombre(nombre: string) {
    this.nombre = nombre;
  }

  setAltura(altura: number) {
    this.altura = altura;
  }

  setPeso(peso: number) {
    this.peso = peso;
  }

  setStats(stats: number[]) {
    this.stats = stats;
  }
}
