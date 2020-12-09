const express = require('express');
const {
    getSentReviews,
    createReview,
    getReviewsForProject
} = require('../controllers/review');

const router = express.Router();
const { protect, authorize } = require('../middleware/auth');

router.route('/sentreviews')
    .get(protect, authorize('reviewer', 'admin'), getSentReviews);
router.route('/:id')
    .post(protect, authorize('reviewer', 'admin'), createReview);
router.route('/projectreviews/:id')
    .get(protect, getReviewsForProject);
module.exports = router;