/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

/*const example = () => {
  return 'hola';
};

window.example = example;*/

const nuevaData = (pokemon) => {
  const arregloNuevo=[]; //guardamos el valor que queremos
  for(let i=0;i<pokemon.lenght;i++){
    arregloNuevo.push({
      nombre: pokemon[i].name,
      imagen: pokemon[i].img,
      tipo: pokemon[i].type,
    });
  }
 return arregloNuevo;
};
//window.<data>
window.pokemon = {
  //Aqui van todas las funciones
  nuevaData: nuevaData ,
};