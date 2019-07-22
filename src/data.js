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

// funcionalidad para obtener todos los tipos de pokemones 
const obtenerTipos = (allPokemon) => {
  let tipos = [], aux = 0;
  for (let i = 0; i < allPokemon.length; i++) {
    for (let j = 0; j < allPokemon[i].tipo.length; j++) {
      tipos[aux] = allPokemon[i].tipo[j];
      aux = aux + 1;
    }
  }
  const distintos = [...new Set(tipos)];
  return (distintos);
};
window.obtenerTipos = obtenerTipos;

// Funcionalidad para obtener todos las debilidades  de pokemones 
const obtenerDebilidades = (allPokemon) => {
  let debilidades = [], aux = 0;
  for (let i = 0; i < allPokemon.length; i++) {
    for (let j = 0; j < allPokemon[i].debilidades.length; j++) {
      debilidades[aux] = allPokemon[i].debilidades[j];
      aux = aux + 1;
    }
  }
  const distintos = [...new Set(debilidades)];
  return (distintos);
};
window.obtenerDebilidades = obtenerDebilidades;

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

// Funcion filtrar tipos
const filtrarTipos = (allPokemon, filtrado) => {
  return allPokemon.filter(objeto => objeto.tipo.indexOf(filtrado) > -1);
};
window.filtrarTipos = filtrarTipos;

// Funcion filtrar debilidades
const filtrarDebilidades = (allPokemon, debilidad) => {
  return allPokemon.filter(objeto => objeto.debilidades.indexOf(debilidad) > -1);
};
window.filtrarDebilidades = filtrarDebilidades;

// Funcion filtrar porcentaje
const filtrarPorcentaje = (allPokemon, porcentaje) => {
  return allPokemon.filter(objeto => objeto.huevo.indexOf(porcentaje) > -1);
};
window.filtrarPorcentaje = filtrarPorcentaje;
