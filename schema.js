import {makeExecutableSchema} from 'graphql-tools';
import GraphQLDate from 'graphql-date';
import resolvers from './resolvers.js';

const typeDefs = `type Student{
    id: String!
    name: String
    idCard: String
    birthdate: Date
    lectures: [Lecture]
}
    scalar Date

    type Lecture{
        id: String!
        name: String
        subject: String
        lection: String
        date: Date
        teacher: Teacher
        classroom: Classroom
    }
    
    type Teacher{
        id: String!
        name: String
        birthdate: Date
        salary: Int
    }

    type Classroom{
        id: String!
        name: String
        building: String
        floor: String,
        capacity: Int
    }
    
    type Query{
        students: [Student]
        student(id: String): Student
        lectures: [Lecture]
        lecture(id: String): Lecture
        teachers: [Teacher]
        teacher(id: String): Teacher
        classrooms: [Classroom]
        classroom(id: String): Classroom
    }
    type Mutation{
        addStudent(name: String!, idCard: String!, birthdate: Date!, lectures: [Lecture]!): Student
        deleteStudent(id: String!): Student
        updateStudent(id: String!, name: String!, idCard: String!, birthdate: Date!, lectures: [Lecture]): Student
    }
    
`;

const schema = makeExecutableSchema({typeDefs, resolvers});

export default schema;