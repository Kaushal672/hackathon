const mongoose = require('mongoose');

const FacultySchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
});

module.exports = mongoose.model('Faculty', FacultySchema);
