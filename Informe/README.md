# Diseño, calidad, WAI, validación y SEO

### Materia : `Tecnologías Web con JavaScript`

<p align="center">
<img src="http://www.javatpoint.com/images/javascript/javascript_logo.png" width="300" height="200">
</p>

### Tema : `Diseño, calidad, WAI, validación y SEO` 
### Fecha : `2016-10-26`
### Estudiante : `Alex José Freire Bustos`
### Profesor : `Tania Calle - Adrian Eguez`
### Número de informe : `3`

<a name="cabecera"></a>
## Índice de contenidos


- <a href="#tema">Tema</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#marco-teorico">Marco Teorico</a>
  * <a href="#webdesign">Web Design</a>
  * <a href="#webquality">Web Quality</a>
  * <a href="#webwai">Web WAI</a>
  * <a href="#webvalidation">Web Validation</a>
  * <a href="#webseo">Web SEO</a>
- <a href="#desarrollo">Desarrollo de la Práctica</a>
- <a href="#conrec">Conclusiones y Recomendaciones</a> 
- <a href="#bibliografia">Bibliografía</a>

<a name="tema"></a>
## Tema
El tema de la práctica es: `Diseño, calidad, WAI, validación y SEO`

<a name="objetivos"></a>
## Objetivos

- Aprender buenas prácticas en el desarrollo de páginas web.
- Conocer cuáles son los estándares a seguirse para desarrollar páginas web de calidad.
- Aprender a desarrollar páginas web accesibles para personas con discapacidad.

<a name="marco-teorico"></a>
## Marco Teorico
<a name="webdesign"></a>
### Web Design
Uno de los aspectos importantes a considerarse al momento de diseñar una página web es conocer
la audicienca a la cuál va a estar dirigida. Antes de entrar al diseño, es necesario planificar
lo que se va a realizar <a href="#1">[1]</a>. Algunos de los aspectos que se deben tomar en consideración al momento de 
diseñar una página web son los siguientes:
- Los usuarios son escáneres  
La gran mayoría de visitantes de una página web no leen todo su contenido. Por lo general, ellos
la hojean durante unos pocos segundos para decidir si permanecen o se van. Por esto, es necesario
poner información concisa en la página, con párrafos cortos <a href="#1">[1]</a>.
- Menos es más  
Es aconsejable mantener los párrafos, páginas y capítulos lo más corto posibles. También, es 
recomendable usar espacios, para evitar sobrecargar a la audiencia con exceso de texto o, en su 
defecto, ubicar la informació en diferentes páginas <a href="#1">[1]</a>.
- Navegación  
Para facilidad de los usuarios, es necesario mantener la misma estructura en todas las páginas del 
sitio web. También, se debe evitar el exceso de hipervínculos en cada párrrafo <a href="#1">[1]</a>.
- Rapidez de descarga  
Se debe evitar que la página web tome mucho tiempo en cargar. Por lo general, los usuarios cambian 
de página si no obtienen rápido los resultados que buscan. Se recomienda que la página cargue en 
menos de 7 segundos <a href="#1">[1]</a>.
- Permitirle hablar a la audiencia  
Un aspecto que resulta atractivo para algunos usuarios es el poder dar a conocer sus comentarios
y sugerencias a los creadores de una página web. De esta manera, es posible recibir una 
retroalimentación acerca de que aspectos mejorar <a href="#1">[1]</a>.
- La pantalla o monitor de los visitantes  
No todos los usuarios tienen la misma resolución en sus monitores; por tanto, es necesario que 
la página web que se está creando se vea bien en una amplia variedad de resoluciones. Puede resultar
útil revisar algunas estadísticas sobre cuáles son las resoluciones más usadas en la actualidad.
En la siguiente tabla, tenemos un ejemplo sobre estas estadísticas, las cuales fueron obtenidas 
por W3schools, gracias a la información que ellos han recolectado de sus visitantes a lo largo 
de varios años <a href="#1">[1]</a>.

Date|Otras altas|1920x1080|1366x768|1280x1024|1280x800|1024x768|800x600|Más bajas
---|---|---|---|---|---|---|---|---
Enero 2016|30.7%|18%|35%|6%|4%|3%|0.3%|3%
Enero 2012|35%|8%|19%|12%|11%|13%|1%|1%
Enero 2008|38%|||||48%|8%|6%
Enero 2004|10%|||||47%|37%|6%
Enero 2000|4%|||||25%|56%|15%
- ¿Qué navegador los visitantes usan?
Es necesario tomar en consideración los navegadores más usados por los usuarios que 
visitan nuestra página web, para que esta pueda ser visualizada adecuadamente por los 
usuarios. De uno navegador a otro, hay pequeñas diferencias en el código soportado; por 
tanto, se requiere el desarrollador desarrolle páginas que puedan visualizarse en diferentes
navegadores y versiones. La siguiente tabla muestra algunas de las estadísticas de los
navegadores más usados por los usuarios <a href="#1">[1]</a>.

