/* Manejo del DOM */
//Valores del input
let usuario = document.getElementById('usuario');
let contrasenha = document.getElementById('contrasenha');
const obtenerNombre = document.getElementById('nombre');

//Vistas
const VistaLogin = document.getElementById('VistaLogin');
const VistaError = document.getElementById('VistaError');
const VistaInicio = document.getElementById('VistaInicio');
//Barra de menu
const BarraMenu = document.getElementById('barra-menu');
//Botones
const BotonIngresar = document.getElementById('BotonIngresar');
const botonBuscar = document.getElementById('botonBuscar');
const regresar = document.getElementById('regresar');
const selecAz =document.getElementById('az');
const selecZa =document.getElementById('za');
const selecAsc =document.getElementById('asc');
const selecDesc =document.getElementById('desc');
//ComboBox
const porTipo = document.getElementById('porTipo');
const porcentaje = document.getElementById('porcentaje');
//Variable de la Data
const pokemonNew = nuevaDataPokemones();

//Funcionalidad del Boton Ingresar
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

//Funcionalidad del boton regresar 
regresar.addEventListener('click', () => {
    obtenerNombre.value = '';
    allPokemones.classList.remove('hide');
    unPokemon.classList.add('hide');

});

const MaysPrimera = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//Funcion Buscar Pokemones
const buscarPorNombre = (allPokemon) => {
    let llamado = '';

    for (let i = 0; i < allPokemon.length; i++) {

        if (MaysPrimera(obtenerNombre.value) == allPokemon[i].nombre && i < allPokemon.length) {
            llamado = `<div id="especifico">
             <img src= "${allPokemon[i].imagen}"/></div>
             <div id="letras">
             <p><strong>Nombre:</strong> ${allPokemon[i].nombre}</p>
             <p><strong>Número:</strong> ${allPokemon[i].number}</p>
             <p><strong>Altura:</strong> ${allPokemon[i].altura}</p>
             <p><strong>Peso:</strong> ${allPokemon[i].peso}</p>
             <p><strong>caramelo</strong>: ${allPokemon[i].caramelo}</p>
             <p><strong>contador de Caramelos:</strong> ${allPokemon[i].contadorDeCaramelos}</p>
             <p><strong>Huevo:</strong> ${allPokemon[i].huevo}</p>
             <p><strong>Tipo:</strong> ${allPokemon[i].tipo}</p></div>`;
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
                        <div class="contenedor-img">
                        <img src= "${allPokemon[i].imagen}" />
                        </div>
                        <div class="contenedor-info">
                        <p class="p-nombre">${allPokemon[i].nombre}</p>
                        <p class="p-numbertipo">${allPokemon[i].number}</p>
                        <p class="p-numbertipo">Tipo: ${allPokemon[i].tipo}</p></div></div>`;
        mostrar += llamado;
    }
    return mostrar;
};
allPokemones.innerHTML = mostrarPokemones(pokemonNew);
//Funcionaliad de ordenar Pokemones de A-z
const ordenarAz = (allPokemon) => {
    allPokemon.sort((unPokemon, otroPokemon) => unPokemon.nombre.localeCompare(otroPokemon.nombre));
    return (allPokemon);
};

selecAz.addEventListener('click',()=>{
    allPokemones.innerHTML = mostrarPokemones(ordenarAz(pokemonNew));
});

//Funcionaliad de ordenar Pokemones de Z-a
selecZa.addEventListener('click',() =>{
    allPokemones.innerHTML = mostrarPokemones((ordenarAz(pokemonNew)).reverse());
});


//Funcionalidad de ordenar ascendentemente por frecuencia de aparicion

const ordenarAsc = (allPokemon) => {
    allPokemon.sort((unaMascota, otraMascota) => unaMascota.frecuencia - otraMascota.frecuencia);
    return (allPokemon);
}

selecAsc.addEventListener('click',() =>{
    allPokemones.innerHTML = mostrarPokemones(ordenarAsc(pokemonNew));
});

selecDesc.addEventListener('click',() =>{
    allPokemones.innerHTML = mostrarPokemones((ordenarAsc(pokemonNew)).reverse());
});



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

//Funcionalidad para mostrar los pokemones por sus tipos 

const mostrarPorTipos = (allPokemon,p2) => {
    const tipos = obtenerTipos(allPokemon);
    let mostrar = '';
    if (tipos.includes(p2)) {
        for (let i = 0; i < allPokemon.length; i++) {
            for (let j = 0; j < allPokemon[i].tipo.length; j++) {
                if (allPokemon[i].tipo[j].includes(p2)) {
                    let llamado = `<div id="pokemones">
                        <div class="contenedor-img">
                        <img src= "${allPokemon[i].imagen}" />
                        </div>
                        <div class="contenedor-info">
                        <p class="p-nombre">${allPokemon[i].nombre}</p>
                        <p class="p-numbertipo">${allPokemon[i].number}</p>
                        <p class="p-numbertipo">Tipo: ${allPokemon[i].tipo}</p></div></div>`;
                    mostrar += llamado;
                }

            }
        }

    }

    return mostrar;
}

/*console.log(obtenerTipos(pokemonNew)); */

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

//Funcionalidad para mostrar los pokemones por sus tipos 

const mostrarPorDebilidades = (allPokemon) => {
    const debilidades = obtenerDebilidades(allPokemon);
    let mostrar = '';
    if (debilidades.includes("Fire")) {
        for (let i = 0; i < allPokemon.length; i++) {
            for (let j = 0; j < allPokemon[i].debilidades.length; j++) {
                if (allPokemon[i].debilidades[j].includes("Fire")) {
                    let llamado = `<div id="pokemones">
                        <div class="contenedor-img">
                        <img src= "${allPokemon[i].imagen}" />
                        </div>
                        <div class="contenedor-info">
                        <p class="p-nombre">${allPokemon[i].nombre}</p>
                        <p class="p-numbertipo">${allPokemon[i].number}</p>
                        <p class="p-numbertipo">Tipo: ${allPokemon[i].tipo}</p></div></div>`;
                    mostrar += llamado;
                }

            }
        }

    }

    return mostrar;
}

     //Funcionalidad de Obterner porcentaje de huevos a eclosionar 
     const obtenerPorcentaje = (allPokemon) =>{
        let km =[];
        for (let i =0; i<allPokemon.length;i++){
                km[i]= allPokemon[i].huevo;
        }
        const distintos = [...new Set(km)];
        return(distintos);

     }
     const  mostrarPorcentaje =(allPokemon,p2)=>{
        const distancia = obtenerPorcentaje(allPokemon);
        let mostrar = '';
            for (let i = 0; i < allPokemon.length; i++) {
                
                    if (allPokemon[i].huevo.includes(p2)) {
                        let llamado = `<div id="pokemones">
                            <div class="contenedor-img">
                            <img src= "${allPokemon[i].imagen}" />
                            </div>
                            <div class="contenedor-info">
                            <p class="p-nombre">${allPokemon[i].nombre}</p>
                            <p class="p-numbertipo">${allPokemon[i].number}</p>
                            <p class="p-numbertipo">Tipo: ${allPokemon[i].tipo}</p></div></div>`;
                        mostrar += llamado;
                    }    
            }
    
        return mostrar;
     }

     

const salir = () => {
    usuario.value = '';
    contrasenha.value = '';
    BarraMenu.classList.add('hide');
    VistaInicio.classList.add('hide');
    VistaLogin.classList.remove('hide');
}

/*Haciendo Templates literales*/
const seleccionOpcionComboBox = document.getElementById('seleccion-tipo');
const tiposPokemones = obtenerTipos(pokemonNew);

const pintarEnComboBox = (p1, p2) => {
    let template = '<option>Seleccione una opción...</option>';
    for (let i = 0; i< p1.length; i++) {
     template += `<option value=${p1[i]}>${p1[i].toUpperCase()}</option>`
    }
    p2.innerHTML = template;
   }

   porTipo.addEventListener('click', () => {
    pintarEnComboBox(tiposPokemones, seleccionOpcionComboBox);
   });

/*Haciendo el event target*/

seleccionOpcionComboBox.addEventListener('change', (event) => {

    const tipoSeleccionado = event.target.value;

    allPokemones.innerHTML = `${mostrarPorTipos(pokemonNew,tipoSeleccionado)}`;
});


/*Haciendo Templates literales para el porcentaje*/
const seleccionOpcionComboBox2 = document.getElementById('seleccion-porc');
const kmPokemones = obtenerPorcentaje(pokemonNew);

   porcentaje.addEventListener('click', () => {
    pintarEnComboBox(kmPokemones, seleccionOpcionComboBox2);
   });

/*Haciendo el event target*/

seleccionOpcionComboBox2.addEventListener('change', (event) => {

    const seleccionado = event.target.value;

    allPokemones.innerHTML = `${mostrarPorcentaje(pokemonNew,seleccionado)}`;
});



