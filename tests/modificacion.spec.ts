/* eslint-disable max-len */
import 'mocha';
import {expect} from 'chai';

import {Pikachu} from '../src/pikachu';
import {PikachuCreator} from '../src/pikachuCreator';
import {Charizard} from '../src/charizard';
import {CharizardCreator} from '../src/charizardCreator';

describe('Modificacion function test', () => {
  const pikachu = new Pikachu('Pikachu', 0.40, 5, [100, 80, 70, 90]);
  const charizard = new Charizard('Charizard', 1.90, 90, [100, 80, 70, 90]);
  const creator = new CharizardCreator('Charizard', 1.90, 90, [100, 80, 70, 90]);
  it('Creando objeto pikachu', () => {
    expect(new Pikachu('Pikachu', 0.40, 5, [100, 80, 70, 90])).instanceOf(Pikachu);
  });
  it('Creando objeto charizard', () => {
    expect(new Charizard('Charizard', 1.90, 90, [100, 80, 70, 90])).instanceOf(Charizard);
  });
  it('Comprobando metodo getAltura', () => {
    expect(pikachu.getAltura()).to.be.equal(0.40);
  });
  it('Comprobando método getNombre', () => {
    expect(charizard.getNombre()).to.be.equal('Charizard');
  });
  it('Creando objeto PikachuCreator', () => {
    expect(new PikachuCreator('Pikachu', 0.40, 5, [100, 80, 70, 90])).instanceOf(PikachuCreator);
  });
  it('Creando objeto CharizardCreator', () => {
    expect(new CharizardCreator('Charizard', 1.40, 55, [100, 80, 70, 90])).instanceOf(CharizardCreator);
  });
  it('Probando el método factoryMethod', () => {
    expect(creator.factoryMethod()).not.to.be.equal(null);
  });
});
