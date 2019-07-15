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

//Ingresar con Enter
const input = document.getElementById('contrasenha');
input.addEventListener("keyup", (event) => {

  if (event.keyCode === 13) {

    event.preventDefault();

    document.getElementById('BotonIngresar').click();
  }
});
//Boton de buscador con enter
const btnBuscador = document.getElementById('nombre');
btnBuscador.addEventListener("keyup",(event) => {
    if (event.keyCode === 13) {

        event.preventDefault();
    
        document.getElementById('botonBuscar').click();
      }
})

//Funcionalidad del Boton Buscar
botonBuscar.addEventListener('click', () => {
    uno.innerHTML = buscarPorNombre(pokemonNew);
    allPokemones.classList.add('hide');
    unPokemon.classList.remove('hide');
    resultCantidad.classList.add('hide');
    ComboBoxTipo.classList.add('ocultarComboBox');
    ComboBoxDebilidad.classList.add('ocultarComboBox');
    ComboBoxPorcentaje.classList.add('ocultarComboBox');
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
        let llamado = `<div class="maincontainer"><div class="thecard"><div id="pokemones" class="thefront">
                        <div class="contenedor-img">
                        <img src= "${allPokemon[i].imagen}" />
                        </div>
                        <div class="contenedor-info">
                        <p class="p-nombre">${allPokemon[i].nombre}</p>
                        <p class="p-numbertipo">${allPokemon[i].number}</p>
                        <p class="p-numbertipo">Tipo: ${allPokemon[i].tipo}</p></div></div>
                        <div id="pokemones" class="theback">
                        <table>
                        <thead>
                        <tr>
                        <th colspan="3" class="stylenombre">${allPokemon[i].nombre.toUpperCase()}</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
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
selecAz.addEventListener('click',()=>{
    allPokemones.innerHTML = mostrarPokemones(ordenarAz(pokemonNew));
    ComboBoxTipo.classList.add('ocultarComboBox');
    ComboBoxDebilidad.classList.add('ocultarComboBox');
    ComboBoxPorcentaje.classList.add('ocultarComboBox');
    info.classList.add('hide'); 
});

//Funcionaliad de ordenar Pokemones de Z-a
selecZa.addEventListener('click',() =>{
    allPokemones.innerHTML = mostrarPokemones((ordenarAz(pokemonNew)).reverse());
    ComboBoxTipo.classList.add('ocultarComboBox');
    ComboBoxDebilidad.classList.add('ocultarComboBox');
    ComboBoxPorcentaje.classList.add('ocultarComboBox');
    info.classList.add('hide'); 
});
//Funcionalidad de ordenar Pokemones ascendentemente
selecAsc.addEventListener('click',() =>{
    allPokemones.innerHTML = mostrarPokemones(ordenarAsc(pokemonNew));
    ComboBoxTipo.classList.add('ocultarComboBox');
    ComboBoxDebilidad.classList.add('ocultarComboBox');
    ComboBoxPorcentaje.classList.add('ocultarComboBox');
    info.classList.add('hide'); 
});
//Funcionalidad de ordenar Pokemones descendentemente
selecDesc.addEventListener('click',() =>{
    allPokemones.innerHTML = mostrarPokemones((ordenarAsc(pokemonNew)).reverse());
    ComboBoxTipo.classList.add('ocultarComboBox');
    ComboBoxDebilidad.classList.add('ocultarComboBox');
    ComboBoxPorcentaje.classList.add('ocultarComboBox');
    info.classList.add('hide'); 
});

//Funcionalidad para mostrar los pokemones por sus tipos 

const mostrarPorTipos = (allPokemon,p2) => {
    let mostrar = [],cont =0;
        for (let i = 0; i < allPokemon.length; i++) {
            for (let j = 0; j < allPokemon[i].tipo.length; j++) {
                if (allPokemon[i].tipo[j].includes(p2)) {
                   mostrar.push(allPokemon[i]);
                   cont++;
                }

            }
        }
    info.classList.remove('hide');       
    texto.innerHTML = `<div class="resultado-cantidad">La cantidad de pokemones  de tipo ${p2} es de: ${cont}.</div>`;
    return mostrar;
}

//Funcionalidad para mostrar los pokemones por sus tipos 

const mostrarPorDebilidades = (allPokemon,p2) => {
   
    let mostrar = [], cont =0;
        for (let i = 0; i < allPokemon.length; i++) {
            for (let j = 0; j < allPokemon[i].debilidades.length; j++) {
                if (allPokemon[i].debilidades[j].includes(p2)) {
                    mostrar.push(allPokemon[i]);
                    cont++;
                 }

            }
        }  
    info.classList.remove('hide');       
    texto.innerHTML = `<div class="resultado-cantidad">La cantidad de pokemones con  debilidad ${p2} es de: ${cont}.</div>`;
    return mostrar;
}

 
     const  mostrarPorcentaje =(allPokemon,p2)=>{
        let mostrar = [], cont =0;
            for (let i = 0; i < allPokemon.length; i++) {
              if (allPokemon[i].huevo.includes(p2)) {
                   mostrar.push(allPokemon[i]);
                   cont++;
                }
            }
        
        info.classList.remove('hide');    
        texto.innerHTML = `<div class="resultado-cantidad">El porcentaje de Pokemones con ${p2}km es de: ${((cont/allPokemon.length)*100).toFixed(2)}%</div>`;
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
const seleccionComboBoxTipo = document.getElementById('seleccion-tipo');
const tiposPokemones = obtenerTipos(pokemonNew);
const seleccionComboBoxDebilidad = document.getElementById('seleccion-debilidad');
const debilidadPokemones = obtenerDebilidades(pokemonNew);

const pintarEnComboBox = (p1, p2) => {
    let template = '<option>Seleccione una opción...</option>';
    for (let i = 0; i< p1.length; i++) {
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

/*Haciendo el event target*/

seleccionComboBoxTipo.addEventListener('change', (event) => {

    const tipoSeleccionado = event.target.value;

    allPokemones.innerHTML = `${mostrarPokemones(mostrarPorTipos(pokemonNew,tipoSeleccionado))}`;
});

seleccionComboBoxDebilidad.addEventListener('change', (event) => {

    const debilidadSeleccionado = event.target.value;

    allPokemones.innerHTML = `${mostrarPokemones(mostrarPorDebilidades(pokemonNew,debilidadSeleccionado))}`;
})
/*Haciendo Templates literales para el porcentaje*/
const seleccionOpcionComboBox2 = document.getElementById('seleccion-porc');
const kmPokemones = obtenerPorcentaje(pokemonNew);

porcentaje.addEventListener('click', () => {
    pintarEnComboBox(kmPokemones, seleccionOpcionComboBox2);
    ComboBoxTipo.classList.add('ocultarComboBox');
    ComboBoxDebilidad.classList.add('ocultarComboBox');
    ComboBoxPorcentaje.classList.remove('ocultarComboBox');
    resultCantidad.classList.add('hide');
   });

/*Haciendo el event target*/

seleccionOpcionComboBox2.addEventListener('change', (event) => {

    const seleccionado = event.target.value;

    allPokemones.innerHTML = `${mostrarPokemones(mostrarPorcentaje(pokemonNew,seleccionado))}`;
});



