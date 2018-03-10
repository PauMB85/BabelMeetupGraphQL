import mongoose from '../db.js';

const ClassSchema = mongoose.Schema({
    name: String,
    subject: String,
    lection: String,
    date: Date,
    teacher: {type: mongoose.Schema.Types.ObjectId, ref: 'Teacher'},
    students: [{type: mongoose.Schema.Types.ObjectId, ref: 'Student'}],
    classroom: {type: mongoose.Schema.Types.ObjectId, ref: 'Classroom'}
});

module.exports = mongoose.model('Class', ClassSchema);
