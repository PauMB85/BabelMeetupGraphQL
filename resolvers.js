import studentModel from './models/student';
import lectureModel from './models/lecture';
import teacherModel from './models/teacher';
import classroomModel from './models/classroom';

const resolvers = {
    Query: {
        students: () => {
            return studentModel
                .find({})
                .populate({
                    path:"lectures",
                    populate: {path: "teacher classroom"}
                });
        },

        student: (root, {id}) => {
            return studentModel.findOne({id: id})
                .populate({
                    path:"lectures",
                    populate: {path: "teacher classroom"}
                });
        },

        lectures: () => {
            return lectureModel
                .find({})
                .populate({path: "teacher classroom"});
        },

        lecture: (root, {id}) => {
            return lectureModel
                .findOne({id: id})
                .populate({path: "teacher classroom"});
        },

        teachers: () => {
            return teacherModel
                .find({});
        },

        teacher: (root, {id}) => {
            return teacherModel
                .findOne({id: id});
        },

        classrooms: () => {
            return classroomModel
                .find({});
        },

        classroom: (root, {id}) => {
            return classroomModel
                .findOne({id: id});
        }
    },
    Mutation: {
        addStudent: (root, {name, idCard, birthdate, lectures}) => {
            const student = new studentModel({
                name: name,
                birthdate: birthdate,
                idCard: idCard
            });

            return student.save();
        },

        deleteStudent: (root, {id}) => {
            return studentModel.findByIdAndRemove(id);
        },
        
        updateStudent: (root, {id, name, idCard, birthdate, lectures}) => {

        }
    }
}

export default resolvers;