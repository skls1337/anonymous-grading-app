const Review = require('../models/review');
const Projects = require('../models/projects');
const ErrorResponse = require('../utils/errorResponse');

// @desc Get all reviews posted by a user
// @route GET /api/v1/sentreviews
// @access Public (only for reviews)
exports.getSentReviews = async (req, res, next) => { 
    try {
        const review = await Review.find({user: req.user.id});
        
        if (!review) {
            return next(
                new ErrorResponse(
                    `review not found with id of ${req.params.id}`,
                    404
                )
            );
        }

        res.status(200).json({ succss: true, count: review.length, data: review });
    } catch (err) {
        next(err);
    }
};

// @desc Get all reviews for a project
// @route GET /api/v1/reviews
// @access Public (reviewer & prof)
exports.getReviewsForProject = async (req, res, next) => { 
    try {
        const review = await Review.find({project: req.params.id});

        if (!review) {
            return next(
                new ErrorResponse(
                    `review not found with id of ${req.params.id}`,
                    404
                )
            );
        }

        res.status(200).json({ succss: true, count: review.length, data: review });
    } catch (err) {
        next(err);
    }
};

// @desc Create a review
// @route POST /api/v1/projects/:id
// @access Private
exports.createReview = async (req, res, next) => { 
    try {
        // Add user 
        req.body.user = req.user.id;
        req.body.project = req.params.id; // '5fcf92798ab5d003acecdbba' 

        const Project = await Projects.findById(req.params.id);
        req.body.projectName = Project.title;
        
        const review = await Review.create(req.body);

        if(Project.user.toString() === req.body.user) {
            return next
            (new ErrorResponse(
                `The user with ID ${req.user.id} cannot rate his own creation`, 
                400
                )
            );
        }

        res.status(201).json({
            success: true,
            data: review
        });
    } catch (err) {
        next(err);
    }
};