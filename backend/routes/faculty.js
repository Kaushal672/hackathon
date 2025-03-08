const router = require('express').Router();
const catchAsync = require('../utils/catchAsync');

const facultyHandler = require('../controllers/faculty');

router.route('/timetable').get(catchAsync(facultyHandler.getTimeTables));

router.route('/timetable/:id').get(catchAsync(facultyHandler.getTimeTable));

module.exports = router;
