import React from 'react';

import ReviewElement from './ReviewElement/ReviewElement';
import classes from './ReviewsList.css';

const reviewsList = (props) => {
    return (
        <div className={classes.ReviewsList}>
            {props.controls.map((ctrl) => (
                <ReviewElement tags={ctrl.label} grade={ctrl.grade} projectName={ctrl.projectName} key={ctrl.project} />
            ))}
        </div>
    );
};

export default reviewsList;
