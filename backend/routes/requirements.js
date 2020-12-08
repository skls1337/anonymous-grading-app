const express = require('express');
const {
    getProjectRequirements,
    updateProjectRequirements
} = require('../controllers/projects');

const router = express.Router();
const { protect, authorize } = require('../middleware/auth');


router.route('/')
    .get(getProjectRequirements)
    .put(protect, authorize('prof', 'admin'), updateProjectRequirements);

module.exports = router;