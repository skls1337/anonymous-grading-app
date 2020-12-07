const express = require('express');
const {
    getSentReviews,
    createReview
} = require('../controllers/projects');

const router = express.Router();

router.route('/')
    .get(getSentReviews)
    .post(createReview);

module.exports = router;