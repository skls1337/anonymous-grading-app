import React from 'react';

import DisplayImages from '../../Multi/DisplayImages/DisplayImages';
import classes from './DisplayFullProject.css';

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
                {props.projectData.ytLink === undefined ? "This project has no video" : <iframe width="70%" height="420" title="Video" src={props.projectData.ytLink.replace("watch?v=", "embed/")} frameBorder="0" />}
            </div>
            <div>
                <h3>Images:</h3>
                <div>{props.projectData.images === undefined ? "This project has no images" : <DisplayImages images={props.projectData.images}/>}</div>
            </div>
            <div>
                <h3>Project Link:</h3>
                <a href={props.projectData.ghLink} target="_blank">{props.projectData.ghLink}</a>
            </div>
        </div>
    );
}

export default displayFullProject;