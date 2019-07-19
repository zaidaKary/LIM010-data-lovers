global.window = global;
require('../src/data');
require('./data.spec.js');

const input = [ {
  'number': '002',
  'nombre': 'Ivysaur',
  'imagen': 'http://www.serebii.net/pokemongo/pokemon/002.png',
  'tipo': [
    'Grass',
    'Poison'
  ],
  'altura': '0.99 m',
  'peso': '13.0 kg',
  'caramelo': 'Bulbasaur Candy',
  'contadorDeCaramelos': 100,
  'huevo': 'Not in Eggs',
  'frecuencia': 4.2,
  'debilidades': [
    'Fire',
    'Ice',
    'Flying',
    'Psychic'
  ],
},
{
  'number': '001',
  'nombre': 'Bulbasaur',
  'imagen': 'http://www.serebii.net/pokemongo/pokemon/001.png',
  'tipo': [
    'Grass',
    'Poison'
  ],
  'altura': '0.71 m',
  'peso': '6.9 kg',
  'caramelo': 'Bulbasaur Candy',
  'contadorDeCaramelos': 25,
  'huevo': '2 km',
  'frecuencia': 69,
  'debilidades': [
    'Fire',
    'Ice',
    'Flying',
    'Psychic'
  ],
}, {
  'number': '003',
  'nombre': 'Venusaur',
  'imagen': 'http://www.serebii.net/pokemongo/pokemon/003.png',
  'tipo': [
    'Grass',
    'Poison'
  ],
  'altura': '2.01 m',
  'peso': '100.0 kg',
  'caramelo': 'Bulbasaur Candy',
  'huevo': 'Not in Eggs',
  'frecuencia': 1.7,
  'debilidades': [
    'Fire',
    'Ice',
    'Flying',
    'Psychic'
  ]
}];

// const input2 = global.nuevaDataPokemones(input);

const ouput2 = [ {
  'number': '001',
  'nombre': 'Bulbasaur',
  'imagen': 'http://www.serebii.net/pokemongo/pokemon/001.png',
  'tipo': [
    'Grass',
    'Poison'
  ],
  'altura': '0.71 m',
  'peso': '6.9 kg',
  'caramelo': 'Bulbasaur Candy',
  'contadorDeCaramelos': 25,
  'huevo': '2 km',
  'frecuencia': 69,
  'debilidades': [
    'Fire',
    'Ice',
    'Flying',
    'Psychic'
  ]}
];

const ouput3 = [{
  'number': '001',
  'nombre': 'Bulbasaur',
  'imagen': 'http://www.serebii.net/pokemongo/pokemon/001.png',
  'tipo': [
    'Grass',
    'Poison'
  ],
  'altura': '0.71 m',
  'peso': '6.9 kg',
  'caramelo': 'Bulbasaur Candy',
  'contadorDeCaramelos': 25,
  'huevo': '2 km',
  'frecuencia': 69,
  'debilidades': [
    'Fire',
    'Ice',
    'Flying',
    'Psychic'
  ],
}, {
  'number': '002',
  'nombre': 'Ivysaur',
  'imagen': 'http://www.serebii.net/pokemongo/pokemon/002.png',
  'tipo': [
    'Grass',
    'Poison'
  ],
  'altura': '0.99 m',
  'peso': '13.0 kg',
  'caramelo': 'Bulbasaur Candy',
  'contadorDeCaramelos': 100,
  'huevo': 'Not in Eggs',
  'frecuencia': 4.2,
  'debilidades': [
    'Fire',
    'Ice',
    'Flying',
    'Psychic'
  ],
}, {
  'number': '003',
  'nombre': 'Venusaur',
  'imagen': 'http://www.serebii.net/pokemongo/pokemon/003.png',
  'tipo': [
    'Grass',
    'Poison'
  ],
  'altura': '2.01 m',
  'peso': '100.0 kg',
  'caramelo': 'Bulbasaur Candy',
  'huevo': 'Not in Eggs',
  'frecuencia': 1.7,
  'debilidades': [
    'Fire',
    'Ice',
    'Flying',
    'Psychic'
  ]
}];

