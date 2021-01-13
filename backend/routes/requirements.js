const express = require('express');
const {
    getProjectRequirements,
    updateProjectRequirements
} = require('../controllers/requirements');

const router = express.Router();
const { protect, authorize } = require('../middleware/auth');


router.route('/')
    .get(protect, getProjectRequirements)
    .put(protect, authorize('prof', 'admin'), updateProjectRequirements);

module.exports = router;