const User = require('../model/user');
const ExpressError = require('../utils/ExpressError');
const { createJSONToken } = require('../utils/helper');
const TimeTable = require('../model/timetable');

exports.loginHandler = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
        throw new ExpressError('Email or Password is wrong', 422);
    }

    if (user.role !== 'admin') {
        return res.status(403).json({ message: 'not an admin' });
    }

    if (password !== user.password) {
        return res.status(401).json('user or password is incorrect');
    }

    const token = createJSONToken(
        { username: user.username, userId: user._id.toString() },
        'secret',
        '15m'
    );

    res.status(200).json({ token });
};

exports.createTimeTable = async (req, res) => {
    const { department, faculty, subject, day, timeSlot } = req.body;
    const newEntry = new TimeTable({
        department,
        faculty,
        subject,
        day,
        timeSlot,
    });
    const savedEntry = await newEntry.save();
    res.status(201).json(savedEntry);
};
