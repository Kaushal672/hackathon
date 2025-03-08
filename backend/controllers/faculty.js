const TimeTable = require('../model/timetable');

exports.getTimeTables = async (req, res) => {
    const entries = await TimeTable.find()
        .populate('department')
        .populate('faculty')
        .populate('subject');
    res.status(200).json(entries);
};

exports.getTimeTable = async (req, res) => {
    const entry = await TimeTable.findById(req.params.id)
        .populate('department')
        .populate('faculty')
        .populate('subject');
    if (!entry) {
        return res.status(404).json({ error: 'Timetable entry not found' });
    }
    res.status(200).json(entry);
};
