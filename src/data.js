const nuevaDataPokemones = (data) => {
  const poke = [];
  for (let i = 0; i < data.length; i++) {
    poke.push({
      'number': data[i].num,
      'nombre': data[i].name,
      'imagen': data[i].img,
      'tipo': data[i].type,
      'altura': data[i].height,
      'peso': data[i].weight,
      'caramelo': data[i].candy,
      'contadorDeCaramelos': data[i].candy_count,
      'huevo': data[i].egg,
      'debilidades': data[i].weaknesses,
      'frecuencia': data[i].avg_spawns
    });
  }
  return poke;
};
window.nuevaDataPokemones = nuevaDataPokemones;

// Funcionalidad de ordenar Pokemones de A-z
const ordenarAz = (allPokemon) => {
  allPokemon.sort((unPokemon, otroPokemon) => unPokemon.nombre.localeCompare(otroPokemon.nombre));
  return (allPokemon);
};
window.ordenarAz = ordenarAz;

// Funcionalidad de ordenar ascendentemente por frecuencia de aparicion
const ordenarAsc = (allPokemon) => {
  allPokemon.sort((unPokemon, otroPokemon) => unPokemon.frecuencia - otroPokemon.frecuencia);
  return (allPokemon);
};
window.ordenarAsc = ordenarAsc;

// Funcionalidad para obtener todos los tipos y las debilidades  de pokemones 
const obtenerTipoDebilidad = (allPokemon, propiedad) => {
  let nuevoArreglo = [], aux = 0;
  for (let i = 0; i < allPokemon.length; i++) {
    for (let j = 0; j < allPokemon[i][propiedad].length; j++) {
      nuevoArreglo[aux] = allPokemon[i][propiedad][j];
      aux = aux + 1;
    }
  }
  const distintos = [...new Set(nuevoArreglo)];
  return (distintos);
};

// Funcionalidad de obterner porcentaje de huevos a eclosionar 
const obtenerPorcentaje = (allPokemon) => {
  let km = [];
  for (let i = 0; i < allPokemon.length; i++) {
    km[i] = allPokemon[i].huevo;
  }
  const distintos = [...new Set(km)];
  return (distintos);
};
window.obtenerPorcentaje = obtenerPorcentaje;

// Funcion buscar un pokemon
const buscarPokemonesPorNombre = (allPokemon, busqueda) => {
  return allPokemon.filter(objeto => objeto.nombre.toLowerCase().startsWith(busqueda));
};
window.buscarPokemonesPorNombre = buscarPokemonesPorNombre;

// Función filtrar: TIPOS, DEBILIDADES Y HUEVOS
const filtrar = (allPokemon, tipoDeFiltrado, seleccionFiltrado) => {
  return allPokemon.filter(objeto => objeto[tipoDeFiltrado].indexOf(seleccionFiltrado) > -1);
};
window.filtrar = filtrar;