# Sails.js

### Materia : `Tecnologías Web con JavaScript`

<p align="center">
<img src="http://www.javatpoint.com/images/javascript/javascript_logo.png" width="300" height="200">
</p>

### Tema : `Sails.js` 
### Fecha : `2016-12-21`
### Estudiante : `Alex José Freire Bustos`
### Profesor : `Tania Calle - Adrian Eguez`
### Número de informe : `5`

<a name="cabecera"></a>
## Índice de contenidos


- <a href="#tema">Tema</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#marco-teorico">Marco Teorico</a>
  * <a href="#mvc">Modelo-Vista-Controlador</a>
  * <a href="#sails">Sails.js</a>
  * <a href="#api">Carpeta api</a>
  * <a href="#assets">Carpeta assets</a>
  * <a href="#config">Carpeta config</a>
  * <a href="#tasks">Carpeta tasks</a>
  * <a href="#views">Carpeta views</a>
- <a href="#desarrollo">Desarrollo de la Práctica</a>
- <a href="#conrec">Conclusiones y Recomendaciones</a> 
- <a href="#bibliografia">Bibliografía</a>

<a name="tema"></a>
## Tema
El tema de la práctica es: `Sails.js`

<a name="objetivos"></a>
## Objetivos

- Ampliar el conocimiento sobre el patrón de diseño Modelo-Vista-Controlador.
- Aprender a usar el framework Sails.js.
- Conocer la estructura de un Sails App y el funcionameinto de cada uno de sus componentes.

<a name="marco-teorico"></a>
## Marco Teorico
<a name="mvc"></a>
### Modelo-Vista-Controlador
El Modelo-Vista-Controlador (MVC) es un conjunto de patrones que están juntos en un mismo 
diseño <a href="#1">[1]</a>. Como su nombre lo indica, está formado por las siguientes 
partes: un modelo, una vista y un controlador.
- Modelo
Es el encargado de mantener todos los datos, estados y la lógica de la aplicación
<a href="#2">[2]</a>. Provee una interfaz para manipulación y recupera los estados para 
luego enviar notificaciones de los cambios realizados <a href="#1">[1]</a>.
- Vista
Le da al usuario una presentación del modelo <a href="#2">[2]</a>. La vista solicita los 
estados y los datos que necesita al modelo para desplegarlos <a href="#2">[2]</a>.
- Controlador
Es el encargado de recibir las entradas de los usuarios <a href="#2">[2]</a>. 
También, descifra su significado para enviarlas al modelo <a href="#2">[2]</a>.

<a href="#cabecera">A la cabecera</a>
<a name="sails"></a>
### Sails.js
Es un framework MVC para Node.js. Esta diseñado para emular el patrón MVC de frameworks 
como Ruby on Rails, pero con soporte para los requerimientos de apps modernos: 
APIs dirigidas por datos con arquitectura orientada a servicios y escalable 
<a href="#3">[3]</a>. Es usado en el back-end web para la construcción de APIs, alojar 
archivos HTML y manejar cientos de miles de usuarios simultáneos <a href="#4">[4]</a>.

<a href="#cabecera">A la cabecera</a>
<a name="api"></a>
### Carpeta api
Contiene la mayoría de la lógica del back-end. En este lugar, se ubican el modelo y el 
controlador de la app. Está formado por las siguientes subcarpetas:
- controllers, la cual contiene la mayor parte de la lógica del back-end;
- models, que es la estructura que contiene los datoss del app;
- policies, usada para autenticar clientes y restringir accesos;
- responses, que contiene la lógica de respuestas del servior;
- services, cuya acción es similar a la de los controladores, contiene la lógica que no 
necesariamente es dependiente de `.req()` y `.res()` <a href="#5">[5]</a>.

<a href="#cabecera">A la cabecera</a>
<a name="assets"></a>
### Carpeta assets
Esta carpeta aloja todos los archivos estático del app. El desarrollador puede sentirse 
libre de crear sus propios archivos y carpetas en esta ubicación <a href="#6">[6]</a>.

<a href="#cabecera">A la cabecera</a>
<a name="config"></a>
### Carpeta config
Esta carpeta contiene varios archivos que le permitirán al desarrollador personalizar 
y configurar sus Sails apps <a href="#7">[7]</a>. Esta formado por los siguientes 
elementos:
- env, esta carpeta contiene varias de las configuraciones específicas del ambiente, 
por ejemplo, claves API o contraseñas a base de datos remotas;
- locales, esta carpeta contiene la información usada para las diferentes configuraciones 
regionales de los clientes visitantes;
- blueprints.js, este archivo contiene las configuraciones globales para las rutas 
blueprints y para las opciones de petición (request), que impactan en el 
comportamiento de las acciones blueprint;
- bootstrap.js, este archivo es ejecutado por Sails antes de que el app es levantada, le
 permite al desarrollador establecer su modelo de datos, ejecutar trabajos y realizar 
 algunas lógicas especiales para la aplicación;