Date|Chrome|IE|Firefox|Safari|Opera
---|---|---|---|---|---
Enero 2016|69.9%|6.1%|17.8%|3.6%|1.3%
Enero 2014|55.7%|10.2%|26.9%|3.9%|1.8%
Enero 2012|35.3%|20.1%|37.2%|4.3%|2.4%
Enero 2010|10.8%|36.2%|46.3%|3.7%|2.2%
Enero 2008||54.7%|36.4%|1.9%|1.4%
- ¿Qué plugins los visitantes tienen?
Es necesario considerar si los usuario de nuestra página tienen los plugins necesarios
para acceder al contenido. De lo contrario, es posible que nuestra página no pueda ser 
visualizada adecuadamente, causando molestias al usuario <a href="#1">[1]</a>.
- Acerca de las discapacidades
Se debe tomar en consideración que nuestra página puede ser visitada por personas que
tienen distintos tipos de discapacidades. Por lo tanto, es necesario desarrollar la 
página bajo estándares de accesibilidad web. Un ejemplo, es el caso de las personas no videntes,
quienes podrán acceder al contenido de nuestra página siempre y cuando programemos
textos alternativos para imágenes u otros elementos visuales <a href="#1">[1]</a>.
<a href="#cabecera">A la cabecera</a>

<a name="webquality"></a>
### Web Quality
Uno de los aspectos que se deben considerar para mejroar la calidad de un sitio web 
es la implementación de los estándares web más actuales <a href="#2">[2]</a>. Algunas de estas 
prácticas son:
- Usar HTML5  
Todas las páginas deben tener un el tag `<!DOCTYPE>` el cual definirá la versión de HTML que se 
está usando. Conocer la versión del HTML facilita los procesos de validación <a href="#2">[2]</a>.
- Usar archivos CSS separados  
Al usar los archivos CSS en archivos separados se facilita la reescritura de las líneas de código
cuando se quiere cambiar el estilo de la página web; ya que, de esta manera, solo con modificar un 
único archivo podemos cambiar varias páginas a la vez. De lo contrario, si el CSS está dentro
del código de la página, será necesario modificar las líneas de código de todas las páginas, lo cual 
toma más tiempo <a href="#2">[2]</a>.
- Validation WEB  
El uso de un validador web permite saber si las páginas web de un sitio cumplen con los 
estándares web seleccionados. Gracias a esto, es posible obtener una lista de errores
que permitirá mejorar la página antes de que sea publicada <a href="#2">[2]</a>.
- El elemento `<title>`  
El tag `<title>` da una descripción breve sobre el contenido de una página al usuario. Al 
usar un motor de búsqueda, este aparecerá en los resultados, lo cual permitirá que las 
personas que esten interesadas en dicho tema den clic sobre dicho vínculo <a href="#2">[2]</a>.
- Elementos de cabecera  
El uso de cabeceras permite estructurar las páginas web de un sitio y facilitar su 
indexación por los motores de búsqueda. Se puede recurrir a CSS para cambiar el estilo
de dichas cabeceras si no son del gusto del desarrollador o del usuario <a href="#2">[2]</a>.
- Conjuntos de caracteres  
El uso del tag `<meta charset="">` permite que el navegador web pueda identificar la 
codificación de caracteres que se está usando en un página web. En internet, se puede 
encontrar una amplia variedad de formatos, por tanto, para que el usuario pueda
visualizar correctamente la información disponible, es necesario usar dicho tag. La 
gran mayoría de navegadores usan la codificación Unicode <a href="#2">[2]</a>.
- Formatos de fechas  
Es necesario usar un formato estandarizado para una página web, por ejemplo, lo
establecido por la ISO. Si no se hace esto, se puede originar algunas ambigüedades y 
el visitante de la página díficilmente podrá entender qué fecha es la que se está 
mencionando <a href="#2">[2]</a>.

<a href="#cabecera">A la cabecera</a>
<a name="webwai"></a>
### Web WAI
 <a href="#3">[3]</a>. 

<a href="#cabecera">A la cabecera</a>
<a name="webvalidation"></a>
### Web Validation
 <a href="#4">[4]</a>.

