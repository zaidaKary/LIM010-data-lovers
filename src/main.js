/* Manejo del DOM */
//Valores del input
const usuario = document.getElementById('usuario');
const contrasenha = document.getElementById('contrasenha');
const obtenerNombre = document.getElementById('nombre');

//Vistas
const VistaLogin = document.getElementById('VistaLogin');
const VistaInicio = document.getElementById('VistaInicio');
const VistaError = document.getElementById('VistaError');
//Barra de menu
const BarraMenu = document.getElementById('barra-menu');
//Botones
const BotonIngresar = document.getElementById('BotonIngresar');
const botonBuscar = document.getElementById('botonBuscar');

//Variable de la Data
const pokemonNew = nuevaDataPokemones();

//Funcionalidad del Boton Ingresar
let contador = 2;

BotonIngresar.addEventListener('click', () => {
    if (contrasenha.value === '' && usuario.value === '') {
        contrasenhaIncorrecta.innerHTML = '<strong>Por favor, ingrese su usuario y contraseña.</strong>';
    }
    else if (contrasenha.value === '') {
        contrasenhaIncorrecta.innerHTML = '<strong>Por favor, ingrese su contraseña.</strong>';
        document.getElementById('usuario').value = '';
    }
    else if (usuario.value === '') {
        contrasenhaIncorrecta.innerHTML = '<strong>Por favor, ingrese su usuario.</strong>';
        document.getElementById('contrasenha').value = '';
    }
    else if (usuario.value === '1' && contrasenha.value === '1') {
        VistaLogin.classList.add('hide');
        VistaInicio.classList.remove('hide');
        BarraMenu.classList.remove('barra-menu');
    } else {
        if (contador == 0) {
            VistaLogin.classList.add('hide');
            VistaError.classList.remove('hide');
        } else {
            contrasenhaIncorrecta.innerHTML = '<strong>Datos incorrectos, le quedan ' + contador + ' intento(s)</strong>';
            usuario.value = '';
            contrasenha.value = '';
            contador--;
        }
    }
});

//Funcionalidad del Boton Buscar
botonBuscar.addEventListener('click', () => {
    uno.innerHTML = buscarPorNombre(pokemonNew);
    allPokemones.classList.add('hide');
    unPokemon.classList.remove('hide');
});

//Funcion Buscar Pokemones
const buscarPorNombre = (allPokemon) => {
    let llamado = '';

    for (let i = 0; i < allPokemon.length; i++) {

        if (obtenerNombre.value == allPokemon[i].nombre && i < allPokemon.length) {
            llamado = `<div>
             <img src= "${allPokemon[i].imagen}" />
             <p>Nombre: ${allPokemon[i].nombre}</p>
             <p>Número: ${allPokemon[i].number}</p>
             <p>Altura: ${allPokemon[i].altura}</p>
             <p>Peso: ${allPokemon[i].peso}</p>
             <p>caramelo: ${allPokemon[i].caramelo}</p>
             <p>contador de Caramelos: ${allPokemon[i].contadorDeCaramelos}</p>
             <p>Huevo: ${allPokemon[i].huevo}</p>
             <p>Tipo: ${allPokemon[i].tipo}</p></div>`;
            break;
        } else {
            llamado = "No se encontraron resultados";
        }
    }
    return llamado
};

//Funcion Mostrar Pokemones
const mostrarPokemones = (allPokemon) => {

    let mostrar = '';
    for (let i = 0; i < allPokemon.length; i++) {
        let llamado = `<div id="pokemones">
                        <img src= "${allPokemon[i].imagen}" />
                        <p class="p-nombre">${allPokemon[i].nombre}</p>
                        <p class="p-number">${allPokemon[i].number}</p>
                        <p class="p-tipo">Tipo: ${allPokemon[i].tipo}</p></div>`;
        mostrar += llamado;
    }
    return mostrar;
};
allPokemones.innerHTML = mostrarPokemones(pokemonNew);
