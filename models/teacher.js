import mongoose from '../db.js';
import uuid from 'node-uuid';

const TeacherSchema = mongoose.Schema({
    id: {type: String, default: uuid.v1},
    name: String,
    birthdate: Date,
    salary: Number
});

module.exports = mongoose.model('Teacher', TeacherSchema);
