const router = require('express').Router();

const studentHandler = require('../controllers/students');
const catchAsync = require('../utils/catchAsync');

router.route('/login').post(catchAsync(studentHandler.loginHandler));

module.exports = router;
