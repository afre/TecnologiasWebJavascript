# Node Package Manager

### Materia : `Tecnologías Web con JavaScript`

<p align="center">
<img src="http://www.javatpoint.com/images/javascript/javascript_logo.png" width="300" height="200">
</p>

### Tema : `Node Package Manager` 
### Fecha : `2016-11-30`
### Estudiante : `Alex José Freire Bustos`
### Profesor : `Tania Calle - Adrian Eguez`
### Número de informe : `4`

<a name="cabecera"></a>
## Índice de contenidos


- <a href="#tema">Tema</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#marco-teorico">Marco Teorico</a>
  * <a href="#npm">NPM</a>
  * <a href="#express">ExpressJS</a>
  * <a href="#html">Métodos de petición en ExpressJS</a>
- <a href="#desarrollo">Desarrollo de la Práctica</a>
- <a href="#conrec">Conclusiones y Recomendaciones</a> 
- <a href="#bibliografia">Bibliografía</a>

<a name="tema"></a>
## Tema
El tema de la práctica es: `Node Package Manager`

<a name="objetivos"></a>
## Objetivos

- Entender el funcionamiento de los paquetes de Node.js.
- Conocer la utilidad del framework Express.js de Node.js.
- Aprender a usar los distintos métodos de petición de http.

<a name="marco-teorico"></a>
## Marco Teorico
<a name="npm"></a>
### NPM
NPM es un administrador de paquetes para Javascript que permite buscar, compartir y reusar código de otros desarrolladores para luego ensamblarlo de nuevas maneras. NPM es un proyecto separado de Node.js; pero, suele venir incluida en su instalación <a href="#1">[1]</a>.

<a href="#cabecera">A la cabecera</a>
<a name="express"></a>
### ExpressJS
Express es un framework de aplicaciones web de Node.js que provee un conjunto de características 
para aplicaciones móviles y web <a href="#2">[2]</a>. Su filosofía es abastecer herramientas 
robustas y pequeñas para servidores http. No fuerza al usuario a usar motores de plantillas o 
Mapeos Objeto-Relacional (ORM) específicos al usuario <a href="#3">[3]</a>.

<a href="#cabecera">A la cabecera</a>
<a name="html"></a>
### Métodos de petición en ExpressJS
El direccionamiento se refiere a como debe responder una determinada aplicación a una 
solicitud del cliente. La definición de la ruta tiene la siguiente estructura:
```javascript
app.METHOD(PATH, HANDLER)
```
donde `app` es una instancia de express, `METHOD` es un método de solicitud HTTP, `PATH` 
es una vía de acceso al servidor y `HANDLER` es una función que se ejecuta cuando se 
correlaciona la ruta <a href="#4">[4]</a>. 
Algunos de los conjuntos de métodos comunes para HTTP/1.1 son:  
- GET. Solicita los datos desde un recurso específico. 
- POST. Solicita que el servidor acepte a la entidad encerrada en la solicitud como un 
nuevo subordinado del recurso específico.
- PUT. Carga una representación de un URI específico.
- DELETE. Borrar un recurso específico.
- HEAD. Parecido al método GET, pero solo retorna cabeceras HTTP y no el cuerpo del 
documento.
- OPTIONS. Retorna el método HTTP que el servidor soporta.
- CONNECT. Es usado cono un proxy que puede dinámicamente cambiar a un tunel. <a href="#5">[5]</a>.

<a href="#cabecera">A la cabecera</a>

<a name="desarrollo"></a>
## Desarrollo del informe

### Instalación de Expressjs
Se utilizó el framework de Expressjs para la configuración de un servidor web.
![express](https://github.com/afre/TecnologiasWebJavascript/blob/07-Nodejs-02/Informe/Imagenes/express1.png?raw=true)
![express](https://github.com/afre/TecnologiasWebJavascript/blob/07-Nodejs-02/Informe/Imagenes/express2.png?raw=true)

### Configuración de paquetes npm
Se utilizó el administrador de paquetes de Node.js para la publicación de paquetes en internet.
![npm](https://github.com/afre/TecnologiasWebJavascript/blob/07-Nodejs-02/Informe/Imagenes/npm1.png?raw=true)
![npm](https://github.com/afre/TecnologiasWebJavascript/blob/07-Nodejs-02/Informe/Imagenes/npm2.png?raw=true)
![npm](https://github.com/afre/TecnologiasWebJavascript/blob/07-Nodejs-02/Informe/Imagenes/npm3.png?raw=true)
![npm](https://github.com/afre/TecnologiasWebJavascript/blob/07-Nodejs-02/Informe/Imagenes/npm4.png?raw=true)

### Direccionamiento básico
Se utilizarón los métodos GET, POST y PUT para el envió de mensajes al servidor.
![nodejs](https://github.com/afre/TecnologiasWebJavascript/blob/01-html/Informe/Imagenes/nodejs1.jpg?raw=true)
![nodejs](https://github.com/afre/TecnologiasWebJavascript/blob/01-html/Informe/Imagenes/nodejs2.jpg?raw=true)
![nodejs](https://github.com/afre/TecnologiasWebJavascript/blob/01-html/Informe/Imagenes/nodejs3.jpg?raw=true)

<a href="#cabecera">A la cabecera</a>

<a name="conrec"></a>
## Conclusiones y Recomendaciones

- Se recomienda el uso de ExpressJS para simplifcar el trabajo de programación en Javascript y Node.js, a través del uso de funciones ya definidos en el framework.

<a href="#cabecera">A la cabecera</a>

<a name="bibliografia"></a>
## Bibliografía

<a name="1">[1] NPM. (2016). Get npm [Online]. Available: https://www.npmjs.com/get-npm</a>  
<a name="2">[2] Node.js Foundation. (2016). Fast, unopinionated, minimalist web framework for Node.js 
[Online]. Available: https://expressjs.com/</a>  
<a name="3">[3] Node.js Foundation. (2016). Express [Online]. Available: 
https://github.com/expressjs/express</a>  
<a name="4">[4] Node.js Foundation. (2016). Direccionamiento básico [Online]. Available: 
http://expressjs.com/es/starter/basic-routing.html</a>  
<a name="5">[5] Refnes Data. (2016). HTTP Methods: GET vs. POST [Online]. Available: http://www.w3schools.com/TAGS/ref_httpmethods.asp</a>  

<a href="#cabecera">A la cabecera</a>
