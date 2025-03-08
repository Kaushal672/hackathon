const mongoose = require('mongoose');

const AttendanceSchema = new mongoose.Schema({
    faculty: { type: mongoose.Schema.Types.ObjectId, ref: 'Faculty' },
    subject: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject' },
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
    date: { type: Date, required: true },
    status: { type: String, enum: ['Present', 'Absent'], required: true },
});

module.exports = mongoose.model('Attendance', AttendanceSchema);
