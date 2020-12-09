const Projects = require('../models/projects');
const ErrorResponse = require('../utils/errorResponse');

// @desc Get all Projects
// @route GET /api/v1/projects
// @access Protected?
exports.getProjects = async (req, res, next) => { 
    try {
        const projects = await Projects.find();

        if(projects.length === 0) {
           return res.status(204).json({ success: true, data: projects });
        }

        res.status(200).json({
            success: true,
            count: projects.length,
            data: projects
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
        // Add user 
        req.body.user = req.user.id;

        // Check for published project
        const publishedProject = await Projects.findOne({ user: req.user.id });
        
        // if stud != admin, can only add 1 webtech
        if(publishedProject && req.user.role !=='admin') {
            return next
            (new ErrorResponse(
                `The user with ID ${req.user.id} has already published a project`, 
                400
                )
            );
        }

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
        let projects = await Projects.findById(req.params.id);

        if (!projects) {
            return next(
                new ErrorResponse(
                    `projects not found with id of ${req.params.id}`,
                    404
                )
            );
        }

        if(projects.user.toString() !== req.user.id) {
            return next(
                new ErrorResponse(
                    `User ${req.params.id} is not authorized to update this project`,
                    401 
                )
            );
        }

        projects = await Projects.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

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
        let projects = await Projects.findById(req.params.id);

        if (!projects) {
            return next(
                new ErrorResponse(
                    `projects not found with id of ${req.params.id}`,
                    404
                )
            );
        }

        if(projects.user.toString() !== req.user.id) {
            return next(
                new ErrorResponse(
                    `User ${req.params.id} is not authorized to delete this project`,
                    401 
                )
            );
        }

        projects = await Projects.findByIdAndDelete(req.params.id);

        res.status(200).json({ success: true, data: {} });
    } catch (error) {
        next(err);
    }};