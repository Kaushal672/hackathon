const catchAsync = require('../utils/catchAsync');

const routes = require('express').Router();
const adminController = require('../controllers/admin');

routes.route('/login').post(catchAsync(adminController.loginHandler));

routes.route('/timetable').post(catchAsync(adminController.createTimeTable));

module.exports = routes;
