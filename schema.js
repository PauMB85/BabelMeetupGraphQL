import {makeExecutableSchema} from 'graphql-tools';
import GraphQLDate from 'graphql-date';
import resolvers from './resolvers.js';

const typeDefs = `type Student{
    id: ID!
    name: String
    idCard: String
    birthdate: Date
    lectures: [Lecture]
}
    scalar Date

    type Lecture{
        id: ID!
        name: String
        subject: String
        lection: String
        date: Date
        teacher: Teacher
        classroom: Classroom
    }
    
    type Teacher{
        id: ID!
        name: String
        birthdate: Date
        salary: Int
    }

    type Classroom{
        id: ID!
        name: String
        building: String
        floor: String,
        capacity: Int
    }
    
    type Query{
        students: [Student]
        student(id: ID): Student
        lectures: [Lecture]
        lecture(id: ID): Lecture
        teachers: [Teacher]
        teacher(id: ID): Teacher
        classrooms: [Classroom]
        classroom(id: ID): Classroom
    }
    type Mutation{
        addTeacher(name: String!, birthdate: Date, salary: Float): Teacher
        deleteTeacher(id: ID!): Boolean
        addClassroom(name: String!, building: String!, floor: String!, capacity: Int!): Classroom
        deleteClassroom(id: ID!): Boolean
        addLecture(name: String!, subject: String!, lection: String!, date: Date!, teacher: ID!, classroom: ID!): Lecture
    }
    
`;

const schema = makeExecutableSchema({typeDefs, resolvers});

export default schema;