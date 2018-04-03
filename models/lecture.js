import mongoose from '../db.js';
import uuid from 'node-uuid';

const ClassSchema = mongoose.Schema({
    id: {type: String, default: uuid.v1},
    name: String,
    subject: String,
    lection: String,
    date: Date,
    teacher: {type: String, ref: 'Teacher'},
    classroom: {type: String, ref: 'Classroom'}
});

module.exports = mongoose.model('Lecture', ClassSchema);
