const ProjectRequirements = require('../models/projectrequirements');
const ErrorResponse = require('../utils/errorResponse');
const idstring = '5fce4814ba6374080c560ccf';
// @desc Get project requirements
// @route GET /api/v1/projectrequirements
// @access Public
exports.getProjectRequirements = async (req, res, next) => { 

    try {
        const requirements = await ProjectRequirements.findById(idstring);

        res.status(200).json({ success: true, data: requirements });
    } catch (err) {
        next(
            new ErrorResponse(`project req not found`, 404)
        );
    }
};

// @desc update project requirements
// @route PUT /api/v1/projectrequirements
// @access Private (prof)
exports.updateProjectRequirements = async (req, res, next) => { 
    try {
        const requirements = await ProjectRequirements.findByIdAndUpdate(idstring, req.body, {
            new:true, 
            runValidators:true
        });
        
        if(!requirements) { 
            return next(new ErrorResponse(`Project specs not found`, 404));
        }
        
        res.status(200).json({
            success: true,
            data: requirements   
        });
    } catch (err) {
        next(
            new ErrorResponse(`project req not updated`, 404)
        );
    }
};