/* eslint-disable max-len */
import 'mocha';
import {expect} from 'chai';

import {Pikachu} from '../src/pikachu';
import {Charizard} from '../src/charizard';

describe('Modificacion function test', () => {
  const pikachu = new Pikachu('Pikachu', 0.40, 5, [100, 80, 70, 90]);
  const charizard = new Charizard('Charizard', 1.90, 90, [100, 80, 70, 90]);
  it('Creando objeto pikachu', () => {
    expect(new Pikachu('Pikachu', 0.40, 5, [100, 80, 70, 90])).not.to.be.equal(null);
  });
  it('Creando objeto charizard', () => {
    expect(new Charizard('Charizard', 1.90, 90, [100, 80, 70, 90])).not.to.be.equal(null);
  });
  it('Comprobando metodo getAltura', () => {
    expect(pikachu.getAltura()).to.be.equal(0.40);
  });
  it('Comprobando método getNombre', () => {
    expect(charizard.getNombre()).to.be.equal('Charizard');
  });
});
