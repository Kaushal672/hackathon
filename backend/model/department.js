const mongoose = require('mongoose');

const DepartmentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    hod: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Faculty as HOD
});

module.exports = mongoose.model('Department', DepartmentSchema);
