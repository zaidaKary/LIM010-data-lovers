/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
/*const example = () => {
  return 'exameple';
};
window es un objeto que tiene una propiedad example y le asignado un valor el cual representa una funcion. 
Window es un objeto global del navegador
window.example = example;
window.aaa = 'hola'; agregando una propiedad aaa a la varible global window
window.diasSemana = ['lunes','Martes','Miercoles','Jueves','Viernes']
Probamos el window  en la consola.
y tambien probamos las propiedades: window.aaa
                                    window.diasSemana
Probamos la propiedad:   window.example
Probamos el metodo       window.example()
Solo por ser el objeto window es que funciona estas propiedades
windows.POKEMON = POKEMON.pokemon;
*/
const nuevaDataPokemones = () => {
  const poke = [];
  for (let i = 0; i < POKEMON.pokemon.length; i++) {
    poke.push({
      'number': POKEMON.pokemon[i].num,
      'nombre': POKEMON.pokemon[i].name,
      'imagen': POKEMON.pokemon[i].img,
      'tipo': POKEMON.pokemon[i].type,
      'altura': POKEMON.pokemon[i].height,
      'peso': POKEMON.pokemon[i].weight,
      'caramelo': POKEMON.pokemon[i].candy,
      'contadorDeCaramelos': POKEMON.pokemon[i].candy_count,
      'huevo': POKEMON.pokemon[i].egg,
      'debilidades': POKEMON.pokemon[i].weaknesses,
      'frecuencia': POKEMON.pokemon[i].avg_spawns
    });
  }
  return poke;
};

window.nuevaDataPokemones = nuevaDataPokemones;

const MaysPrimera = (string) => {
  string = string.toLowerCase();
  return string.charAt(0).toUpperCase() + string.slice(1);
}


//Funcionaliad de ordenar Pokemones de A-z
const ordenarAz = (allPokemon) => {
  allPokemon.sort((unPokemon, otroPokemon) => unPokemon.nombre.localeCompare(otroPokemon.nombre));
  return (allPokemon);
};
//Funcionalidad de ordenar ascendentemente por frecuencia de aparicion
const ordenarAsc = (allPokemon) => {
  allPokemon.sort((unPokemon, otroPokemon) => unPokemon.frecuencia - otroPokemon.frecuencia);
  return (allPokemon);
}

//funcionalidad para obtener todos los tipos de pokemones 

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
}
//funcionalidad para obtener todos las debilidades  de pokemones 

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
}

//Funcionalidad de Obterner porcentaje de huevos a eclosionar 
const obtenerPorcentaje = (allPokemon) => {
  let km = [];
  for (let i = 0; i < allPokemon.length; i++) {
    km[i] = allPokemon[i].huevo;
  }
  const distintos = [...new Set(km)];
  return (distintos);

}
//Funcion buscar un pokemon
const buscarPokemones = (allPokemon, busqueda) => {
  return allPokemon.filter(objeto => objeto.nombre.toLowerCase().startsWith(busqueda));
};
//Funcion filtrar tipos
const filtrarTipos = (allPokemon, filtrado) => {
  return allPokemon.filter(objeto => objeto.tipo.indexOf(filtrado) > -1);
};

