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
*/
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
    });
   }
    return poke;
};

window.nuevaDataPokemones = nuevaDataPokemones;



