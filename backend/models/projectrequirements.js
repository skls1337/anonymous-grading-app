const mongoose = require('mongoose');

const ProjectRequirementsSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        maxlength: [50, 'Title should not be more than 50 characters']
    },
    description: {
        type: String,
        maxlength: [500, 'Description should not be more than 500 characters']
    },
    deadline: [{
        type: Date
    }],
    requirements: [{
        requirement: {
            type:String
        }, 
        status: {
            type:String,
            enum: ['0', '1', '2']
        }, 
        deadline: { 
            type:String,
            enum: ['1','2','3']
        }
    }]
});

module.exports = mongoose.model('ProjectRequirements', ProjectRequirementsSchema);