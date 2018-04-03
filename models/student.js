import mongoose from '../db.js';
import uuid from 'node-uuid';

const StudentSchema = mongoose.Schema({
    id: {type: String, default: uuid.v1},
    name: String,
    idCard: String,
    birthdate: Date,
    lectures: [{type: String, ref: 'Lecture'}]
});

module.exports = mongoose.model('Student', StudentSchema);
