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
// const reviewRouter = require('./reviews');

// router.use('/:projectId/reviews', reviewRouter);

router.route('/')
    .get(getProjects)
    .post(createProject)

router.route('/:id')
    .get(getProject)
    .put(updateProject)
    .put(createReview)
    .delete(deleteProject)
    .get(getSentReviews);

module.exports = router;