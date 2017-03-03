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
  * <a href="#sailsrc">Archivo .sailsrc</a>
  * <a href="#appjs">Archivo app.js</a>
  * <a href="#gruntfilejs">Archivo Gruntfile.js</a>
  * <a href="#packagejson">Archivo package.json</a>
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
por ejemplo, claves API o contraseñas a base de datos remotas <a href="#8">[8]</a>;
- locales, esta carpeta contiene la información usada para las diferentes configuraciones 
regionales de los clientes visitantes <a href="#9">[9]</a>;
- blueprints.js, este archivo contiene las configuraciones globales para las rutas 
blueprints y para las opciones de petición (request), que impactan en el 
comportamiento de las acciones blueprint <a href="#10">[10]</a>;
- bootstrap.js, este archivo es ejecutado por Sails antes de que el app es levantada, le
 permite al desarrollador establecer su modelo de datos, ejecutar trabajos y realizar 
 algunas lógicas especiales para la aplicación <a href="#11">[11]</a>;
- connections.js, este archivo contiene la configuración para todos los adaptores, los 
cuales actúan como un intermediario entre el app y la base de datos, es decir, como un
plugin para el Waterline <a href="#12">[12]</a>;
- cors.js, este archivo contiene la configuración global del CORS (Cross-Origin 
Resource Sharing) <a href="#13">[13]</a>;
- csrf.js, este archivo contiene las configuraciones necesarias para proteger y manejar 
los ataques de falsificación de peticiones, conocidas como Cross-Site Request Forgery 
(CSRF) <a href="#15">[15]</a>;
- global.js, este archivo contiene la configuración para las variables globales que 
Sails expone a sus procesos Node <a href="#16">[16]</a>;
- https.js, este archivo es usado para configurar el servidor HTTP <a href="#17">[17]</a>;
- i18n.js, este archivo contiene la configuración regional soportada por la app 
<a href="#18">[18]</a>;
- local.js, este archivo es útil para configurar un Sails app en un ambiente local, la 
configuración añadida aquí toma precedencia sobre la mayoría de las configuraciones de 
los otros archivos <a href="#19">[19]</a>;
- log.js, este archivo contiene la configuración para los distintos niveles de log de la 
Sails app <a href="#20">[20]</a>;
- models.js, este archivo contiene las propiedades que serán incluidas en cada uno de los 
módulos <a href="#21">[21]</a>; 
- policies.js, este archivo contiene las políticas por defecto para la aplicación 
<a href="#22">[22]</a>;
- routes.js, este archivo permite definir rutas explícitas para conectar clientes con 
los recursos solicitados <a href="#23">[23]</a>;
- session.js, este archivo contiene la información que le dice a Sails dónde almacenar 
las sesiones <a href="#24">[24]</a>;
- sockets.js,  este archivo permite personalizar el modo en que la app se comuncia con el 
cliente sobre Socket.IO <a href="#25">[25]</a>;
- views.js, este archivo establece que motor de templates usar al renderizar templates 
HTML del lado del servidor, por defecto se usa EJS (Embedded JavaScript) <a href="#26">[26]</a>.

<a href="#cabecera">A la cabecera</a>
<a name="tasks"></a>
### Carpeta tasks
Contiene la información de configuración para las tareas del Grunt, el cual es usado 
para administrar los assets <a href="#27">[27]</a>. Esta formado por los siguientes 
elementos: 
- config, esta carpeta contiene la configuración por defecto de las tareas del Grunt 
que son usadas por los puntos de entrada principal en `tasks/register/` <a href="#28">[28]</a>.
- register, esta carpeta contiene las tareas del Grunt que Sails ejecuta por defecto, 
para la ejecución de una lista de tareas personalizadas se deben crear los archivos 
necesarios en este directorio y configurar `sails.config.environment` para emparejas los 
nombres de los archivos <a href="#29">[29]</a>.
- pipeline.js, este archivo determina el orden en el que las hojas de estilo, código 
JavaScript y los templates en el lado del cliente serán compilados y enlazados con los 
tags `<script>` o `<link>` <a href="#30">[30]</a>.

