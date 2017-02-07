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
  var usuarioCrear={
      nombres:parametros.nombres,
      apellidos:parametros.apellidos,
      correo:parametros.correo
  }
                
                if(usuarioCrear.correo==""){
                    delete usuarioCrear.correo
                }
                
                Usuario.create({
      nombres:parametros.nombres,
      apellidos:parametros.apellidos,
      correo:parametros.correo
  }).exec(function(err, usuarioCreado){
                    
                    if(err){
                                            return res.view('vistas/Error',{
            error:{
                descripcion:"Usted está por error en esta ruta, diríjase a Inicio",
                rawErrow:err,
                url:"/CrearUsuario"
            }
        });
                    }
                    return res.view("vistas/Usuario/crearUsuario");
                })
            }else{
                                                  return res.view('vistas/Error',{
            error:{
                descripcion:"Llena todos los parametros apellidos y nombres",
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