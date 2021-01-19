import React from 'react';

import DisplayImages from '../../Multi/DisplayImages/DisplayImages';
import classes from './DisplayFullProject.css';

const displayFullProject = (props) => {
    return(
        <div className={classes.DisplayFullProject}>
            {console.log(props)}
            <h2>Project</h2>
            <div>
                <h3>Project Name:</h3>
                <p>{props.projectData.title}</p>
            </div>
            <div>
                <h3>Short Description:</h3>
                <p>{props.projectData.description}</p>
            </div>
            <div>
                <h3>Full Description:</h3>
                <p>{props.projectData.body}</p>
            </div>
            <div>
                <h3>YouTube</h3>
                {props.projectData.video === '' || props.projectData.video === undefined ? "This project has no video" : <iframe width="70%" height="420" title="Video" src={props.projectData.video.replace("watch?v=", "embed/")} frameBorder="0" />}
            </div>
            <div>
                <h3>Images:</h3>
                <div>{props.projectData.images === 'no-photo.jpg' ? "This project has no images" : <DisplayImages images={props.projectData.images}/>}</div>
            </div>
            <div>
                <h3>Project Link:</h3>
                <a href={props.projectData.uplaod} target="_blank">Click to go to the Project's Page</a>
            </div>
        </div>
    );
}

export default displayFullProject;