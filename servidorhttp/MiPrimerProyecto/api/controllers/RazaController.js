/**
 * RazaController
 *
 * @description :: Server-side logic for managing razas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	attributes:{
        nombre:{
            type:'string',
            enum:['Bulldog','Chihuahua','Pitbull'],
            required:true
        },

    // Mascotas->es el nombre en plural del modelo a relacionarse
    mascotas: {
        //Collection->Nombre del modelo en Sails
      collection: 'Mascota',
        //Via: es el campo por el campo vamos a relacionar, es el equivalente al Foreign Key que se usa en bases relacionales. No hay FK en bases no relacionales
      via: 'idRaza'
    }
    }
};

