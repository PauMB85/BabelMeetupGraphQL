import studentModel from './models/student';
import lectureModel from './models/lecture';
import teacherModel from './models/teacher';
import classroomModel from './models/classroom';

const resolvers = {
    Lecture: {
        teacher(lecture) {
            return teacherModel.findOne({id: lecture.teacher});
        },
        classroom(lecture) {
            return classroomModel.findOne({id: lecture.classroom});
        }
    },
    Student: {
        lectures(student) {
            return lectureModel.find({id: {$in: student.lectures}});
        }
    },
    Query: {
        students: () => {
            return studentModel.find({});
        },

        student: (root, {id}) => {
            return studentModel.findOne({id: id});
        },

        lectures: () => {
            return lectureModel.find({});
        },

        lecture: (root, {id}) => {
            return lectureModel.findOne({id: id});
        },

        teachers: () => {
            return teacherModel.find({});
        },

        teacher: (root, {id}) => {
            return teacherModel.findOne({id: id});
        },

        classrooms: () => {
            return classroomModel.find({});
        },

        classroom: (root, {id}) => {
            return classroomModel.findOne({id: id});
        }
    }
}

export default resolvers;