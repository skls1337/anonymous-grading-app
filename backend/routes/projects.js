const express = require('express');
const {
    getProjects,
    getProject,
    createProject,
    updateProject,
    deleteProject,
    getSentReviews,
    createReview
} = require('../controllers/projects');

const router = express.Router();

const { protect, authorize } = require('../middleware/auth');
// const reviewRouter = require('./reviews');

// router.use('/:projectId/reviews', reviewRouter);

router.route('/')
    .get(protect, authorize('student', 'reviewer', 'prof', 'admin'), getProjects)
    .post(protect, authorize('reviewer', 'prof', 'admin'), createProject)

router.route('/:id')
    .get(getProject)
    .put(protect, authorize('student', 'reviewer', 'admin'),  updateProject)
    .put(protect, authorize('reviewer', 'admin'), createReview)
    .delete(protect, authorize('student', 'reviewer', 'admin'), deleteProject)
    .get(authorize('reviewer', 'admin'), getSentReviews);

module.exports = router;