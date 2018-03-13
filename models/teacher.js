import mongoose from '../db.js';

const TeacherSchema = mongoose.Schema({
    name: String,
    birthdate: Date,
    salary: Number
});

module.exports = mongoose.model('Teacher', TeacherSchema);