<a href="#cabecera">A la cabecera</a>
<a name="views"></a>
### Carpeta views
Contiene todas las vistas personalizadas del app <a href="#31">[31]</a>. Para crear 
una vista personalizada, es necesario crear un archivo .ejs y configurar una ruta 
en `config/routes.js` <a href="#31">[31]</a>. Algunos de los elementos más importantes 
que la conforman son:
- homepage.ejs, este archivo contiene el template que es renderizado por defecto cuando 
un usuario visita la URL del app <a href="#32">[32]</a>;
- layout.ejs, este archivo actúa como el diseño por defecto para todas las vistas del 
lado del servidor <a href="#33">[33]</a>.

<a href="#cabecera">A la cabecera</a>
<a name="sailsrc"></a>
### Archivo .sailsrc
Es usado para configurar todas las Sails apps en un computador y para extender la 
funcionalidad del Sails CLI <a href="#34">[34]</a>.

<a href="#cabecera">A la cabecera</a>
<a name="appjs"></a>
### Archivo app.js
Es el punto de entrada para un Sails o Node app en producción y puede ser usado como una 
alternativa para `sails lift` <a href="#35">[35]</a>.

<a href="#cabecera">A la cabecera</a>
<a name="gruntfilejs"></a>
### Archivo Gruntfile.js
Es el punto de entrada para para el pipeline de assets por defecto en Sails; sin embargo, 
en la mayoría de los casos, este archivo no debe ser cambiado, en su lugar, la lógica 
personalizada debe ser añadida en la carpeta `tasks/` <a href="#36">[36]</a>.

<a href="#cabecera">A la cabecera</a>
<a name="packagejson"></a>
### Archivo package.json
Este contiene toda la configuración estándar para npm, por ejemplo, el nombre y 
la versión de todos los módulos de Node.js de los cuales depende la app para ser 
ejecutada <a href="#37">[37]</a>.

<a href="#cabecera">A la cabecera</a>

<a name="desarrollo"></a>
## Desarrollo del informe

