import {FactoryPokemon} from './factory';
import {Pokemon} from './pokemon';
import {Charizard} from './charizard';

/**
 * Clase CharizardCreator que creará el objeto charizard
 */
export class CharizardCreator extends FactoryPokemon {
  constructor(public nombre: string,
    public altura: number,
    public peso: number,
    public stats: number[]) {
    super();
  }
  public factoryMethod(): Pokemon {
    return new Charizard(this.nombre, this.altura, this.peso, this.stats);
  }
}
