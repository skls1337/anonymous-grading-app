import React from 'react';

import classes from './DisplayShortProject.css';

const displayShortProject = (props) => {
    return (
        <div className={classes.DisplayShortProject}>
            <div className={classes.LineOne}>
                <p><strong>Project Name: </strong>{props.project.title}</p>
                <p><strong>Project Grade: </strong>{props.project.averageGrade}</p>
            </div>
            <p><strong>Short Description: </strong>{props.project.description}</p>
            <div className = {classes.Tags}>
                Tags
            </div>
        </div>
    );
}

export default displayShortProject;