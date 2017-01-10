/**
 * MascotaController
 *
 * @description :: Server-side logic for managing mascotas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	nombre:{
        type:'string',
        required:true
    },fechaNacimiento:{
        type:'date'
    },paisNacimiento:{
        type:'string',
        enum:['Ecuador','Peru','Colombia']
    },
    idRaza:{
        model:'Raza',
        required:true
    }
};

