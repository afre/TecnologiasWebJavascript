/**
 * SaludoController
 *
 * @description :: Server-side logic for managing saludoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	hola:function(req,res){
        
        if(req.method=='GET'){
    res.json({a:'1','b':'Hola get'});            
        }
        else if(req.method=='POST'){
    res.json({a:'2','b':'Hola post'});            
        }else{
            res.json({a:'3','b':'Hola todos'});            
        }
    
    },
    adios:function(req,res){
        res.send('adios');
    },
    hora:function(req,res){
        res.send('hora es');
    },
    
};

