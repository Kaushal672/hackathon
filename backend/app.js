const express = require('express');
const mongoose = require('mongoose');

const adminRouter = require('./routes/admin');
const studentRouter = require('./routes/students');
const facultyRouter = require('./routes/faculty');
const Department = require('./model/department');
const Faculty = require('./model/faculty');
const Subject = require('./model/subjects');

const app = express();

app.use(express.json());

app.use('/admins', adminRouter);
app.use('/students', studentRouter);
app.use('/faculty', facultyRouter);

app.use((err, _req, res, _next) => {
    if (err.name === 'ValidationError') err.statusCode = 422;
    const { statusCode = 500, data = [] } = err;

    if (!err.message) err.message = 'Something went wrong, Try again!';
    res.status(statusCode).json({ message: err.message });
});

app.listen(3000, async () => {
    await mongoose.connect('mongodb://localhost:27017/iadatabase');
    console.log('server listening at port 3000');
});
