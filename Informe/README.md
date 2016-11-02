# Introducción CSS

### Materia : `Tecnologías Web con JavaScript`

<p align="center">
<img src="http://www.javatpoint.com/images/javascript/javascript_logo.png" width="300" height="200">
</p>

### Tema : `Introducción CSS` 
### Fecha : `2016-10-25`
### Estudiante : `Alex José Freire Bustos`
### Profesor : `Tania Calle - Adrian Eguez`
### Número de informe : `2`

<a name="cabecera"></a>
## Índice de contenidos


- <a href="#tema">Tema</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#marco-teorico">Marco Teorico</a>
  * <a href="#css">CSS</a>
  * <a href="#responsive">Diseño Web Responsive</a>
  * <a href="#bootstrap">Bootstrap</a>
  * <a href="#grid">Grid system</a>
- <a href="#desarrollo">Desarrollo de la Práctica</a>
- <a href="#conrec">Conclusiones y Recomendaciones</a> 
- <a href="#bibliografia">Bibliografía</a>

<a name="tema"></a>
## Tema
El tema de la práctica es: `Introducción CSS`

<a name="objetivos"></a>
## Objetivos

- Aprender a aplicar estilos en páginas web.
- Conocer el funcionamiento del diseño Responsive.
- Aprender a usar bootstrap.

<a name="marco-teorico"></a>
## Marco Teorico
<a name="css"></a>
### CSS
CSS es un lenguaje de hojas de estilos usado para describir la presentación de documentos escritos en html u otros lenguajes de marcado. El significado de sus siglas es Cascading Style Sheets. Describe cómo los elementos estructurados son representados en la pantalla o en otros medios. CSS permite ajustar la presentación de un documento de acuerdo al medio de destino <a href="#1">[1]</a>.

<a href="#cabecera">A la cabecera</a>
<a name="responsive"></a>
### Diseño web responsive
El diseño web responsive es una serie de técnicas y tecnologías que son combinadas para desarrollar aplicaciones en un rango de dispositivos de la manera más práctica como sea posible <a href="#2">[2]</a>. Puede ser entendido como una estrategia para proveer layouts personalizados a los dispositivos basados en el tamaño de la ventana del navegador <a href="#3">[3]</a>. Esto se lo hace para asegurar que el usuario disfrute de la mejor experiencia posible cuando visita páginas web.

<a href="#cabecera">A la cabecera</a>
<a name="bootstrap"></a>
### Bootstrap
Bootstrap es uno de los frameworks front-end y de los proyectos open source más populares a nivel mundial. Originalmente, fue diseñado y desarrollado por Twitter, bajo el nombre de Twitter Blueprint. Con Bootstrap 2, se añadió la funcionalidad responsive como una hoja de estilo opcional. Con la llegada de Bootstrap 3, el diseño web responsive fue añadido por defecto con un enfoque para aplicaciones móviles <a href="#4">[4]</a>.

<a href="#cabecera">A la cabecera</a>
<a name="grid"></a>
### Grid system
Los grid systems escalan hasta 12 columnas mientras el tamaño del dispositivo o de la ventana de visualización aumenta. Son usados para crear layouts de páginas a través de una serie de filas y columnas. Las opciones del grid se pueden apreciar a través de la siguiente tabla <a href="#5">[5]</a>.

||Dispositivos extra pequeños|Dispositivos pequeños|Dispositivos medianos|Dispositivos grandes
|---|---|---|---|---
|Comportamiento del grid|Horizontal en todo momento|Colapsado al iniciar, horizontal por encima de los breakpoints|Colapsado al iniciar, horizontal por encima de los breakpoints|Colapsado al iniciar, horizontal por encima de los breakpoints
|Ancho del contenedor|Ninguno|750px|970px|1170px
|Prefijo de clase|.col-xs-|.col-sm-|.col-md-|.col.lg-
|Número de columnas|12|12|12|12
|Ancho de columna|Automático|62px|81px|97px
|Ancho del gutter|30px|30px|30px|30px
|Anidable|Sí|Sí|Sí|Sí
|Offsets|Sí|Sí|Sí|Si
|Orden de columnas|Sí|Sí|Sí|Sí

<a href="#cabecera">A la cabecera</a>

<a name="desarrollo"></a>
## Desarrollo del informe

