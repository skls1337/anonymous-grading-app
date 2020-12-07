const express = require('express');
const {
    getProjectRequirements,
    updateProjectRequirements
} = require('../controllers/projects');

const router = express.Router();

router.route('/')
    .get(getProjectRequirements)
    .put(updateProjectRequirements);

module.exports = router;