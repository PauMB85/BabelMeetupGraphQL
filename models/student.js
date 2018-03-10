import mongoose from '../db.js';

const StudentSchema = mongoose.Schema({
    name: String,
    idCard: String,
    birthdate: Date,
    classes: [{type: mongoose.Schema.Types.ObjectId, ref: 'Class'}]
});

module.exports = mongoose.model('Student', StudentSchema);