### Selector CSS basado en el nombre del elemento
Se utilizó las pestañas Elements y Network de la herramientas para desarrolladores de Google Chrome para analizar el funcionamiento 
de una página web, tanto a nivel de código fuente como las respuestas y solicitudes entre el cliente y el servidor.
![DeveloperTools1](https://github.com/afre/TecnologiasWebJavascript/blob/01-html/Informe/Imagenes/elements.jpg?raw=true)
![DeveloperTools2](https://github.com/afre/TecnologiasWebJavascript/blob/01-html/Informe/Imagenes/network1.jpg?raw=true)
![DeveloperTools3](https://github.com/afre/TecnologiasWebJavascript/blob/01-html/Informe/Imagenes/network2.jpg?raw=true)

### Selector CSS basado en el id
Se utilizó el plugin de Postman para visualizar las diferencias entre el método Post y Get.
![Postaman](https://github.com/afre/TecnologiasWebJavascript/blob/01-html/Informe/Imagenes/postman1.jpg?raw=true)
![Postaman](https://github.com/afre/TecnologiasWebJavascript/blob/01-html/Informe/Imagenes/postman2.jpg?raw=true)
![Postaman](https://github.com/afre/TecnologiasWebJavascript/blob/01-html/Informe/Imagenes/postman3.jpg?raw=true)
![Postaman](https://github.com/afre/TecnologiasWebJavascript/blob/01-html/Informe/Imagenes/postman4.jpg?raw=true)
![Postaman](https://github.com/afre/TecnologiasWebJavascript/blob/01-html/Informe/Imagenes/postman5.jpg?raw=true)
![Postaman](https://github.com/afre/TecnologiasWebJavascript/blob/01-html/Informe/Imagenes/postman6.jpg?raw=true)

### Selector CSS basado en la clase
Se utilizó la herramienta de Node.js para la configuración del servidor.
![nodejs](https://github.com/afre/TecnologiasWebJavascript/blob/01-html/Informe/Imagenes/nodejs1.jpg?raw=true)
![nodejs](https://github.com/afre/TecnologiasWebJavascript/blob/01-html/Informe/Imagenes/nodejs2.jpg?raw=true)
![nodejs](https://github.com/afre/TecnologiasWebJavascript/blob/01-html/Informe/Imagenes/nodejs3.jpg?raw=true)

### Configuración de la CDN de Bootstrap
Se utilizó la herramienta GitHub para escritorio para subir el proyecto al repositorio y para la creación de branches.
![Github](https://github.com/afre/TecnologiasWebJavascript/blob/01-html/Informe/Imagenes/github1.jpg?raw=true)
![Github](https://github.com/afre/TecnologiasWebJavascript/blob/01-html/Informe/Imagenes/github2.jpg?raw=true)

### Creación de un grid system
Se instaló los plugins de Emmet y Beautify para agilitar el proceso de programación.
![brackets](https://github.com/afre/TecnologiasWebJavascript/blob/01-html/Informe/Imagenes/brackets1.jpg?raw=true)
![brackets](https://github.com/afre/TecnologiasWebJavascript/blob/01-html/Informe/Imagenes/brackets2.jpg?raw=true)
![brackets](https://github.com/afre/TecnologiasWebJavascript/blob/01-html/Informe/Imagenes/brackets3.jpg?raw=true)

<a href="#cabecera">A la cabecera</a>

<a name="conrec"></a>
## Conclusiones y Recomendaciones

- Se recomienda el uso de W3Schools como fuente de consulta por la amplia variedad 
de información sobre los lenguajes web.
- Se aconseja el uso de Emmet con Brackets para facilitar la programación web.
- La W3C es un consorcio que establece los estándares bajos los cuales se rigen la 
World Wide Web. 
- La página W3Schools, a pesar de tener un nombre parecido a la W3C, es independiente de 
este organismo, ya que fue desarrollada por la empresa Refnes Data.
- Las herramientas para desarrolladores de los navegadores son de bastante utilidad en 
la depuración de lenguajes web y para entender el funcionamiento de las distintas 
páginas de internet.

<a href="#cabecera">A la cabecera</a>

<a name="bibliografia"></a>
## Bibliografía

<a name="1">[1] Mozilla. (2016). CSS developer guide 
[Online]. Available: https://developer.mozilla.org/en-US/docs/Web/Guide/CSS</a>  
<a name="1">[2] C. Sharkie and A. Fisher, "Becoming Responsive", in _Jump Start Responsive Web Design_. 
Australia: SitePoint, 2013, pp.1-2.</a>  
<a name="3">[3] J. Robbins, "Responsive Web Design", in _Learning Web Design_. 
Canada: O'Reilly, 2012, pp.38-40.</a>  
<a name="4">[4] Bootstrap Core Team. (2016). About 
[Online]. Available: http://getbootstrap.com/about/</a>  
<a name="5">[5] Bootstrap Core Team. (2016). CSS 
[Online]. Available: http://getbootstrap.com/css/</a>  

<a href="#cabecera">A la cabecera</a>
