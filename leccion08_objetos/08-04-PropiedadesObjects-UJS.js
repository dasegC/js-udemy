let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log( persona.nombre);
console.log( persona['apellido'] );

//for in - Recorrer cada una de las propiedades del objeto
for( nombrePropiedad in persona){
    console.log( nombrePropiedad );// Accede a las prop del obj
    console.log( persona[nombrePropiedad]); // Accede a los val de prop
}