- connections.js, este archivo contiene la configuración para todos los adaptores, los 
cuales actúan como un intermediario entre el app y la base de datos, es decir, como un
plugin para el Waterline;
- cors.js, este archivo contiene la configuración global del CORS (Cross-Origin 
Resource Sharing);
- csrf.js, este archivo contiene las configuraciones necesarias para proteger y manejar 
los ataques de falsificación de peticiones, conocidas como Cross-Site Request Forgery 
(CSRF);
- global.js, este archivo contiene la configuración para las variables globales que 
Sails expone a sus procesos Node;
- https.js, este archivo es usado para configurar el servidor HTTP;
- i18n.js, este archivo contiene la configuración regional soportada por la app;
- local.js, este archivo es útil para configurar un Sails app en un ambiente local, la 
configuración añadida aquí toma precedencia sobre la mayoría de las configuraciones de 
los otros archivos;
- log.js, este archivo contiene la configuración para los distintos niveles de log de la 
Sails app;
- models.js, este archivo contiene las propiedades que serán incluidas en cada uno de los 
módulos; 
- policies.js, este archivo contiene las políticas por defecto para la aplicación;
- routes.js, este archivo permite definir rutas explícitas para conectar clientes con 
los recursos solicitados;
- session.js, este archivo contiene la información que le dice a Sails dónde almacenar 
las sesiones;
- sockets.js,  este archivo permite personalizar el modo en que la app se comuncia con el 
cliente sobre Socket.IO;
- views.js, este archivo establece que motor de templates usar al renderizar templates 
HTML del lado del servidor, por defecto se usa EJS (Embedded JavaScript).

<a href="#cabecera">A la cabecera</a>
<a name="tasks"></a>
### Carepta tasks
Contien la información de configuración para las tareas del Grunt, el cual es usado 
para adminsitrar los assets <a href="#3">[3]</a>. Esta formado por los siguientes 
elementos: 
- config, esta carpeta contiene la configuración por defecto de las tareas del Grunt 
que son usadas por los puntos de entrada principal en `tasks/register/`.
- register, esta carpeta contiene las tareas del Grunt que Sails ejecuta por defecto. 
Para la ejecución de una lista de tareas personalizadas se deben crear los archivos 
necesarios en este directorio y configurar `sails.config.environment` para emparejas los 
nombres de los archivos.
- pipeline.js, este archivo determina el orden en el que las hojas de estilo, código 
JavaScript y los templates en el lado del cliente serán compilados y enlazados con los 
tags `<script>` o `<link>`.

<a href="#cabecera">A la cabecera</a>
<a name="view"></a>
### Views
Express es un framework de aplicaciones web de Node.js que provee un conjunto de características 
para aplicaciones móviles y web <a href="#2">[2]</a>. Su filosofía es abastecer herramientas 
robustas y pequeñas para servidores http. No fuerza al usuario a usar motores de plantillas o 
Mapeos Objeto-Relacional (ORM) específicos al usuario <a href="#3">[3]</a>.

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
Se utilizarón los métodos http para el envió de mensajes al servidor.
![routing](https://github.com/afre/TecnologiasWebJavascript/blob/07-Nodejs-02/Informe/Imagenes/routing1.png?raw=true)
![routing](https://github.com/afre/TecnologiasWebJavascript/blob/07-Nodejs-02/Informe/Imagenes/routing2.png?raw=true)
![routing](https://github.com/afre/TecnologiasWebJavascript/blob/07-Nodejs-02/Informe/Imagenes/routing3.png?raw=true)
![routing](https://github.com/afre/TecnologiasWebJavascript/blob/07-Nodejs-02/Informe/Imagenes/routing4.png?raw=true)
![routing](https://github.com/afre/TecnologiasWebJavascript/blob/07-Nodejs-02/Informe/Imagenes/routing5.png?raw=true)
![routing](https://github.com/afre/TecnologiasWebJavascript/blob/07-Nodejs-02/Informe/Imagenes/routing6.png?raw=true)
![routing](https://github.com/afre/TecnologiasWebJavascript/blob/07-Nodejs-02/Informe/Imagenes/routing7.png?raw=true)
![routing](https://github.com/afre/TecnologiasWebJavascript/blob/07-Nodejs-02/Informe/Imagenes/routing8.png?raw=true)
![routing](https://github.com/afre/TecnologiasWebJavascript/blob/07-Nodejs-02/Informe/Imagenes/routing9.png?raw=true)

<a href="#cabecera">A la cabecera</a>

<a name="conrec"></a>
## Conclusiones y Recomendaciones

- Se recomienda el uso de ExpressJS para simplifcar el trabajo de programación en Javascript y Node.js, a través del uso de funciones ya definidos en el framework.
- Es necesario la creación de una cuenta de usuario en la página de npm para poder publicar paquetes propios.
- Por medio del método get, es posible enviar parámetros al servidor por medio de la url.
- No se recomienda el uso del método get para envió de información sensible; puesto que, esta puede ser facilmente interceptada por una atacante.

<a href="#cabecera">A la cabecera</a>

<a name="bibliografia"></a>
## Bibliografía

<a name="1">[1] T. Sellarès. (n.d.). _The Model View Controller: a Composed Pattern_ 
[Online]. Available: http://ima.udg.edu/~sellares/EINF-ES1/MVC-Toni.pdf</a>  
<a name="2">[2] E. Freeman, "Patterns of Patterns: compound patterns", in _Head First Design 
Patterns_, California, US: O'Reilly Media, 2004, pp. 500-576.</a>  
<a name="3">[3] The Sails Company. (2017). _Sails_ [Online]. Available: 
https://github.com/balderdashy/sails</a>  
<a name="4">[4] The Sails Company. (n.d.). _What is Sails?_ [Online]. Available: 
http://sailsjs.com/whats-that</a>  
<a name="5">[5] Refnes Data. (2016). HTTP Methods: GET vs. POST [Online]. Available: http://www.w3schools.com/TAGS/ref_httpmethods.asp</a>  

<a href="#cabecera">A la cabecera</a>
