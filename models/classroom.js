import mongoose from '../db.js';
import uuid from 'node-uuid';

const ClassroomSchema = mongoose.Schema({
    id: {type: String, default: uuid.v1},
    name: String,
    building: String,
    floor: String,
    capacity: Number,
    lectures: [{type: String, ref: 'Lecture'}]
});

module.exports = mongoose.model('Classroom', ClassroomSchema);
