const mongoose = require('mongoose');

const SubjectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
    assignedFaculty: { type: mongoose.Schema.Types.ObjectId, ref: 'Faculty' },
});

module.exports = mongoose.model('Subject', SubjectSchema);
