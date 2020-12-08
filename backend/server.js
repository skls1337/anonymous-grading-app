const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const cookieparser = require('cookie-parser');
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
app.use(express.json());

// Cookie-parser
app.use(cookieparser());

// Dev logging middleware
if(process.env.NODE_ENV === 'development')
    app.use(morgan('dev'));


// Mount routes
app.use('/api/v1/projects', projects);
app.use('/api/v1/reviews', reviews);
app.use('/api/v1/projectrequirements', projectrequirements);
app.use('/api/v1/auth', auth);

app.use(errorHandler);

const PORT=process.env.PORT || 3000;

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