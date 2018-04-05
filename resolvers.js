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
    },

    Mutation: {
        addTeacher: (root, {name, birthdate, salary}) => {
            const teacher = new teacherModel({
                name: name,
                birthdate: birthdate,
                salary: salary
            })

            return teacher.save();
        },

        deleteTeacher: (root, {id}) => {
            return teacherModel.find({id: id}).remove().exec();
        },

        addClassroom: (root, {name, building, floor, capacity}) => {
            const classroom = new classroomModel({
                name: name,
                building: building,
                floor: floor,
                capacity: capacity
            });
            return classroom.save();
        },

        deleteClassroom: (root, {id}) => {
            return classroomModel.find({id: id}).remove().exec();
        },

        addLecture: (root, {name, subject, lection, date, teacher, classroom}) => {
            const lecture = new lectureModel({
                name: name,
                subject: subject,
                lection: lection,
                date: date,
                teacher: teacher,
                classroom: classroom
            });

            return lecture.save();
        }


    }
}

export default resolvers;