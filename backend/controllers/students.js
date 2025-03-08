const User = require('../model/user');

exports.loginHandler = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
        throw new ExpressError('Email or Password is wrong', 422);
    }

    if (user.role !== 'student') {
        return res.status(403).json({
            message: 'not a student',
        });
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
