# Componentes HTML de una pagina web

### Materia : `Tecnologías Web con JavaScript`

<p align="center">
<img src="http://www.javatpoint.com/images/javascript/javascript_logo.png" width="300" height="200">
</p>

### Tema : `Componentes HTML de una pagina web` 
### Fecha : `2016-10-18`
### Estudiante : `Alex José Freire Bustos`
### Profesor : `Tania Calle - Adrian Eguez`
### Número de informe : `1`

<a name="cabecera"></a>
## Índice de contenidos


- <a href="#tema">Tema</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#marco-teorico">Marco Teorico</a>
  * <a href="#internet">Internet</a>
  * <a href="#www">World Wide Web</a>
  * <a href="#w3c">World Wide Web Consortium</a>
  * <a href="#w3schools">W3Schools</a>
  * <a href="#html">HTML</a>
  * <a href="#navegador">Navegador</a>
- <a href="#desarrollo">Desarrollo de la Práctica</a>
- <a href="#conrec">Conclusiones y Recomendaciones</a> 

<a name="tema"></a>
## Tema
El tema de la práctica es: `Componentes HTML de una pagina web`

<a name="objetivos"></a>
## Objetivos

- Desarrollar el conocimiento Web sobre el internet, la World Wide Web y el WWW Consortium.
- Conocer herramientas de desarrolladores web como: postman, inspetor web
- Aprender el uso de lenguaje HTML

<a name="marco-teorico"></a>
## Marco Teorico
<a name="internet"></a>
### Internet
El internet no debe ser entendido como una sola red, sino como un conjunto de distintas 
redes que emplean ciertos protocolos comunes y proveen determinados servicios. En 
realidad, el internet no fue planeado; por lo que, en sus orígenes, nadie habría esperado
el alcance que tiene en nuestros tiempos actuales, lo cual imposibilita 
que pueda ser controlado <a href="#1">[1]</a>.

<a href="#cabecera">A la cabecera</a>
<a name="www"></a>
### World Wide Web
La World Wide Web, cuyas siglas son WWW, es un espacio de información en el cual los 
ítems de interés, denominados como recursos, son identificados por identificadores 
globales, llamados también URI (Uniform Resource Identifiers) <a href="#2">[2]</a>.

<a href="#cabecera">A la cabecera</a>
<a name="w3c"></a>
### World Wide Web Consortium
La World Wide Web Consortium, cuyas siglas son W3C, es una comunidad internacional donde
las organizaciones miembro, un staff a tiempo completo y el público en general trabajan juntos para 
desarrollar estándares web. Es dirigida por Tim Berners-Lee y Jeffrey Jaffe. Su misión 
es guiar a la web a su potencial completo <a href="#3">[3]</a>.

<a href="#cabecera">A la cabecera</a>
<a name="w3schools"></a>
### W3Schools
Es una págína para desarrolladores web, con varios tutoriales y referencias en lenguajes
de desarrollo web, tales como: HTML, CSS, Javascript, PHP, SQL y Bootstrap. Su nombre se
deriva de la WWW; sin embargo, no es un sitio afiliado a la W3C. Se creó en 1998 por 
Refnes Data, una compañía de consultoría y desarrollo de software de Noruega 
<a href="#4">[4]</a>.

<a href="#cabecera">A la cabecera</a>
<a name="html"></a>
### HTML
HTML significa "HyperText Markup Language", lo que en español viene a significar 
Lenguaje de Marcado de Hiper Texto. Fue introducido con la web. Le permite a sus usuarios 
desarrollar páginas web que incluyen texto, gráficos, videos, apuntadores a otras sitios, 
etc. Permite describir cómo se va a dar formato a los documentos <a href="#5">[5]</a>.

<a href="#cabecera">A la cabecera</a>
<a name="navegador"></a>
### Navegador
Los navegadores son los programas que son usados para conseguir información de internet. 
Estos ayudan a las personas no técnicas a navegar por internet, ya que son muy amigables
con el usuario, evitando que este tenga que recordar ciertos comandos. Los principales 
tipos de navegadores que podemos encontrar son de dos tipos: de solo texto y los 
gráficos <a href="#6">[6]</a>.

