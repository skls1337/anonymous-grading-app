import React from 'react';
import ProjectElement from './ProjectElement/ProjectElement'
import classes from '../../../../../SubPage/SubmitedReviews/ReviewsList/ReviewsList.css'

const projectsList = (props)=>{
    return (
        <div className={classes.ReviewsList}>
            {props.controls.map((ctrl) => (
                <ProjectElement project={ctrl.project} key={ctrl.project} />
            ))}
        </div>
    );
}

export default projectsList;
