/* Manejo del DOM */

// Valores del input de usuario y contraseña
let usuario = document.getElementById('usuario');
let contrasenha = document.getElementById('contrasenha');
const contrasenhaIncorrecta = document.getElementById('contrasenha-incorrecta');
// Vistas
const vistaLogin = document.getElementById('vista-login');
const VistaError = document.getElementById('vista-error');
const VistaInicio = document.getElementById('vista-inicio');
// Barra de menu
const BarraMenu = document.getElementById('barra-menu');
// Botones
const BotonIngresar = document.getElementById('boton-ingresar');
// Botones de menu
const selecAz = document.getElementById('az');
const selecZa = document.getElementById('za');
const selecAsc = document.getElementById('asc');
const selecDesc = document.getElementById('desc');
// Botones de menu ComboBox
const porTipo = document.getElementById('por-tipo');
const porDebilidad = document.getElementById('por-debilidad');
// ComboBox para ocultar
const ComboBoxTipo = document.getElementById('combobox-filtrar-tipo');
const ComboBoxDebilidad = document.getElementById('combobox-filtrar-debilidad');
const ComboBoxPorcentaje = document.getElementById('combobox-porcentaje');
// Mensaje de cantidad y porcentaje de pokemones 
const resultCantidad = document.getElementById('info');
// Porcentaje
const porcentaje = document.getElementById('porcentaje');
const allPokemones = document.getElementById('all-pokemones');
// Variable global de la data
let pokemonNew = [];
// Cerrar sesion
const cerrarPokemon = document.getElementById('cerrar');

//Usando fetch()
const url = 'https://raw.githubusercontent.com/zaidaKary/LIM010-data-lovers/master/src/data/pokemon/pokemon.json';
fetch(url)
.then(response => response.json())
.then(data => {
  pokemonNew = nuevaDataPokemones(data.pokemon);
  allPokemones.innerHTML = mostrarPokemones(pokemonNew);

  const tiposPokemones = obtenerTipoDebilidad(pokemonNew, 'tipo');
  porTipo.addEventListener('click', () => {
    pintarEnComboBox(tiposPokemones, seleccionComboBoxTipo);
    ocultar();
    ComboBoxTipo.classList.remove('ocultarComboBox');
  });

  const debilidadPokemones = obtenerTipoDebilidad(pokemonNew,'debilidades');
  porDebilidad.addEventListener('click', () => {
    pintarEnComboBox(debilidadPokemones, seleccionComboBoxDebilidad);
    ocultar();
    ComboBoxDebilidad.classList.remove('ocultarComboBox');
  });

  const kmPokemones = obtenerPorcentaje(pokemonNew);

  porcentaje.addEventListener('click', () => {
  pintarEnComboBox(kmPokemones, seleccionOpcionComboBox2);
  ocultar();
  ComboBoxPorcentaje.classList.remove('ocultarComboBox');
});
  console.log(pokemonNew);
})
.catch(err => console.log(err))


// Funcionalidad del Boton Ingresar Usuario y Contraseña
let contador = 3;
BotonIngresar.addEventListener('click', () => {
  if (contrasenha.value === '' && usuario.value === '') {
    contrasenhaIncorrecta.innerHTML = '<strong>Por favor, ingrese su usuario y contraseña.</strong>';
  } else if (contrasenha.value === '') {
    contrasenhaIncorrecta.innerHTML = '<strong>Por favor, ingrese su contraseña.</strong>';
    document.getElementById('usuario').value = '';
  } else if (usuario.value === '') {
    contrasenhaIncorrecta.innerHTML = '<strong>Por favor, ingrese su usuario.</strong>';
    document.getElementById('contrasenha').value = '';
  } else if (usuario.value === 'LABORATORIA' && contrasenha.value === 'LABORATORIA') {
    vistaLogin.classList.add('hide');
    VistaInicio.classList.remove('hide');
    BarraMenu.classList.remove('hide');
    BarraMenu.classList.remove('barra-menu');
    ComboBoxTipo.classList.add('ocultarComboBox');
    ComboBoxDebilidad.classList.add('ocultarComboBox');
    ComboBoxPorcentaje.classList.add('ocultarComboBox');
  } else {
    if (contador === 0) {
      vistaLogin.classList.add('hide');
      VistaError.classList.remove('hide');
    } else {
      contrasenhaIncorrecta.innerHTML = '<strong>Datos incorrectos, le quedan ' + contador + ' intento(s)</strong>';
      usuario.value = '';
      contrasenha.value = '';
      contador--;
    }
  }
});

// Funcion de ingresar con Enter
const input = document.getElementById('contrasenha');
input.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById('boton-ingresar').click();
  }
});

