
const express = require('express');
const {
    getProjects,
    getProjectByUser,
    createProject,
    updateProject,
    deleteProject,
    projectPhotoUpload,
    getProjectById
} = require('../controllers/projects');

const router = express.Router();

const { protect, authorize } = require('../middleware/auth');

router.route('/')
    .get(protect, authorize('reviewer', 'prof', 'admin'), getProjects)
    .post(protect, authorize('student', 'reviewer', 'admin'), createProject)

router.route('/:id')
    .get(protect, getProjectById)
    .put(protect, authorize('student', 'reviewer', 'admin'),  updateProject)
    .delete(protect, authorize('student', 'reviewer', 'admin'), deleteProject);

router.route('/user/:id')
    .get(protect, getProjectByUser);


router.route('/:id/photo').put(protect, authorize('student', 'reviewer', 'admin'), projectPhotoUpload);


module.exports = router;