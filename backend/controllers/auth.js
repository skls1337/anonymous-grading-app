const User = require('../models/user');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');

// @desc Register user
// @route POST /api/v1/auth/register
// @access Public
exports.register = async (req, res, next) => { 
    try {
    const { fullname, email, password, year, group } = req.body;

    // Create user
    const user = await User.create({
        fullname, 
        email, 
        password,
        year,
        group
    });

    sendTokenResponse(user, 200, res);
    } catch (err) {
        next(err)
    }
};

// @desc Login user
// @route POST /api/v1/auth/login
// @access Public
exports.login = async (req, res, next) => { 
    try {
    const { email, password } = req.body;

    // Validation
    if(!email || !password) {
        return next(new ErrorResponse('Please provide an email and a password', 400));
    }

    // Check for user
    const user = await User.findOne({ email }).select('+password');

    if (!user) {
        return next(new ErrorResponse('Invalid credentials', 401));
    }

    // Check if password matches
    const isMatched = await user.matchPassword(password);
    
    if(!isMatched){
        return next(new ErrorResponse('Invalid credentials', 401));
    }

    sendTokenResponse(user, 200, res);
    } catch (err) {
        next(err)
    }
};

// @desc get current logged in user
// @route GET /api/v1/auth/me
// @access Private
exports.getMe = async (req, res, next) => { 
    try {
        const user = await User.findById(req.user.id);

        res.status(200).json({
            success: true,
            data: user
        });
    } catch (err) {
        next(err);
    }
};

// Get token from model, create cookie and send response
const sendTokenResponse = (user, statusCode, res) => {
    // Create token 
    const token = user.getSignedJwtToken();

    const options = {
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
        httpOnly: true
    };

    if(process.env.NODE_ENV === 'production') {
        options.secure = true;
    }

    res
        .status(statusCode)
        .cookie('token', token, options)
        .json({
            success: true, 
            token
        });
}