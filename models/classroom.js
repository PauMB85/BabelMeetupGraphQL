import mongoose from '../db.js';
import uuid from 'node-uuid';

const ClassroomSchema = mongoose.Schema({
    id: {type: String, default: uuid.v1},
    name: String,
    building: String,
    floor: String,
    capacity: Number,
    classes: [{type: mongoose.Schema.Types.ObjectId, ref: 'Class'}]
});

module.exports = mongoose.model('Classroom', ClassroomSchema);
