const crypto = require('crypto');
const User = require('../models/user');
const asyncHandler = require('../middleware/async');
const sendEmail = require('../utils/sendEmail');
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

// @desc Log out (clear cookie)
// @route GET /api/v1/auth/logout
// @access Private
exports.logout = asyncHandler( async (req, res, next) => { 

    res.cookie('token', 'none', {
        expires: new Date(Date.now() + 10 * 1000),
        httpOnly: true
    })

    res.status(200).json({
        success: true,
        data: {}
    });
});

// @desc Update user details
// @route PUT /api/v1/auth/updatedetails
// @access Private
exports.updateDetails = asyncHandler( async (req, res, next) => { 
    const fieldsToUpdate = {
        fullname: req.body.fullname,
        email: req.body.email
    }
    const user = await User.findByIdAndUpdate(req.user.id, fieldsToUpdate, {
        new: true, 
        runValidators: true
    });

    res.status(200).json({
        success: true,
        data: user
    });
});

// @desc Update Password
// @route PUT /api/v1/auth/updatepassword
// @access Private
exports.updatePassword = asyncHandler (async (req, res, next) => { 
    const user = await User.findById(req.user.id).select('+password');

    // Check current password
    if(!(await user.matchPassword(req.body.currentPassword))) {
        return next(new ErrorResponse('Password is incorrect', 401));
    }

    user.password = req.body.newPassword;
    await user.save();

    sendTokenResponse(user, 200, res);
});

// @desc      Forgot password
// @route     POST /api/v1/auth/forgotpassword
// @access    Public
exports.forgotPassword = asyncHandler(async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email });
  
    if (!user) {
      return next(new ErrorResponse('There is no user with that email', 404));
    }
  
    // Get reset token
    const resetToken = user.getResetPasswordToken();
  
    await user.save({ validateBeforeSave: false });
  
    // Create reset url
    const resetUrl = `${req.protocol}://${req.get('host')}/api/v1/auth/resetpassword/${resetToken}`;
  
    const message = `This mail was sent to you because someone using this email has requested the reset of a password. Please make a PUT request to: \n\n ${resetUrl}`;
  
    try {
        await sendEmail({
        email: user.email,
        subject: 'Forgot Password',
        message,
        });
    
        res.status(200).json({ success: true, data: 'Email sent' });
    } catch (err) {
        console.log(err);
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;
    
        await user.save({ validateBeforeSave: false });
    
        return next(new ErrorResponse('Email could not be sent', 500));
    }
}); 

// @desc reset Password
// @route PUT /api/v1/auth/resetpassword/:resettoken
// @access Public
exports.resetPassword = asyncHandler(async (req, res, next) => { 
    // Get hashed token
    const resetPasswordToken = crypto
        .createHash('sha256')
        .update(req.params.resettoken)
        .digest('hex');

    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() }
    });

    if (!user) {
        return next(new ErrorResponse('Invalid token', 400));
    }

    // Set a new password
    user.password = req.body.password
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();

    sendTokenResponse(user, 200, res);
});


// Get token from model, create cookie and send response // Helper function not an actual controller method
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