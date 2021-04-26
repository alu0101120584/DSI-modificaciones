import {Pokemon} from './pokemon';

/**
 * Clase abstracta que declara el método factorymethod()
 */
export abstract class FactoryPokemon {
  public abstract factoryMethod(): Pokemon;
}