// Funcion Mostrar Pokemones (FLIT CARD)
const mostrarPokemones = (allPokemon) => {
  let mostrar = '';
  for (let i = 0; i < allPokemon.length; i++) {
    let llamado = `<div class="maincontainer"><div class="thecard"><div id="pokemones" class="thefront">
                        <div class="contenedor-img">
                        <img src= "${allPokemon[i].imagen}" />
                        </div>
                        <div class="contenedor-info">
                        <p class="p-nombre">${allPokemon[i].nombre}</p>
                        <p class="p-numbertipo">${allPokemon[i].number}</p>
                        <p class="p-numbertipo">Tipo: ${allPokemon[i].tipo}</p></div></div>
                        <div id="pokemones" class="theback">
                        <table><thead><tr><th colspan="3" class="stylenombre">${allPokemon[i].nombre.toUpperCase()}</th></tr></thead>
                        <body><tr>
                        <td class="styleinfo">Altura:</td>
                        <td class="styleinfo">Peso:</td>
                        <td class="styleinfo">Huevo:</td>
                        </tr>
                        <tr>
                        <td class="styledato">${allPokemon[i].altura}</td>
                        <td class="styledato">${allPokemon[i].peso}</td>
                        <td class="styledato">${allPokemon[i].huevo}</td>
                        </tr>
                        <tr>
                        <td colspan="3" class="styleinfo">Debilidades:</td>
                        </tr>
                        <tr>
                        <td colspan="3" class="styledato"> ${allPokemon[i].debilidades}</td></tr>
                        <tr>
                        <td colspan="3" class="styleinfo">Frecuencia:</td>
                        </tr>
                        <tr>
                        <td colspan="3" class="styledato">${allPokemon[i].frecuencia}</td></tr>
                        </tbody></table>
                        </div></div></div>`;
    mostrar += llamado;
  }
  return mostrar;
};

// Función para ocultar
const ocultar = () => {
  ComboBoxTipo.classList.add('ocultarComboBox');
  ComboBoxDebilidad.classList.add('ocultarComboBox');
  ComboBoxPorcentaje.classList.add('ocultarComboBox');
  resultCantidad.classList.add('hide');
};

// Funcionalidad de Ordenar A-Z
selecAz.addEventListener('click', () => {
  allPokemones.innerHTML = mostrarPokemones(ordenarAz(pokemonNew));
  ocultar();
});

// Funcionaliad de ordenar Pokemones de Z-a
selecZa.addEventListener('click', () => {
  allPokemones.innerHTML = mostrarPokemones((ordenarAz(pokemonNew)).reverse());
  ocultar();
});

// Funcionalidad de ordenar Pokemones ascendentemente
selecAsc.addEventListener('click', () => {
  allPokemones.innerHTML = mostrarPokemones(ordenarAsc(pokemonNew));
  ocultar();
});

// Funcionalidad de ordenar Pokemones descendentemente
selecDesc.addEventListener('click', () => {
  allPokemones.innerHTML = mostrarPokemones((ordenarAsc(pokemonNew)).reverse());
  ocultar();
});

// Cerrar sesion 
cerrarPokemon.addEventListener('click', () => {
  usuario.value = '';
  contrasenha.value = '';
  BarraMenu.classList.add('hide');
  VistaInicio.classList.add('hide');
  vistaLogin.classList.remove('hide');
});

/* Haciendo Templates literales para pintar en ComboBox para tipo, debilidades y porcentaje */
const seleccionComboBoxTipo = document.getElementById('seleccion-tipo');
const seleccionComboBoxDebilidad = document.getElementById('seleccion-debilidad');
const seleccionOpcionComboBox2 = document.getElementById('seleccion-porc');

const pintarEnComboBox = (p1, p2) => {
  let template = '<option disabled="disabled" selected="selected">Seleccione una opción...</option>';
  for (let i = 0; i < p1.length; i++) {
    template += `<option value=${p1[i]}>${p1[i].toUpperCase()}</option>`;
  }
  p2.innerHTML = template;
};

/* Llamando a la función de buscar */
/* Haciendo el event target para buscar */
const obtenerNombre = document.getElementById('nombre');
obtenerNombre.addEventListener('input', event => {
  ocultar();
  const pokemonBuscado = buscarPokemonesPorNombre(pokemonNew, event.target.value.toLowerCase());
  allPokemones.innerHTML = mostrarPokemones(pokemonBuscado);
});
/* Funcion para texto de cantidad de pokemones filtrados */
const textoCantidad = (allPokemon, seleccionPropiedad, propiedad,texto) => {
  resultCantidad.classList.remove('hide'); 
  resultCantidad.innerHTML = `<div class="resultado-cantidad">La cantidad de pokemones  de ${texto} ${seleccionPropiedad} es de: ${filtrar(allPokemon, propiedad, seleccionPropiedad).length}.</div>`;
  allPokemones.innerHTML = `${mostrarPokemones(filtrar(allPokemon, propiedad, seleccionPropiedad))}`; 
};

/* Llamando a la función Filtrar */
/* Haciendo el event target para tipo */
seleccionComboBoxTipo.addEventListener('change', (event) => {
  const tipoSeleccionado = event.target.value;
  textoCantidad(pokemonNew, tipoSeleccionado, 'tipo','tipo');
});

/* Llamando a la función Debilidad */
/* Haciendo el event target para debilidad */
seleccionComboBoxDebilidad.addEventListener('change', (event) => {
  const debilidadSeleccionado = event.target.value;
  textoCantidad(pokemonNew, debilidadSeleccionado, 'debilidades','debilidad');
});
/* Llamando la funcion de porcentaje*/
/* Haciendo el event target para porcentaje */
seleccionOpcionComboBox2.addEventListener('change', (event) => {
  const porcentajeSeleccionado = event.target.value;
  resultCantidad.classList.remove('hide');
  resultCantidad.innerHTML = `<div class="resultado-cantidad">El porcentaje de Pokemones con ${porcentajeSeleccionado}km es de: ${((filtrar(pokemonNew, 'huevo', porcentajeSeleccionado).length / pokemonNew.length) * 100).toFixed(2)}%</div>`;
  allPokemones.innerHTML = `${mostrarPokemones(filtrar(pokemonNew, 'huevo', porcentajeSeleccionado))}`;
});