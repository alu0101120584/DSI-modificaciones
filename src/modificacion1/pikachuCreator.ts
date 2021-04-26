import {FactoryPokemon} from './factory';
import {Pokemon} from './pokemon';
import {Pikachu} from './pikachu';

/**
 * Clase PikachuCreator que creará el objeto pikachu
 */
export class PikachuCreator extends FactoryPokemon {
  constructor(public nombre: string,
    public altura: number,
    public peso: number,
    public stats: number[]) {
    super();
  }
  public factoryMethod(): Pokemon {
    return new Pikachu(this.nombre, this.altura, this.peso, this.stats);
  }
}