<a href="#cabecera">A la cabecera</a>
<a name="webseo"></a>
### Web SEO
 <a href="#5">[5]</a>.

<a href="#cabecera">A la cabecera</a>

<a name="desarrollo"></a>
## Desarrollo del informe

### Selector CSS basado en el nombre del elemento
Se aplicó una hoja de estilos teniendo como selector el nombre de los tag sobre los cuales se va a aplicar dicho estilo.
![selectorElemento](https://github.com/afre/TecnologiasWebJavascript/blob/02-html/Informe/Imagenes/selectorElemento.jpg?raw=true)
![selectorElemento](https://github.com/afre/TecnologiasWebJavascript/blob/02-html/Informe/Imagenes/selectorElemento2.jpg?raw=true)

### Selector CSS basado en el id
Se aplicó una hoja de estilos teniendo como selector el valor del atributo id de los tag.
![selectorId](https://github.com/afre/TecnologiasWebJavascript/blob/02-html/Informe/Imagenes/selectorId.jpg?raw=true)
![selectorId](https://github.com/afre/TecnologiasWebJavascript/blob/02-html/Informe/Imagenes/selectorId2.jpg?raw=true)

### Selector CSS basado en la clase
Se aplicó una hoja de estilo teniendo como selector el valor del atributo clase de los tag.
![selectorClase](https://github.com/afre/TecnologiasWebJavascript/blob/02-html/Informe/Imagenes/selectorClase.jpg?raw=true)
![selectorClase](https://github.com/afre/TecnologiasWebJavascript/blob/02-html/Informe/Imagenes/selectorClase2.jpg?raw=true)

### Selectores CSS combinados
Se aplicó una hoja de estilo combinando los distinto tipos de selectores.
![selectorCombinado](https://github.com/afre/TecnologiasWebJavascript/blob/02-html/Informe/Imagenes/selectorCombinado.jpg?raw=true)
![selectorCombinado](https://github.com/afre/TecnologiasWebJavascript/blob/02-html/Informe/Imagenes/selectorCombinado2.jpg?raw=true)

### Configuración de la CDN de Bootstrap
Se añade la respectiva instrucción para definir la cdn de bootstrap.
![bootstrap](https://github.com/afre/TecnologiasWebJavascript/blob/02-html/Informe/Imagenes/cdnBootstrap.jpg?raw=true)

### Creación de un grid system
Se creo grid system de diferentes tipos usando bootstrap con diseño web responsive.
![gridSystem](https://github.com/afre/TecnologiasWebJavascript/blob/02-html/Informe/Imagenes/gridSystem.jpg?raw=true)
![gridSystem](https://github.com/afre/TecnologiasWebJavascript/blob/02-html/Informe/Imagenes/gridSystem2.jpg?raw=true)
![gridSystem](https://github.com/afre/TecnologiasWebJavascript/blob/02-html/Informe/Imagenes/gridSystem3.jpg?raw=true)

<a href="#cabecera">A la cabecera</a>

<a name="conrec"></a>
## Conclusiones y Recomendaciones

- Se recomienda prestar atención al orden en se aplican los estilos en el documento html; ya que, al aplicarse en cascada, unos estilos 
reemplazan a otros.
- A través de CSS es posible obtener diseños de páginas web más agradables al usuario final.
- Se puede recurrir al framework de Bootstrap para aplicar un diseño web responsive que se adapte al tamaño de los distintos dispoitivos.
- El CSS puede incluirse en el mismo documento html o en un archivo diferente que tenga como extensión .css .
- Se recomienda tomar en consideración el número máximo de columnas de un grid system, el cual es 12, al momento de diseñar una tabla responsive.

<a href="#cabecera">A la cabecera</a>

<a name="bibliografia"></a>
## Bibliografía

<a name="1">[1] Refnes Data. (2016). Web Design 
[Online]. Available: http://w3schools.bootcss.com/website/web_design.html</a>  
<a name="1">[2] C. Sharkie and A. Fisher, "Becoming Responsive", in _Jump Start Responsive Web Design_. 
Australia: SitePoint, 2013, pp.1-2.</a>  
<a name="3">[3] J. Robbins, "Responsive Web Design", in _Learning Web Design_. 
Canada: O'Reilly, 2012, pp.38-40.</a>  
<a name="4">[4] Bootstrap Core Team. (2016). About 
[Online]. Available: http://getbootstrap.com/about/</a>  
<a name="5">[5] Bootstrap Core Team. (2016). CSS 
[Online]. Available: http://getbootstrap.com/css/</a>  

<a href="#cabecera">A la cabecera</a>
