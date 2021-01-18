import React from 'react';

import classes from './DisplayShortProject.css';

const displayShortProject = () => {
    return (
        <div className={classes.DisplayShortProject}>
            <div className={classes.LineOne}>
                <p>Project Name</p>
                <p>Project Grade</p>
            </div>
            <p>Short Description</p>
            <div className = {classes.Tags}>
                Tags
            </div>
        </div>
    );
}

export default displayShortProject;