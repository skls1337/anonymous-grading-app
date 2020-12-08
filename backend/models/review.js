const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    label: {
        type: [String],
        enum:['Well documented', 'Poorly documented', 'Impressive', 'Unimpresive', 'Original', 'Unoriginal', 'Just OK', 'Could be better', 'Breathtaking', 'Great Job', 'Disapointing', "Creative!"]
    },
    grade: {
        type: Number,
        required: true,
        min: [1, 'Rating must be at least 1'],
        max: [10, 'Rating must not be more than 10']
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'user', 
        required: true
    },
    project: {
        type: mongoose.Schema.ObjectId,
        ref: 'projects', 
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Review', ReviewSchema);