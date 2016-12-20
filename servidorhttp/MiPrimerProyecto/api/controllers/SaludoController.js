var nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com');

// setup e-mail data with unicode symbols
var mailOptions = {
    from: '"Fred Foo ?" <foo@blurdybloop.com>', // sender address
    to: 'bar@blurdybloop.com, baz@blurdybloop.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ?', // plaintext body
    html: '<b>Hello world ?</b>' // html body
};

// send mail with defined transport object
/*
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});
*/


/**
 * SaludoController
 *
 * @description :: Server-side logic for managing saludoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	hola:function(req,res){
        
        var values = req.allParams();
        
        if(req.method=='GET'){
            
            
        transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
            
            res.send('ok');
});    
            
            
    res.json({a:'1','b':'Hola get',
             para:values});            
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

