/**
 * UsuarioController
 *
 * @description :: Server-side logic for managing Usuarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */



module.exports = {

    crearUsuario: function (req, res) {
        
        if(req.method=="POST"){
         var parametros=req.allParams();
            if(parametros.nombre && parametros.apellidos){
                                  return res.view('vistas/Error',{
            error:{
                descripcion:"Usted está por error en esta ruta, diríjase a Inicio",
                rawErrow:"Ruta equivocada",
                url:"/CrearUsuario"
            }
        });  
            }
            
        }
        else{
                    return res.view('vistas/Error',{
            error:{
                descripcion:"Usted está por error en esta ruta, diríjase a Inicio",
                rawErrow:"Ruta equivocada",
                url:"/CrearUsuario"
            }
        });
        }
        
        //   Se accede asi: /Usuario/crearUsuario


   

    }

};