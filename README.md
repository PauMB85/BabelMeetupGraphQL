# Empower your API with GraphQL
This repository is a starter pack for the Meetup called 'Empower your API with GraphQL'. 

## Installation

First, you'd need to restore the MongoDB dump into your MongoDB instance:

```
mongorestore —-db babelMeetupGraphQL dump/babelMeetupGraphQL/
```

Then, you need to install all npm dependencies:
```
npm install
```


## How to run babelMeetupGraphQL
First, ensure your ```mongod``` instance is up and running. Then, we need to build our Express app using Babeljs:
```
npm run build
```

That's it, now we can check our app is running trying to access to : http://localhost:4000
## Endpoints

List of available endpoints:

| Method | Students               | Clases | Teachers | Classrooms |
| ------ | ---------------------- | --- | --- | --- | 
| GET    | /students              | /classes | /teachers | /classrooms |
| POST   | /students              | /classes | /teachers | /classrooms |
| GET    | /students/*:studentId* | /classes/*:classId* | /teachers/*:teacherId* | /classrooms/*:classRoomId* |
| PUT    | /students/*:studentId* | /classes/*:classId* | /teachers/*:teacherId* | /classrooms/*:classRoomId* |
| DELETE | /students/*:studentId* | /classes/*:classId* | /teachers/*:teacherId* | /classrooms/*:classRoomId* |
