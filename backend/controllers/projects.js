const ProjectRequirements = require('../models/projectrequirements');
const Projects = require('../models/projects');
const Review = require('../models/review');
const User = require('../models/user');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');

const idstring = '5fce4814ba6374080c560ccf';

// @desc Get all Projects
// @route GET /api/v1/projects
// @access Protected?
exports.getProjects = async (req, res, next) => { 
    try {
        const projects = await Projects.find();

        res.status(200).json({
            success: true,
            count: projects.length,
            data: projects,
        });
    } catch (err) {
        res.status(400).json({ success: false });
    }
};

// @desc Get a Project
// @route GET /api/v1/projects/:id
// @access Public
exports.getProject = async (req, res, next) => { 
    try {
        const projects = await Projects.findById(req.params.id);

        if (!projects) {
            return next(
                new ErrorResponse(
                    `project not found with id of ${req.params.id}`,
                    404
                )
            );
        }

        res.status(200).json({ succss: true, data: projects });
    } catch (err) {
        //res.status(400).json({ success: false });
        next(err);
    }
};

// @desc Create a Project
// @route POST /api/v1/projects
// @access Public
exports.createProject = async (req, res, next) => {
    try {
        const projects = await Projects.create(req.body);

        res.status(201).json({
            success: true,
            data: projects,
        });
    } catch (err) {
        next(err);
    }
};

// @desc Update a Project
// @route PUT /api/v1/projects/:id
// @access Public
exports.updateProject = async (req, res, next) => { 
    try {
        projects = await Projects.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        if (!projects) {
            return next(
                new ErrorResponse(
                    `projects not found with id of ${req.params.id}`,
                    404
                )
            );
        }
        res.status(200).json({ success: true, data: projects });
    } catch (error) {
        next(err);
    }
};

// @desc Delete a Project
// @route DELETE /api/v1/projects/:id
// @access Public
exports.deleteProject = async (req, res, next) => { 
    try {
        projects = await Projects.findByIdAndDelete(req.params.id);

        if (!projects) {
            return next(
                new ErrorResponse(
                    `projects not found with id of ${req.params.id}`,
                    404
                )
            );
        }

        res.status(200).json({ success: true, data: {} });
    } catch (error) {
        next(err);
    }};

// @desc Get all reviews posted by a user
// @route GET /api/v1/sentreviews/:id
// @access Public (only for reviews)
exports.getSentReviews = async (req, res, next) => { 
    try {
        const review = await User.findById(req.params.id);

        if (!review) {
            return next(
                new ErrorResponse(
                    `review not found with id of ${req.params.id}`,
                    404
                )
            );
        }

        res.status(200).json({ succss: true, data: review });
    } catch (err) {
        //res.status(400).json({ success: false });
        next(err);
    }
};

// @desc Create a review
// @route POST /api/v1/projects/:id
// @access Private
exports.createReview = async (req, res, next) => { 
    try {
        const review = await Review.create(req.body);

        res.status(201).json({
            success: true,
            data: review
        });
    } catch (err) {
        next(err);
    }
};

// @desc Get project requirements
// @route GET /api/v1/projectrequirements
// @access Public
exports.getProjectRequirements = async (req, res, next) => { 

    try {
        const requirements = await ProjectRequirements.findById(idstring);

        res.status(200).json({ success: true, data: requirements });
    } catch (err) {
        next(
            new ErrorResponse(`project req not found`, 404)
        );
    }
};

// @desc update project requirements
// @route PUT /api/v1/projectrequirements
// @access Private (prof)
exports.updateProjectRequirements = async (req, res, next) => { 
    try {
        const requirements = await ProjectRequirements.findByIdAndUpdate(idstring, req.body, {
            new:true, 
            runValidators:true
        });
        
        if(!requirements) { 
            return next(new ErrorResponse(`Project specs not found`, 404));
        }
        
        res.status(200).json({
            success: true,
            data: requirements   
        });
    } catch (err) {
        next(
            new ErrorResponse(`project req not updated`, 404)
        );
    }
};