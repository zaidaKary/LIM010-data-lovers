/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const nuevaDataPokemones = () => {
  const poke =[];
   for(let i=0;i<POKEMON.pokemon.length;i++){
    poke.push({
      'number':POKEMON.pokemon[i].num,
      'nombre': POKEMON.pokemon[i].name,
      'imagen': POKEMON.pokemon[i].img,
      'tipo': POKEMON.pokemon[i].type,
      'altura': POKEMON.pokemon[i].height,
      'peso': POKEMON.pokemon[i].weight,
      'caramelo': POKEMON.pokemon[i].candy,
      'contadorDeCaramelos': POKEMON.pokemon[i].candy_count,
      'huevo': POKEMON.pokemon[i].egg

       


    })
   }
    return(poke);
};

window.nuevaDataPokemones = nuevaDataPokemones;





