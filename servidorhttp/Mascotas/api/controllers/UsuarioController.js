/**
 * UsuarioController
 *
 * @description :: Server-side logic for managing Usuarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */



module.exports = {

    crearUsuario: function (req, res) {

        if (req.method == "POST") {

            var parametros = req.allParams();

            if (parametros.nombres && parametros.apellidos) {

                var usuarioCrear = {
                    nombres: parametros.nombres,
                    apellidos: parametros.apellidos,
                    correo: parametros.correo
                }

                if (usuarioCrear.correo == "") {
                    delete usuarioCrear.correo
                }

                Usuario.create(usuarioCrear).exec(function (err, usuarioCreado) {

                    if (err) {
                        return res.view('vistas/Error', {
                            error: {
                                desripcion: "Fallo al crear el Usuario",
                                rawError: err,
                                url: "/CrearUsuario"
                            }

                        });
                    }
                    
                         Usuario.find().exec(function(err,usuariosEncontrados){
         if(errorIndefinido){
             res.view('vistas/Error',{
            error:{
                desripcion:"Hay un error en la carga de los usuarios",
                rawError:errorIndefinido,
                url:"/ListarUsuarios"
            }
        });
         }
         
            
             res.view('vistas/Usuario/ListarUsuarios',{
                 usuarios:usuariosEncontrados
        }); 
         
     })

                    return res.view('vistas/Usuario/crearUsuario');


                })


            } else {

                return res.view('vistas/Error', {
                    error: {
                        desripcion: "Llena todos los parametros, apellidos y nombres",
                        rawError: "Fallo en envio de parametros",
                        url: "/CrearUsuario"
                    }

                });

            }


        } else {

            return res.view('vistas/Error', {
                error: {
                    desripcion: "Error en el uso del Metodo HTTP",
                    rawError: "HTTP Invalido",
                    url: "/CrearUsuario"
                }
            });

        }

    },
    BorrarUsuario:function(req,res){
        var parametros=req.allParams();
        
        if(parametros.id){
           Usuario.destroy({
               id:parametros.id
           }) .exec(function(errorInesperado,UsuarioRemovido){
               
               if(errorInesperado){
                   
                                       return res.view('vistas/Error',{
            error:{
                desripcion:"hay un error inesperado",
                rawError:errorInesperado,
                url:"/ListarUsuarios"
            }
        });
               }
               
                    Usuario.find().exec(function(errorIndefinido,usuariosEncontrados){
         if(errorIndefinido){
             res.view('vistas/Error',{
            error:{
                desripcion:"Hay un error en la carga de los usuarios",
                rawError:errorIndefinido,
                url:"/ListarUsuarios"
            }
        });
         }
         
            
             res.view('vistas/Usuario/ListarUsuarios',{
                 usuarios:usuariosEncontrados
        }); 
         
     })
               
           })
        }else{
                                                   return res.view('vistas/Error',{
            error:{
                desripcion:"Necesitamos el ID",
                rawError:"No envia ID",
                url:"/ListarUsuarios"
            }
        });
        }
    },
    editarUsuario:function(req,res){
         var parametros=req.allParams();
        
        if(parametros.id&&(parametros.nombres||parametros.apellidos||parametros.correo)){
            
            var usuarioAEditar={
                nombres:parametros.nombres,
                apellidos:parametros.apellidos,
                correo:parametros.correo
            }
            
            if(usuarioAEditar.nombres==]""){
                delete usuarioAEditar.nombres
            }
            if(usuarioAEditar.apellidos==]""){
                delete usuarioAEditar.apellidos
            }
            if(usuarioAEditar.correo==]""){
                delete usuarioAEditar.correo
            }
            
            
            
           Usuario.update({
               id:parametros.id
           },usuarioAEditar) .exec(function(errorInesperado,UsuarioRemovido){
               
               if(errorInesperado){
                   
                                       return res.view('vistas/Error',{
            error:{
                desripcion:"hay un error inesperado",
                rawError:errorInesperado,
                url:"/ListarUsuarios"
            }
        });
               }
               
                    Usuario.find().exec(function(errorIndefinido,usuariosEncontrados){
         if(errorIndefinido){
             res.view('vistas/Error',{
            error:{
                desripcion:"Hay un error en la carga de los usuarios",
                rawError:errorIndefinido,
                url:"/ListarUsuarios"
            }
        });
         }
         
            
             res.view('vistas/Usuario/ListarUsuarios',{
                 usuarios:usuariosEncontrados
        }); 
         
     })
               
           })
        }else{
                                                   return res.view('vistas/Error',{
            error:{
                desripcion:"Necesitamos el ID, el nombre, el apellido o el correo",
                rawError:"No envia parametros",
                url:"/EditarUsuarios"
            }
        });
        }       
    }
};