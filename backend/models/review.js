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
    projectName: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Prevent user from submitting more than 1 review for project
ReviewSchema.index({ project: 1, user: 1 }, { unique: true});

// Static method to get the average grade(without 1 min && 1 max)
ReviewSchema.statics.getAverageGrade = async function (projectId) {
    const obj = await this.aggregate([
        {
            $match: { project: projectId}
        },
        {
            $group: {
                _id: '$project',
                avg: {$avg: '$grade'},
                myMax: {$max: '$grade'},
                myMin: {$min: '$grade'},
                mySum: {$sum: '$grade'},
                count: {$sum: 1}
            }
        }
    ]);
   
    try {
        // console.log(obj[0].myMax)
        // console.log(obj[0].myMin)
        // console.log(obj[0].mySum)
        // console.log(obj[0].count)
        let avg = 0;
        if(obj[0].count > 2){
            avg = (obj[0].mySum-obj[0].myMax-obj[0].myMin)/(obj[0].count-2)
        } 
        
        await this.model('Projects').findByIdAndUpdate(projectId, {
            averageGrade: obj[0].avg.toFixed(2)
        });
    } catch (err) {
        console.error(err)
    }
};
// Call getavggrade after save
ReviewSchema.post('save', async function () {
    await this.constructor.getAverageGrade(this.project);
})

// Call getavggrade before remove
ReviewSchema.pre('remove', async function () {
    await this.constructor.getAverageGrade(this.project);
})

module.exports = mongoose.model('Review', ReviewSchema);