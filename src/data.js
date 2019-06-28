/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const nuevaDataPokemones = () => {
  const poke =[];
   for(let i=0;i<2;i++){
    poke.push({
      'num':POKEMON.pokemon[i].num,
      'nombre': POKEMON.pokemon[i].name,
      'imagen': POKEMON.pokemon[i].img,
      'tipo': POKEMON.pokemon[i].type,

    })
   }
    return(poke);
};

window.nuevaDataPokemones = nuevaDataPokemones;

const allpokemon= nuevaDataPokemones();

const mostrarPokemones = () => {
  for (let i=0;i<2;i++)
  allpokemones.innerHTML=allpokemon[0].imagen;
  allpokemones.innerHTML=allpokemon[0].nombre;
  allpokemones.innerHTML=allpokemon[0].num;
  //allpokemones.innerHTML=allpokemon[0].tipo;
   }

   window.mostrarPokemones = mostrarPokemones;




