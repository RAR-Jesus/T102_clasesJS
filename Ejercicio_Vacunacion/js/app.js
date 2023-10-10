// Paso 1: Definir las variables de entrada y uso interno del algoritmo

let nombreCompleto;
let edad;
let genero;
let añoNacimiento, añoActual;
let viveNortePais;
let embarazada;
let tieneNueveSemanas;


// Paso 2. Solicitar datos al usuario

nombreCompleto = prompt('Ingrese su nombre completo');
añoNacimiento = Number(prompt('Ingresa tu año de nacimiento'));
añoActual = Number(prompt('Ingresa el año actual'));
genero = prompt('Selecciona tu genero:  F=Femenino, M=Masculino');
viveNortePais = prompt('¿Vives en el norte del pais? Respuesta: S o N');

// Paso 3. Desarrollar la logica

if(nombreCompleto !== '' && !isNaN(añoNacimiento) && !isNaN(añoActual) && genero !== '' && viveNortePais !== '')
{
    edad = añoActual - añoNacimiento;

    //validamos si es mayor de edad
    if(edad < 18){
        alert(`Lo siento ${nombreCompleto}, aun no eres mayor de edad y no puedes vacunarte.`)
    }
    else{
        if(viveNortePais.toUpperCase() === 'S')
        {
            if(genero.toUpperCase() === 'F')
            {
                embarazada = prompt('¿Estas embarazada? Respuesta: S o  N')

                if(embarazada.toUpperCase() === 'S'){

                    tieneNueveSemanas = prompt('¿Tiene mas de nueve semanas de gestacion? Respuesta S o N')

                    if(tieneNueveSemanas.toUpperCase() === 'S')
                    {
                        alert('Lo sientimos, pero no puedes vacunarte')
                    }else
                    {
                        alert('Puedes vacunarte')
                    }
                }
            }
        }
    }
}else{
    alert('Te faltaron datos por ingresar, intentalo nuevamente :)')
}


