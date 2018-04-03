# Empower your API with GraphQL
Este repositorio es un pack de inicio para el Meetup de Babel llamado 'Empower your API with GraphQL'.

## ¿Qué necesitas?

Asegurate que tienes instalado en tu máquina lo siguiente:
* Conexión a internet (Vale no se instala, pero asegúrate de tener)
* Node.js (6.11.0)
* NPM 3.10.10
* Un editor de código decente (VS Code, Atom, Sublime, vim, ...)
* MongoDB 2.6.7

## Instalación

Primero, necesitas restaurar el dump de MongoDB que he dejado en la carpeta ```./dump/``` en tu instancia de mongod:

```
mongorestore —-db babelMeetupGraphQL dump/babelMeetupGraphQL/
```

Y luego vamos a necesitar instalar las dependencias, etc:
```
npm install
```


## Cómo arrancar babelMeetupGraphQL
Asegúrate que tienes tu instancia de ```mongod``` levantada y corriendo. Después, vas a necesitar hacer un build de nuestra app de Express usando Babeljs:
```
npm run build
```

Eso es todo, ahora comprueba que tienes la app corriendo accediendo a: http://localhost:4000

## Endpoints

Lista de endpoints disponibles:

| Método HTTP | Students               | Clases | Teachers | Classrooms |
| ------ | ---------------------- | --- | --- | --- | 
| GET    | /students              | /classes | /teachers | /classrooms |
| POST   | /students              | /classes | /teachers | /classrooms |
| GET    | /students/*:studentId* | /classes/*:classId* | /teachers/*:teacherId* | /classrooms/*:classRoomId* |
| PUT    | /students/*:studentId* | /classes/*:classId* | /teachers/*:teacherId* | /classrooms/*:classRoomId* |
| DELETE | /students/*:studentId* | /classes/*:classId* | /teachers/*:teacherId* | /classrooms/*:classRoomId* |
