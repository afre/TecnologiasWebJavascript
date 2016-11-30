var express = require('express');
var app = express();
var puerto=3030;

var usuarios=[{
    id:1,
    nombre:'alex',
    cedula:'9999'
},{
    id:2,
    nombre:'alex2',
    cedula:'99992'
},
             id:3,
    nombre:'alex2',
    cedula:'99993'];

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/tecnologiasWebJavascript1', function (req, res) {
  res.send('get con javascript');
});

app.post('/tecnologiasWebJavascript2', function (req, res) {
    //var parametro=req.params;
  res.send('post con javascript');
});

app.listen(puerto, function () {
  console.log('Example app listening on port'+puerto+'!');
    console.log('Cabecera req');
    //console.log(req.headers);
    console.log('Cabecera res');
    //console.log(res.headers);
    //res.json(usuario);
              //console.log("Cabeceras del response");
              //console.log("Cabeceras del response");
//aumentar campos en un objeto json
    //usuario.apellido='';
    
    var usuario={nombre:'alex',
                cedula:1766666666};
    
});

