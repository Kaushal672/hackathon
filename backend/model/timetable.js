const mongoose = require('mongoose');

const { Schema } = mongoose;

const timeTableSchema = new Schema({
    department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
    faculty: { type: mongoose.Schema.Types.ObjectId, ref: 'Faculty' },
    subject: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject' },
    day: { type: String, required: true },
    timeSlot: { type: String, required: true },
});

module.exports = mongoose.model('TimeTable', timeTableSchema);
