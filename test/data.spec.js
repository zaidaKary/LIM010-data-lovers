global.window = global;
// global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');

const dataPoke = [
  { 'id': 1,
    'num': '001',
    'name': 'Bulbasaur',
    'img': 'http://www.serebii.net/pokemongo/pokemon/001.png',
    'type': [
      'Grass',
      'Poison'
    ],
    'egg': '2 km',
    'avg_spawns': 69,
  },
  {
    'id': 2,
    'num': '002',
    'name': 'Ivysaur',
    'img': 'http://www.serebii.net/pokemongo/pokemon/002.png',
    'type': [
      'Grass',
      'Poison'
    ],
    'egg': 'Not in Eggs',
    'avg_spawns': 4.2,
  },
  {'id': 3,
    'num': '003',
    'name': 'Venusaur',
    'img': 'http://www.serebii.net/pokemongo/pokemon/003.png',
    'type': [
      'Grass',
      'Poison'
    ],
    'egg': 'Not in Eggs',
    'avg_spawns': 1.7,
  }
];
// Ejemplo:
// describe('example', () => {
//   it('debería ser una función', () => {
//     assert.equal(typeof example, 'function');
//   });
//   it('debería retornar "example"', () => {
//     assert.equal(example(), 'example');
//   });
// });

// describe('pokemon', () => {
//   it('debería ser una objeto', () => {
//     expect(typeof POKEMON).toEqual('object');
//   });
// });

describe('Deberia retornar la data nueva de los pokemones', () => {
  it('debería ser una funcion', () => {
    expect(typeof global.nuevaDataPokemones).toEqual('function');
  });
});

// describe('Buscar por nombre de pokemon', () => {
//   it('debería buscar los pokemones que empiecen con bul', () => {
//     expect(global.buscarPokemones(dataPoke, 'bul')[0].name).toEqual('Bulbasaur');
//   });
// });

describe('Ordenar los pokemones de A-Z', () => {
  it('debería ordenar los pokemones de A-Z', () => {
    expect(global.ordenarAz(dataPoke)[0].name).toEqual('');
  });
});

