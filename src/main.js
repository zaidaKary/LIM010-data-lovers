/* Manejo del DOM */

//Valores del input de usuario y contraseña
let usuario = document.getElementById('usuario');
let contrasenha = document.getElementById('contrasenha');
//Vistas
const VistaLogin = document.getElementById('VistaLogin');
const VistaError = document.getElementById('VistaError');
const VistaInicio = document.getElementById('VistaInicio');
//Barra de menu
const BarraMenu = document.getElementById('barra-menu');
//Botones
const BotonIngresar = document.getElementById('BotonIngresar');
//Botones de menu
const selecAz = document.getElementById('az');
const selecZa = document.getElementById('za');
const selecAsc = document.getElementById('asc');
const selecDesc = document.getElementById('desc');
//Botones de menu ComboBox
const porTipo = document.getElementById('porTipo');
const porDebilidad = document.getElementById('porDebilidad');
//ComboBox para ocultar
const ComboBoxTipo = document.getElementById('ComboBoxFiltrarTipo');
const ComboBoxDebilidad = document.getElementById('ComboBoxFiltrarDebilidad');
const ComboBoxPorcentaje = document.getElementById('comboBoxPorcentaje');
//Mensaje de cantidad y porcentaje de pokemones 
const resultCantidad = document.getElementById('info');
//Porcentaje
const porcentaje = document.getElementById('porcentaje');
//Variable de la Data
const pokemonNew = nuevaDataPokemones();
//Cerrar sesion
const cerrarPokemon = document.getElementById('cerrar');

//Funcionalidad del Boton Ingresar Usuario y Contraseña
let contador = 0;
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
        BarraMenu.classList.remove('hide');
        BarraMenu.classList.remove('barra-menu');
        ComboBoxTipo.classList.add('ocultarComboBox');
        ComboBoxDebilidad.classList.add('ocultarComboBox');
        ComboBoxPorcentaje.classList.add('ocultarComboBox');

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

//Funcion de ingresar con Enter
const input = document.getElementById('contrasenha');
input.addEventListener("keyup", (event) => {

    if (event.keyCode === 13) {

        event.preventDefault();

        document.getElementById('BotonIngresar').click();
    }
});

//Funcion Mostrar Pokemones (FLIT CARD)
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
                        <tbody><tr>
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
allPokemones.innerHTML = mostrarPokemones(pokemonNew);

//Funcionalidad de Ordenar A-Z
selecAz.addEventListener('click', () => {
    allPokemones.innerHTML = mostrarPokemones(ordenarAz(pokemonNew));
    ComboBoxTipo.classList.add('ocultarComboBox');
    ComboBoxDebilidad.classList.add('ocultarComboBox');
    ComboBoxPorcentaje.classList.add('ocultarComboBox');
    info.classList.add('hide');
});

//Funcionaliad de ordenar Pokemones de Z-a
selecZa.addEventListener('click', () => {
    allPokemones.innerHTML = mostrarPokemones((ordenarAz(pokemonNew)).reverse());
    ComboBoxTipo.classList.add('ocultarComboBox');
    ComboBoxDebilidad.classList.add('ocultarComboBox');
    ComboBoxPorcentaje.classList.add('ocultarComboBox');
    info.classList.add('hide');
});

//Funcionalidad de ordenar Pokemones ascendentemente
selecAsc.addEventListener('click', () => {
    allPokemones.innerHTML = mostrarPokemones(ordenarAsc(pokemonNew));
    ComboBoxTipo.classList.add('ocultarComboBox');
    ComboBoxDebilidad.classList.add('ocultarComboBox');
    ComboBoxPorcentaje.classList.add('ocultarComboBox');
    info.classList.add('hide');
});

//Funcionalidad de ordenar Pokemones descendentemente
selecDesc.addEventListener('click', () => {
    allPokemones.innerHTML = mostrarPokemones((ordenarAsc(pokemonNew)).reverse());
    ComboBoxTipo.classList.add('ocultarComboBox');
    ComboBoxDebilidad.classList.add('ocultarComboBox');
    ComboBoxPorcentaje.classList.add('ocultarComboBox');
    info.classList.add('hide');
});

//Cerrar sesion 
cerrarPokemon.addEventListener('click', () => {
    usuario.value = '';
    contrasenha.value = '';
    BarraMenu.classList.add('hide');
    VistaInicio.classList.add('hide');
    VistaLogin.classList.remove('hide');
});

