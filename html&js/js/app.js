console.log('Hola mundo desde js');

var nombreCompleto;
var añoNacimiento;
var añoActual;
var edad;

nombreCompleto = prompt('Ingresa tu nombre completo');
añoNacimiento = prompt('Ingresa tu año de nacimiento');
añoActual = prompt('Ingresa año actual');

edad = añoActual - añoNacimiento;


alert('Hola' + nombreCompleto + ', tu edad actual es:' + edad);