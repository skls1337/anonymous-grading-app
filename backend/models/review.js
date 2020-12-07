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
    createdAt: {
        type: Date,
        default: Date.now
    }

    // TODO 
    // TAKES ID STUD
    // TAKES ID PROJ
});

module.exports = mongoose.model('Review', ReviewSchema);