const ouput4 = [{
  'number': '003',
  'nombre': 'Venusaur',
  'imagen': 'http://www.serebii.net/pokemongo/pokemon/003.png',
  'tipo': [
    'Grass',
    'Poison'
  ],
  'altura': '2.01 m',
  'peso': '100.0 kg',
  'caramelo': 'Bulbasaur Candy',
  'huevo': 'Not in Eggs',
  'frecuencia': 1.7,
  'debilidades': [
    'Fire',
    'Ice',
    'Flying',
    'Psychic'
  ]
},
{
  'number': '002',
  'nombre': 'Ivysaur',
  'imagen': 'http://www.serebii.net/pokemongo/pokemon/002.png',
  'tipo': [
    'Grass',
    'Poison'
  ],
  'altura': '0.99 m',
  'peso': '13.0 kg',
  'caramelo': 'Bulbasaur Candy',
  'contadorDeCaramelos': 100,
  'huevo': 'Not in Eggs',
  'frecuencia': 4.2,
  'debilidades': [
    'Fire',
    'Ice',
    'Flying',
    'Psychic'
  ],
},
{
  'number': '001',
  'nombre': 'Bulbasaur',
  'imagen': 'http://www.serebii.net/pokemongo/pokemon/001.png',
  'tipo': [
    'Grass',
    'Poison'
  ],
  'altura': '0.71 m',
  'peso': '6.9 kg',
  'caramelo': 'Bulbasaur Candy',
  'contadorDeCaramelos': 25,
  'huevo': '2 km',
  'frecuencia': 69,
  'debilidades': [
    'Fire',
    'Ice',
    'Flying',
    'Psychic'
  ],
}];

const ouput5 = ['Grass', 'Poison'];
const ouput6 = ['Fire', 'Ice', 'Flying', 'Psychic'];
const ouput7 = ['Not in Eggs', '2 km'];
const ouput8 = [];
const ouput9 = [{
  'number': '001',
  'nombre': 'Bulbasaur',
  'imagen': 'http://www.serebii.net/pokemongo/pokemon/001.png',
  'tipo': [
    'Grass',
    'Poison'
  ],
  'altura': '0.71 m',
  'peso': '6.9 kg',
  'caramelo': 'Bulbasaur Candy',
  'contadorDeCaramelos': 25,
  'huevo': '2 km',
  'frecuencia': 69,
  'debilidades': [
    'Fire',
    'Ice',
    'Flying',
    'Psychic'
  ],
}];

describe('Deberia retornar la data nueva de los pokemones', () => {
  it('debería ser una funcion', () => {
    expect(typeof global.nuevaDataPokemones).toEqual('function');
  });

  it('Deberia retornar un array', ()=> {
    expect(Array.isArray(global.nuevaDataPokemones(input))).toEqual(true);
  });
});

describe('Buscar por nombre de pokemon', () => {
  it('debería buscar los pokemones que empiecen con b', () => {
    expect(global.buscarPokemonesPorNombre(input, 'b')).toEqual(ouput2);
  });
});


describe('Ordenar de A a la Z', () => {
  it('debería ordenar los pokemones por nombre de A  a la Z', () => {
    expect(global.ordenarAz(input)).toEqual(ouput3);
  });
});

describe('Ordenar de manera ascendente por frecuencia de aparición', () => {
  it('Debería ordenar de manera ascendente por frecuencia de aparición', () => {
    expect(global.ordenarAsc(input)).toEqual(ouput4);
  });
});

describe('Muestra los tipos de Pokemones', () => {
  it('Debería retornar un array con los tipos de Pokemones', () => {
    expect(global.obtenerTipos(input)).toEqual(ouput5);
  });
});

describe('Muestra las Debilidades de los Pokemones', () => {
  it('Debería retornar un array con las debilidades de los Pokemones', () => {
    expect(global.obtenerDebilidades(input)).toEqual(ouput6);
  });
});

describe('Muestra los kms de los huevos de los Pokemones', () => {
  it('Debería retornar un array con los kms de los huevos de los Pokemones', () => {
    expect(global.obtenerPorcentaje(input)).toEqual(ouput7);
  });
});

describe('Muestra todos los pokemones que tengan un tipo especifico', () => {
  it('Debería retornar un array con los Pokemones que tienen el tipo correspondiente', () => {
    expect(global.filtrarTipos(input, 'hola')).toEqual(ouput8);
  });
});

describe('Muestra todos los pokemones que tengan una debilidad especifica', () => {
  it('Debería retornar un array con los Pokemones que tienen la debilidad correspondiente', () => {
    expect(global.filtrarDebilidades(input, 'hola')).toEqual(ouput8);
  });
});

describe('Muestra todos los pokemones que tengan una debilidad especifica', () => {
  it('Debería retornar un array con los Pokemones que tienen la debilidad correspondiente', () => {
    expect(global.filtrarDebilidades(input, 'Fire')).toEqual(input);
  });
});

describe('Muestra todos los pokemones que tengan una cantidad de kms especifica', () => {
  it('Debería retornar un array con los Pokemones que tienen una cantidad de kms correspondiente', () => {
    expect(global.filtrarPorcentaje(input, '2 km')).toEqual(ouput9);
  });
});