<a href="#cabecera">A la cabecera</a>


<a name="desarrollo"></a>
## Desarrollo del informe

### Imagenes desde Github **IMPORTANTE**

Se pueden usar imágenes desde nuestros archivos en github que constan de la siguiente URL:

- Github
  * La url de github que es `https://github.com` 
- Usuario
  * La url de usuario de github que en este caso es: `/adrianeguez` 
- Repositorio
  * El repositorio de Github que estamos usando, en este caso es `/Tec_Web_Js_2016_B`
- Rama o  Branch
  * La rama de nuestro repositorio en este formato: `/blob/master`
- El PATH
  * La direccíon de nuesto archivo por ejemplo `/carpeta/subcarpeta/subsubcarpeta/archivo.png` en este ejemplo es `/Ejemplo%20de%20un%20Informe/Imagenes/Flujograma.png` 
- RAW
  * Por ultimo mandamos un Query String Parameter de la con la variable `raw` y valor `true` de la siguiente manera: `?raw=true`
  
**Al final** nuestro url queda de la siguiente manera:

#### `https://github.com/adrianeguez/Tec_Web_Js_2016_B/blob/master/Ejemplo%20de%20un%20Informe/Imagenes/Flujograma.png?raw=true`

<p align="center">
<img src="https://github.com/adrianeguez/Tec_Web_Js_2016_B/blob/master/Ejemplo%20de%20un%20Informe/Imagenes/Flujograma.png?raw=true" width="500" height="800">
</p>

Por ultimo podemos centrar las imagenes de la siguiente manera:


```
<p align="center">

<img src="https://github.com/adrianeguez/Tec_Web_Js_2016_B/blob/master/Ejemplo%20de%20un%20Informe/Imagenes/Flujograma.png?raw=true" width="500" height="800">

</p>
```

### Links dentro de github

Para nosotros utilizar los Links dentro de Github debemos de hacer dos cosas:

1. Definir un anchor name donde nosotros queramos mover cuando demos clic de la siguiente manera y formate (**NOTESE QUE ESTAN JUNTAS**):

  ```
  <a name="nombre"></a>
  ## titulo2
  ```
2. Después de esto debemos de linkear mediante un texto por ejemplo en una lista de la siguiente manera (**NO ELVIDAR EL `#`**):
 
  ```
  - <a href="#nombre">Dale clic aqui para ir al titulo 2</a>
  ```
  <a name="conrec"></a>

<br>
<a href="#cabecera">A la cabecera</a>

## Conclusiones y Recomendaciones

- Se recomienda mejorar la presentacion
- Se recomienda usar el ir a cabecera despues de terminar una seccion
- Se aprendio el uso de HTML con Markdown
- Conocimos herramientas de desarrollo web como postman e inspector web
- Desarrollamos conocimientos de introducción Web

<br>
<a href="#cabecera">A la cabecera</a>

## Bibliografía

<a name="1">[1] A. Tanenbaum and D. Wetherall, "Internet", in _Redes de computadoras_. 
México: Pearson Educación, 2012, pp.46-47.</a>  
<a name="2">[2] W3C. (2004, Nov. 15). Architecture of the World Wide Web, Volume One 
[Online]. Available: https://www.w3.org/TR/webarch/</a>  
<a name="3">[3] W3C. (2016). About W3C [Online]. Available: https://www.w3.org/Consortium/</a>  
<a name="4">[4] Refnes Data. (2016). About W3Schools [Online]. 
Available: http://www.w3schools.com/about/</a>  
<a name="5">[5] A. Tanenbaum and D. Wetherall, "Páginas web estáticas", in 
_Redes de computadoras_. México: Pearson Educación, 2012, pp.569-573.</a>  
<a name="6">[6] A. Arora, "Web Browsers", in 
_Computer Fundamentals and Applications_. India: Vikas, 2015, pp.327-328.</a>  


<br>
<a href="#cabecera">A la cabecera</a>
