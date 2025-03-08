const mongoose = require('mongoose');

const MarksSchema = new mongoose.Schema({
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
    subject: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject' },
    assessmentType: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'AssessmentType',
    },
    marksObtained: { type: Number, required: true },
    status: { type: String, enum: ['Frozen', 'Editable'], default: 'Editable' },
});

module.exports = mongoose.model('Marks', MarksSchema);
