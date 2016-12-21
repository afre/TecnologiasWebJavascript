# Comandos importantes

## Instalar sails

```
npm install sails -g
```

## Crear un proyecto en sails.js

```
sails new NombreProyecto
```
## Levantar el servidor
```
sails lift
node app.js
```
las opciones son:
- 1. no se altera la base de datos
- 2. se altera la base de datos si se hicieron cambios en los modelos.
- 3. borra todos los datos de la base y vuelve a crear los modelos.

## servidor web sails.js
El servidor se encuentra en la carpeta "assests"

## Generar controladores
```
sails generate controller Nombrecontrolador
```
## Generar api
```
sails generate api Nombreapi
```
la api fusiona un controlador y un modelo.

## Generar modelo
```
sails generate model Nombremodelo
```
## Api rest

Crear
URL:
```
http://localhost:1337/Usuario
```
Método Http
```
POST
```

Datos:
```javascript
//json
{nombre:'alex',
apellido:'f',
correo:'...@hotmail.com'}
```