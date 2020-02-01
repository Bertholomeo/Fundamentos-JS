// Esto es un comentario
/*
Esto es un comentario multilinea
y puedo dar Enter y no pasa nada
*/
alert('hola mundo!!!')
var miPrimerVariable;

miPrimerVariable = 'Esto es el contenido de mi variable';

var miSegundaVariable = 'Este es el contenido de mi segunda variable';

var numeroUno, numeroDos, resultado, resultadoArreglado, resultadoEnNumero;

numeroUno = 10;
numeroDos = 20;
resultado = (numeroUno * numeroDos)/3;
resultadoArreglado = resultado.toFixed(2);
resultadoEnNumero = parseFloat(resultadoArreglado);

/*
TRABAJANDO CON STRINGS = CADENAD DE TEXTO
 */

 var nombre, apellidoP, apellidoM, saludo, nombreMayus, nombreBajas, letrasTotales, primeraLetra, str;
 nombre = 'Alan';
 apellidoP = 'Carmona';
 apellidoM = 'Carreño';

 //saludo = 'Hola mi nombre es: ' + nombre +  '' apellidoP +  '' + apellidoM;

 saludo = `Hola mi nombre es ${nombre} ${apellidoP} ${apellidoM}`; 

 nombreMayus = nombre.toUpperCase(); // convierte a mayus
 nombreBajas = nombre.toLocaleLowerCase(); // convierte a minus
 letrasTotales = nombre.length; // devuelve cantidad de carácteres
 primeraLetra = nombre.charAt(0); // devuelve el caracter del numero
 str = nombre.substr(0,2); // sustrae caracteres de un string

