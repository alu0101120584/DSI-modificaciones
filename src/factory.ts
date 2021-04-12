import {Pokemon} from './pokemon';

export abstract class FactoryPokemon {
  public abstract factoryMethod(): Pokemon;
}
