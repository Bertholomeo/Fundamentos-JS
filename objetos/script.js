var alan = {
    nombre : 'Alan',
    apellido : 'Carmona',
    edad : 20,
    saludar : function(){
        console.log(`Mi nombre es ${alan.nombre}`);
    }
}

var viernes = {
    nombre : 'Viernes',
    raza : 'Shih-tzu',
    edad : 1,
    color : 'Cafe'
}

function colorPerro(perro){
    console.log(`El perro es de color: ${perro.color}`)
}

colorPerro(viernes)