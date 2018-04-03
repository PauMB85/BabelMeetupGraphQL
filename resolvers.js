import studentModel from './models/student';
import classModel from './models/class';
import teacherModel from './models/teacher';
import classroomModel from './models/classroom';

const resolvers = {
    Query: {
        students: () => {
            return studentModel.find({});
        },

        student: (root, {id}) => {
            return studentModel.find({student => student.id === id})
        },

        classes: () => {
            return classModel.find({});
        },

        class: (root, {id}) => {
            return classModel.find({class => class.id === id})
        }
    }
}

export default resolvers;