### Levantar el servidor desarrollado en Sails.js
Instalar sails, crear un nuevo proyecto, levantar el servidor y probar que funciona la página web.
![install](https://github.com/afre/TecnologiasWebJavascript/blob/11-sails-02/Informe/Imagenes/install1.jpg?raw=true)
![install](https://github.com/afre/TecnologiasWebJavascript/blob/11-sails-02/Informe/Imagenes/install2.jpg?raw=true)
![install](https://github.com/afre/TecnologiasWebJavascript/blob/11-sails-02/Informe/Imagenes/install3.jpg?raw=true)
![install](https://github.com/afre/TecnologiasWebJavascript/blob/11-sails-02/Informe/Imagenes/install4.jpg?raw=true)

### Generar API
Generar APIs: Mascota, Raza y Usuario.
![api](https://github.com/afre/TecnologiasWebJavascript/blob/11-sails-02/Informe/Imagenes/api1.jpg?raw=true)

### Generar Controladores
Generar controladores: Rutas y Saludo.
![controller](https://github.com/afre/TecnologiasWebJavascript/blob/11-sails-02/Informe/Imagenes/controller1.jpg?raw=true)

### Generar Modelos
Generar modelo Administrador.
![model](https://github.com/afre/TecnologiasWebJavascript/blob/11-sails-02/Informe/Imagenes/model1.jpg?raw=true)

### Configurar archivos de controladores
Configurar los archivos de los controladores MascotaController.js, RazaController.js, 
RutasController.js, SaludoController.js y UsuarioController.js.
![filecontroller](https://github.com/afre/TecnologiasWebJavascript/blob/11-sails-02/Informe/Imagenes/fileController1.jpg?raw=true)
![filecontroller](https://github.com/afre/TecnologiasWebJavascript/blob/11-sails-02/Informe/Imagenes/fileController2.jpg?raw=true)
![filecontroller](https://github.com/afre/TecnologiasWebJavascript/blob/11-sails-02/Informe/Imagenes/fileController3.jpg?raw=true)
![filecontroller](https://github.com/afre/TecnologiasWebJavascript/blob/11-sails-02/Informe/Imagenes/fileController4.jpg?raw=true)
![filecontroller](https://github.com/afre/TecnologiasWebJavascript/blob/11-sails-02/Informe/Imagenes/fileController5.jpg?raw=true)

### Configurar archivos de modelos
Configurar los archivos de los modelos Administrador.js, Mascota.js, Raza.js y Usuario.js.
![filemodel](https://github.com/afre/TecnologiasWebJavascript/blob/11-sails-02/Informe/Imagenes/fileModel1.jpg?raw=true)
![filemodel](https://github.com/afre/TecnologiasWebJavascript/blob/11-sails-02/Informe/Imagenes/fileModel2.jpg?raw=true)
![filemodel](https://github.com/afre/TecnologiasWebJavascript/blob/11-sails-02/Informe/Imagenes/fileModel3.jpg?raw=true)
![filemodel](https://github.com/afre/TecnologiasWebJavascript/blob/11-sails-02/Informe/Imagenes/fileModel4.jpg?raw=true)

### Configurar archivos de la carpeta assets
Añadir archivos estáticos que van a formar parte de al página web.
![fileassets](https://github.com/afre/TecnologiasWebJavascript/blob/11-sails-02/Informe/Imagenes/fileAssets1.jpg?raw=true)

### Configurar archivos de la carpeta config
Añadir rutas al archivo routes.js.
![fileroutes](https://github.com/afre/TecnologiasWebJavascript/blob/11-sails-02/Informe/Imagenes/fileConfig1.jpg?raw=true)

### Configurar archivos de la carpeta tasks
Configurar CSS y templates en el archivo pipeline.js.
![filetasks](https://github.com/afre/TecnologiasWebJavascript/blob/11-sails-02/Informe/Imagenes/fileTasks1.jpg?raw=true)

### Configurar archivos de la carpeta views
Configurar el archivo layout.ejs y crear vistas para crear, editar y listar mascotas, 
razas y usuarios y para las ciudades de Quito, Guayaquil y Cuenca.
![fileviews](https://github.com/afre/TecnologiasWebJavascript/blob/11-sails-02/Informe/Imagenes/fileViews1.jpg?raw=true)
![fileviews](https://github.com/afre/TecnologiasWebJavascript/blob/11-sails-02/Informe/Imagenes/fileViews2.jpg?raw=true)
![fileviews](https://github.com/afre/TecnologiasWebJavascript/blob/11-sails-02/Informe/Imagenes/fileViews3.jpg?raw=true)
![fileviews](https://github.com/afre/TecnologiasWebJavascript/blob/11-sails-02/Informe/Imagenes/fileViews4.jpg?raw=true)
![fileviews](https://github.com/afre/TecnologiasWebJavascript/blob/11-sails-02/Informe/Imagenes/fileViews5.jpg?raw=true)
![fileviews](https://github.com/afre/TecnologiasWebJavascript/blob/11-sails-02/Informe/Imagenes/fileViews6.jpg?raw=true)
![fileviews](https://github.com/afre/TecnologiasWebJavascript/blob/11-sails-02/Informe/Imagenes/fileViews7.jpg?raw=true)
![fileviews](https://github.com/afre/TecnologiasWebJavascript/blob/11-sails-02/Informe/Imagenes/fileViews8.jpg?raw=true)
![fileviews](https://github.com/afre/TecnologiasWebJavascript/blob/11-sails-02/Informe/Imagenes/fileViews9.jpg?raw=true)
![fileviews](https://github.com/afre/TecnologiasWebJavascript/blob/11-sails-02/Informe/Imagenes/fileViews10.jpg?raw=true)
![fileviews](https://github.com/afre/TecnologiasWebJavascript/blob/11-sails-02/Informe/Imagenes/fileViews11.jpg?raw=true)
![fileviews](https://github.com/afre/TecnologiasWebJavascript/blob/11-sails-02/Informe/Imagenes/fileViews12.jpg?raw=true)
![fileviews](https://github.com/afre/TecnologiasWebJavascript/blob/11-sails-02/Informe/Imagenes/fileViews13.jpg?raw=true)

### Probar que la página web funciona
Subir el servidor de Sails y acceder a la direccion de localhost:1337.
![web](https://github.com/afre/TecnologiasWebJavascript/blob/11-sails-02/Informe/Imagenes/web1.jpg?raw=true)

### Crear Usuario
Registrar un usuario en la página web.
![webcrear](https://github.com/afre/TecnologiasWebJavascript/blob/11-sails-02/Informe/Imagenes/webCrear1.jpg?raw=true)
![webcrear](https://github.com/afre/TecnologiasWebJavascript/blob/11-sails-02/Informe/Imagenes/webCrear2.jpg?raw=true)
![webcrear](https://github.com/afre/TecnologiasWebJavascript/blob/11-sails-02/Informe/Imagenes/webCrear3.jpg?raw=true)

### Actualizar Usuario
Cambiar la información ingresada del usuario.
![webactualizar](https://github.com/afre/TecnologiasWebJavascript/blob/11-sails-02/Informe/Imagenes/webActualizar1.jpg?raw=true)
![webactualizar](https://github.com/afre/TecnologiasWebJavascript/blob/11-sails-02/Informe/Imagenes/webActualizar2.jpg?raw=true)
![webactualizar](https://github.com/afre/TecnologiasWebJavascript/blob/11-sails-02/Informe/Imagenes/webActualizar3.jpg?raw=true)
![webactualizar](https://github.com/afre/TecnologiasWebJavascript/blob/11-sails-02/Informe/Imagenes/webActualizar4.jpg?raw=true)

### Eliminar Usuario
Borrar el usuario ingresado anteriormente.
![webborrar](https://github.com/afre/TecnologiasWebJavascript/blob/11-sails-02/Informe/Imagenes/webBorrar1.jpg?raw=true)
![webborrar](https://github.com/afre/TecnologiasWebJavascript/blob/11-sails-02/Informe/Imagenes/webBorrar2.jpg?raw=true)

<a href="#cabecera">A la cabecera</a>

<a name="conrec"></a>
## Conclusiones y Recomendaciones

- Sails le ahorra tiempo al desarrollador web; ya que, a través del uso de templates, es posible crear varias vistas que se basan en un mismo diseño con un menor esfuerzo.
- Sails es especialmente usado en el back-end y puede ser combinando con otros frameworks para que funcionen en el front-ent, como: AngularJS.
- Se recomienda evitar modificaciones en el pipeline.js y usar las configuraciones ya establecidas por defecto; ya que, el producir 
cambios sin un adecuado conocimiento puede inutilizar el Grunt y Sails puede dejar de funcionar.
- Se aconseja revisar la documentación oficial de Sails para entender de mejor manera el funcionamiento de cada una de las carpetas y archivos que conforman la aplicación.

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
<a name="5">[5] The Sails Company. (n.d.). _api_ [Online]. Available: 
http://sailsjs.com/documentation/anatomy/api</a>  
<a name="6">[6] The Sails Company. (n.d.). _assets_ [Online]. Available: 
http://sailsjs.com/documentation/anatomy/assets</a>  
<a name="7">[7] The Sails Company. (n.d.). _config_ [Online]. Available: 
http://sailsjs.com/documentation/anatomy/config</a>  
<a name="8">[8] The Sails Company. (n.d.). _config_ [Online]. Available: 
http://sailsjs.com/documentation/anatomy/config</a>  
<a name="9">[9] The Sails Company. (n.d.). _config/env_ [Online]. Available: 
http://sailsjs.com/documentation/anatomy/config/env</a>  
<a name="10">[10] The Sails Company. (n.d.). _config/locales_ [Online]. Available: 
http://sailsjs.com/documentation/anatomy/config/locales</a>  
<a name="11">[11] The Sails Company. (n.d.). _config/blueprints.js_ [Online]. Available: 
http://sailsjs.com/documentation/anatomy/config/blueprints.js</a>  
<a name="12">[12] The Sails Company. (n.d.). _config/bootstrap.js_ [Online]. Available: 
http://sailsjs.com/documentation/anatomy/config/bootstrap.js</a>  
<a name="13">[13] The Sails Company. (n.d.). _config/connections.js_ [Online]. Available: 
http://sailsjs.com/documentation/anatomy/config/connections.js</a>  
<a name="14">[14] The Sails Company. (n.d.). _config/cors.js_ [Online]. Available: 
http://sailsjs.com/documentation/anatomy/config/cors.js</a>  
<a name="15">[15] The Sails Company. (n.d.). _config/csrf.js_ [Online]. Available: 
http://sailsjs.com/documentation/anatomy/config/csrf.js</a>  
<a name="16">[16] The Sails Company. (n.d.). _config/globals.js_ [Online]. Available: 
http://sailsjs.com/documentation/anatomy/config/globals.js</a>  
<a name="17">[17] The Sails Company. (n.d.). _config/http.js_ [Online]. Available: 
http://sailsjs.com/documentation/anatomy/config/http.js</a>  
<a name="18">[18] The Sails Company. (n.d.). _config/i18n.js_ [Online]. Available: 
http://sailsjs.com/documentation/anatomy/config/i18n.js</a>  
<a name="19">[19] The Sails Company. (n.d.). _config/local.js_ [Online]. Available: 
http://sailsjs.com/documentation/anatomy/config/local.js</a>  
<a name="20">[20] The Sails Company. (n.d.). _config/log.js_ [Online]. Available: 
http://sailsjs.com/documentation/anatomy/config/log.js</a>  
<a name="21">[21] The Sails Company. (n.d.). _config/models.js_ [Online]. Available: 
http://sailsjs.com/documentation/anatomy/config/models.js</a>  
<a name="22">[22] The Sails Company. (n.d.). _config/policies.js_ [Online]. Available: 
http://sailsjs.com/documentation/anatomy/config/policies.js</a>  
<a name="23">[23] The Sails Company. (n.d.). _config/routes.js_ [Online]. Available: 
http://sailsjs.com/documentation/anatomy/config/routes.js</a>  
<a name="24">[24] The Sails Company. (n.d.). _config/session.js_ [Online]. Available: 
http://sailsjs.com/documentation/anatomy/config/session.js</a>  
<a name="25">[25] The Sails Company. (n.d.). _config/sockets.js_ [Online]. Available: 
http://sailsjs.com/documentation/anatomy/config/sockets.js</a>  
<a name="26">[26] The Sails Company. (n.d.). _config/views.js_ [Online]. Available: 
http://sailsjs.com/documentation/anatomy/config/views.js</a>  
<a name="27">[27] The Sails Company. (n.d.). _tasks_ [Online]. Available: 
http://sailsjs.com/documentation/anatomy/tasks</a>  
<a name="28">[28] The Sails Company. (n.d.). _tasks/config_ [Online]. Available: 
http://sailsjs.com/documentation/anatomy/tasks/config</a>  
<a name="29">[29] The Sails Company. (n.d.). _tasks/register_ [Online]. Available: 
http://sailsjs.com/documentation/anatomy/tasks/register</a>  
<a name="30">[30] The Sails Company. (n.d.). _tasks/pipeline.js_ [Online]. Available: 
http://sailsjs.com/documentation/anatomy/tasks/pipeline.js</a>  
<a name="31">[31] The Sails Company. (n.d.). _views_ [Online]. Available: 
http://sailsjs.com/documentation/anatomy/views</a>  
<a name="32">[32] The Sails Company. (n.d.). _views/homepage.ejs_ [Online]. Available: 
http://sailsjs.com/documentation/anatomy/views/homepage.ejs</a>  
<a name="33">[33] The Sails Company. (n.d.). _views/layout.ejs_ [Online]. Available: 
http://sailsjs.com/documentation/anatomy/views/layout.ejs</a>  
<a name="34">[34] The Sails Company. (n.d.). _.sailsrc_ [Online]. Available: 
http://sailsjs.com/documentation/anatomy/.sailsrc</a>  
<a name="35">[35] The Sails Company. (n.d.). _app.js_ [Online]. Available: 
http://sailsjs.com/documentation/anatomy/app.js</a>  
<a name="36">[36] The Sails Company. (n.d.). _Gruntfile.js_ [Online]. Available: 
http://sailsjs.com/documentation/anatomy/gruntfile.js</a>  
<a name="37">[37] The Sails Company. (n.d.). _package.json_ [Online]. Available: 
http://sailsjs.com/documentation/anatomy/package.json</a>  

<a href="#cabecera">A la cabecera</a>
