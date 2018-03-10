import mongoose from '../db.js';

const ClassroomSchema = mongoose.Schema({
    name: String,
    building: String,
    floor: String,
    capacity: Number,
    classes: [{type: mongoose.Schema.Types.ObjectId, ref: 'Class'}]
});

module.exports = mongoose.model('Classroom', ClassroomSchema);
