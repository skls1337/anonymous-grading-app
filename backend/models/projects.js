const mongoose = require('mongoose');
const slugify = require('slugify');

const ProjectsSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        unique: true,
        required: [true, 'Please add a title'],
        maxlength: [40, 'Title should not be more than 40 characters']
    },
    slug: String,
    author: { //// TODO: only prof can see the name
        type: String
    },  
    description: {
        type: String,
        required: [true, 'Please add a description'],
        maxlength: [200, 'Description should not be more than 200 characters']
    },
    body: {
        type: String,
        required: [true, 'Please add a body'],
        maxlength: [5000, 'Body should not be more than 5000 characters']
    },
    images: {
        type: String,
        default: 'no-photo.jpg'
    },
    video: {
        type: String,
        default: 'no-video'
    },  
    upload: { //// TODO: Upload .zip cand am timp
        type: String, 
        default: 'github.com'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'user', 
        required: true
    }
});

// Create project slug from the title
ProjectsSchema.pre('save', function () {
    this.slug = slugify(this.title, { lower: true });
    next();
});

module.exports = mongoose.model('Projects', ProjectsSchema);