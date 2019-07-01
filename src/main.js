/* Manejo del DOM */
//console.log(pokemon());
const pokedata = POKEMON.pokemon;

//Valores del input
const usuario = document.getElementById('usuario');
const contrasenha = document.getElementById('contrasenha');

//Vistas
const VistaLogin = document.getElementById('VistaLogin');
const VistaInicio = document.getElementById('VistaInicio');
const VistaError = document.getElementById('VistaError');

//Botones
const BotonIngresar = document.getElementById('BotonIngresar');
const p = document.getElementById('p');

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
    else if(usuario.value === 'LABORATORIA' && contrasenha.value === 'LABORATORIA'){
        VistaLogin.classList.add('hide');
        VistaInicio.classList.remove('hide');
    }else{
        if(contador==0){
            VistaLogin.classList.add('hide');
            VistaError.classList.remove('hide');
        }else{
            contrasenhaIncorrecta.innerHTML = '<strong>Datos incorrectos, le quedan '+ contador +' intento(s)</strong>';
            usuario.value = '';
            contrasenha.value = '';
            contador--;
        }
    }
});
const mostrarData = (pokemon) =>{
    let mostrar = '';
    for(i=0;i<pokemon.length;i++){
        let llamado=`<div>
                    <img src= "${pokemon[i].img}" />
                    <p>${pokemon[i].img}</p></div>
                    <p>${pokemon[i].type}</p>`;
        mostrar += llamado;
    }
    return mostrar;
};

p.innerHTML= mostrarData(pokedata);