import mongoose from '../db.js';
import uuid from 'node-uuid';

const StudentSchema = mongoose.Schema({
    id: {type: String, default: uuid.v1},
    name: String,
    idCard: String,
    birthdate: Date,
    classes: [{type: mongoose.Schema.Types.ObjectId, ref: 'Class'}]
});

module.exports = mongoose.model('Student', StudentSchema);
