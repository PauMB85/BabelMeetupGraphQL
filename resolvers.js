import studentModel from './models/student';

const resolvers = {
    Query: {
        students: () => {
            return studentModel.find({});
        }
    }
}

export default resolvers;