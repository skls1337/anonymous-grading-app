const express = require('express');
const {
    getProjects,
    getProject,
    createProject,
    updateProject,
    deleteProject,
    projectPhotoUpload
} = require('../controllers/projects');

const router = express.Router();

const { protect, authorize } = require('../middleware/auth');

router.route('/')
    .get(protect, authorize('reviewer', 'prof', 'admin'), getProjects)
    .post(protect, authorize('student', 'reviewer', 'admin'), createProject)

router.route('/:id')
    .get(protect, getProject)
    .put(protect, authorize('student', 'reviewer', 'admin'),  updateProject)
    .delete(protect, authorize('student', 'reviewer', 'admin'), deleteProject);

router.route('/:id/photo').put(protect, authorize('student', 'reviewer', 'admin'), projectPhotoUpload);


module.exports = router;