const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const fileupload = require('express-fileupload');
const morgan = require('morgan');
const cookieparser = require('cookie-parser');
const mongoSanitize = require('express-mongo-sanitize');
const cors=require('cors')
const errorHandler = require('./middleware/error');
const connectDB = require('./config/db');
// Load config.env
dotenv.config({ path: './config/config.env'});

connectDB();

// route files 
const projects = require('./routes/projects');
const reviews = require('./routes/reviews');
const projectrequirements = require('./routes/requirements');
const auth = require('./routes/auth');

const app = express();

// body parser
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended: true}, {limit: '50mb'}));

//cors
app.use(cors());

// Cookie-parser
app.use(cookieparser());

// Dev logging middleware
if(process.env.NODE_ENV === 'development')
    app.use(morgan('dev'));

// File uploading
app.use(fileupload());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Sanitize data 
app.use(mongoSanitize());

// Mount routes
app.use('/api/v1/projects', projects);
app.use('/api/v1/reviews', reviews);
app.use('/api/v1/projectrequirements', projectrequirements);
app.use('/api/v1/auth', auth);

app.use(errorHandler);

const PORT=process.env.PORT || 3001;

const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.magenta.bold.underline));

//Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.mesage}`.red);
    // Close server & exit process
    server.close(() => process.exit(1));
})

// get proiect/:id
// get proiects
// get sentreviews
// get project requirements 
// post review 
// post project
// post project requirements (prof)
// put password
// put project
// delete project
// account type: stud, prof
// account role[stud] = reviewer / nothing