const mongoose = require('mongoose');

const HallTicketSchema = new mongoose.Schema({
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
    status: {
        type: String,
        enum: ['Generated', 'Pending'],
        default: 'Pending',
    },
    pdfLink: { type: String },
});

module.exports = mongoose.model('HallTicket', HallTicketSchema);
