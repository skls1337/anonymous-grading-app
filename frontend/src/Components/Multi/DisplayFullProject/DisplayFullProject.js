import React from 'react';

import classes from './DisplayFullProject.css'

const displayFullProject = (props) => {
    return(
        <div className={classes.DisplayFullProject}>
            <h2>This is Your Project</h2>
            <div>
                <h3>Project Name:</h3>
                <p>{props.projectData.projectName}</p>
            </div>
            <div>
                <h3>Short Description:</h3>
                <p>{props.projectData.shortDescription}</p>
            </div>
            <div>
                <h3>Full Description:</h3>
                <p>{props.projectData.fullDescription}</p>
            </div>
            <div>
                <h3>YouTube</h3>
                <iframe width="70%" height="420" title="Video" src={props.projectData.ytLink.replace("watch?v=", "embed/")} />
            </div>
        </div>
    );
}

export default displayFullProject;