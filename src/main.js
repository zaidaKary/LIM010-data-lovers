/* Manejo del DOM */
//Valores del input
const usuario = document.getElementById('usuario');
const contrasenha = document.getElementById('contrasenha');
const obtenerNombre = document.getElementById('nombre');


//Vistas
const VistaLogin = document.getElementById('VistaLogin');
const VistaInicio = document.getElementById('VistaInicio');
const VistaError = document.getElementById('VistaError');

//Botones
const BotonIngresar = document.getElementById('BotonIngresar');
const botonBuscar = document.getElementById('botonBuscar');

//Funcionalidad del Boton Ingresar
let contador = 2;

BotonIngresar.addEventListener('click', () => {
    if(contrasenha.value === '' && usuario.value === ''){
        contrasenhaIncorrecta.innerHTML = '<strong>Por favor, ingrese su usuario y contraseña.</strong>';
    }
    else if(contrasenha.value === ''){
        contrasenhaIncorrecta.innerHTML = '<strong>Por favor, ingrese su contraseña.</strong>';
        document.getElementById('usuario').value = '';
    }
    else if(usuario.value === ''){
        contrasenhaIncorrecta.innerHTML = '<strong>Por favor, ingrese su usuario.</strong>';
        document.getElementById('contrasenha').value = '';
    }
    else if(usuario.value === '1' && contrasenha.value === '1'){
        VistaLogin.classList.add('hide');
        inicio.classList.remove('hide');
    }else{
        if(contador==0){
            VistaLogin.classList.add('hide');
            vistaError.classList.remove('hide');
        }else{
            contrasenhaIncorrecta.innerHTML = '<strong>Datos incorrectos, le quedan '+ contador +' intento(s)</strong>';
            usuario.value = '';
            contrasenha.value = '';
            contador--;
        }
    }

    const pokemonNew= nuevaDataPokemones();

    //Funcionalidad del botonBuscar
    botonBuscar.addEventListener('click', () => {
        
           uno.innerHTML = buscarPorNombre(pokemonNew);
           allPokemones.classList.add('hide');
           unPokemon.classList.remove('hide');
        
           
               

       }

      
    
    );
     
    const buscarPorNombre = (allPokemon) =>{
        let llamado = '';

        for(let i =0; i<allPokemon.length;i++){
            
            if(obtenerNombre.value == allPokemon[i].nombre && i< allPokemon.length){
             llamado=`<div>
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
            }else{
                llamado = "No se encontraron resultados";
               
            }
        }
        return llamado
    };
        
    

    //INICIO 
   
   


    const mostrarPokemones = (allPokemon) => {
  
        let mostrar = '';
        for(i=0;i<allPokemon.length;i++){
            let llamado=`<div>
                        <img src= "${allPokemon[i].imagen}" />
                        <p>${allPokemon[i].nombre}</p>
                        <p>${allPokemon[i].number}</p>
                        <p>Tipo: ${allPokemon[i].tipo}</p></div>`;
            mostrar += llamado;
        }
        return mostrar;
    };
allPokemones.innerHTML= mostrarPokemones(pokemonNew);
});
