var sumandoUno = prompt('Coloca un número');
var sumandoDos = prompt('Coloca un segundo número');

function suma(numero1, numero2){
    var suma = parseInt(numero1) + parseInt(numero2);
    var resultado = `El resultado de suma es: ${suma}`;
    console.log(resultado);
}
function resta(numero1, numero2){
    var resta = parseInt(numero1) - parseInt(numero2);
    var resultado = `El resultado de suma es: ${resta}`;
    console.log(resultado);
}
function multi(numero1, numero2){
    var multi = parseInt(numero1) * parseInt(numero2);
    var resultado = `El resultado de suma es: ${multi}`;
    console.log(resultado);
}
function divi(numero1, numero2){
    var divi = parseInt(numero1) / parseInt(numero2);
    var resultado = `El resultado de suma es: ${divi}`;
    console.log(resultado);
}

suma(sumandoUno, sumandoDos);
resta(sumandoUno, sumandoDos);
multi(sumandoUno, sumandoDos);
divi(sumandoUno, sumandoDos);






/*
var miVarGlobal = 'Soy Global';
var nombre = 'Mauricio'

function saludar(nombre, apellido){
   var saludo = `Hola, mi nombre es ${nombre} ${apellido}`;
   console.log(saludo); 
}

saludar('Alan', 'Carmona');
*/