/*Haciendo Templates literales para pintar en ComboBox para tipo, debilidades y porcentaje*/
const seleccionComboBoxTipo = document.getElementById('seleccion-tipo');
const tiposPokemones = obtenerTipos(pokemonNew);

const seleccionComboBoxDebilidad = document.getElementById('seleccion-debilidad');
const debilidadPokemones = obtenerDebilidades(pokemonNew);

const pintarEnComboBox = (p1, p2) => {
    let template = '<option disabled selected>Seleccione una opción...</option>';
    for (let i = 0; i < p1.length; i++) {
        template += `<option value=${p1[i]}>${p1[i].toUpperCase()}</option>`
    }
    p2.innerHTML = template;
}

porTipo.addEventListener('click', () => {
    pintarEnComboBox(tiposPokemones, seleccionComboBoxTipo);
    ComboBoxTipo.classList.remove('ocultarComboBox');
    ComboBoxDebilidad.classList.add('ocultarComboBox');
    ComboBoxPorcentaje.classList.add('ocultarComboBox');
    resultCantidad.classList.add('hide');


});
porDebilidad.addEventListener('click', () => {
    pintarEnComboBox(debilidadPokemones, seleccionComboBoxDebilidad);
    ComboBoxDebilidad.classList.remove('ocultarComboBox');
    ComboBoxTipo.classList.add('ocultarComboBox');
    ComboBoxPorcentaje.classList.add('ocultarComboBox');
    resultCantidad.classList.add('hide');
});

const seleccionOpcionComboBox2 = document.getElementById('seleccion-porc');
const kmPokemones = obtenerPorcentaje(pokemonNew);

porcentaje.addEventListener('click', () => {
    pintarEnComboBox(kmPokemones, seleccionOpcionComboBox2);
    ComboBoxTipo.classList.add('ocultarComboBox');
    ComboBoxDebilidad.classList.add('ocultarComboBox');
    ComboBoxPorcentaje.classList.remove('ocultarComboBox');
    resultCantidad.classList.add('hide');
});

/*Llamando a la función de buscar*/
/*Haciendo el event target para buscar*/
const obtenerNombre = document.getElementById('nombre');
obtenerNombre.addEventListener('input', event => {
    const pokemonBuscado = buscarPokemones(pokemonNew, event.target.value.toLowerCase());
    console.log(pokemonBuscado)
    allPokemones.innerHTML = mostrarPokemones(pokemonBuscado);
});

/*Llamando a la función Filtrar*/
/*Haciendo el event target para tipo*/
seleccionComboBoxTipo.addEventListener('change', (event) => {
    const tipoSeleccionado = event.target.value;
    info.classList.remove('hide'); 
    info.innerHTML = `<div class="resultado-cantidad">La cantidad de pokemones  de tipo ${tipoSeleccionado} es de: ${filtrarTipos(pokemonNew, tipoSeleccionado).length}.</div>`;
    allPokemones.innerHTML = `${mostrarPokemones(filtrarTipos(pokemonNew,tipoSeleccionado))}`; 
});

/*Llamando a la función Debilidad*/
/*Haciendo el event target para debilidad*/
seleccionComboBoxDebilidad.addEventListener('change', (event) => {
    const debilidadSeleccionado = event.target.value;
    info.classList.remove('hide');
    info.innerHTML = `<div class="resultado-cantidad">La cantidad de pokemones con  debilidad ${debilidadSeleccionado} es de: ${filtrarDebilidades(pokemonNew, debilidadSeleccionado).length}.</div>`;
    allPokemones.innerHTML = `${mostrarPokemones(filtrarDebilidades(pokemonNew,debilidadSeleccionado))}`;
});
/* Llamando la funcion de porcentaje*/
/*Haciendo el event target para porcentaje*/
seleccionOpcionComboBox2.addEventListener('change', (event) => {
    const porcentajeSeleccionado = event.target.value;
    info.classList.remove('hide');
    info.innerHTML = `<div class="resultado-cantidad">El porcentaje de Pokemones con ${porcentajeSeleccionado}km es de: ${((filtrarPorcentaje(pokemonNew, porcentajeSeleccionado).length / pokemonNew.length) * 100).toFixed(2)}%</div>`;
    allPokemones.innerHTML = `${mostrarPokemones(filtrarPorcentaje(pokemonNew, porcentajeSeleccionado))}`;
});