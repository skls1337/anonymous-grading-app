import React from 'react';
import classes from '../../../../../../SubPage/SubmitedReviews/ReviewsList/ReviewElement/ReviewElement.css'
const projectElement=(props)=>{
    return (
        <div className={classes.ReviewElement}>
           
            <p>{props.project}</p>
           
        </div>
    );
}

export default projectElement;