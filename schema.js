import {makeExecutableSchema} from 'graphql-tools';
import GraphQLDate from 'graphql-date';
import resolvers from './resolvers.js';

const typeDefs = `type Student{
    name: String
    idCard: String
    birthdate: Date
    classes: [Class]
}
    scalar Date

    type Class{
        id: Int
        name: String
        subject: String
        lection: String
        date: Date
        teacher: Teacher
        classroom: Classroom
    }
    
    type Teacher{
        id: Int!
        name: String
        birthdate: Date
        salary: Int
    }

    type Classroom{
        id: Int!
        name: String
        building: String
        floor: String,
        capacity: Int
    }
    
    type Query{
        students: [Student]
        student(id: String): Student
        classes: [Class]
        class(id: String): Class
        teachers: [Teacher]
        teacher(id: String): Teacher
        classrooms: [Classroom]
        classroom(id: String): Classroom
    }
    
`;

const schema = makeExecutableSchema({typeDefs, resolvers});

export default schema;