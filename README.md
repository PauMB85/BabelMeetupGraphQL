# Empower your API with GraphQL
This repository is a starter pack for the Meetup called 'Empower your API with GraphQL'. 

## Installation

First, you'd need to restore the MongoDB dump into your MongoDB instance:

```
mongorestore —-db babelMeetupGraphQL —-verbose ./dump/babelMeetupGraphQL
```

Then, you need to install all npm dependencies:
```
npm install
```


## How to run babelMeetupGraphQL
To run the server:
```
npm run build
```

## Endpoints

### Students

List of available endpoints for student resource:

| Method | Endpoint               |
| ------ | ---------------------- |
| GET    | /students              |
| POST   | /students              |
| GET    | /students/*:studentId* |
| PUT    | /students/*:studentId* |
| DELETE | /students/*:studentId* |

### Classes

List of available endpoints for class resource:

| Method | Endpoint            |
| ------ | ------------------- |
| GET    | /classes            |
| POST   | /classes            |
| GET    | /classes/*:classId* |
| PUT    | /classes/*:classId* |
| DELETE | /classes/*:classId* |

### Teachers

List of available endpoints for teacher resource:

| Method | Endpoint               |
| ------ | ---------------------- |
| GET    | /teachers              |
| POST   | /teachers              |
| GET    | /teachers/*:teacherId* |
| PUT    | /teachers/*:teacherId* |
| DELETE | /teachers/*:teacherId* |

### Classrooms

List of available endpoints for classroom resource:

| Method | Endpoint                   |
| ------ | -------------------------- |
| GET    | /classrooms                |
| POST   | /classrooms                |
| GET    | /classrooms/*:classRoomId* |
| PUT    | /classrooms/*:classRoomId* |
| DELETE | /classrooms/*:classRoomId* |