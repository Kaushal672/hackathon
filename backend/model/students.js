const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    rollNumber: { type: String, unique: true, required: true },
    department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
    batch: { type: String, required: true },
    status: {
        type: String,
        enum: ['Pending', 'Approved', 'Rejected'],
        default: 'Pending',
    },
});

module.exports = mongoose.model('Student', StudentSchema);
