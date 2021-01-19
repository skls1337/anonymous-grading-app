import React from 'react';

import ReviewElement from './ReviewElement/ReviewElement';
import classes from './ReviewsList.css';

const reviewsList = (props) => {
    const makeKey = (length) => {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    return (
        <div className={classes.ReviewsList}>
            {props.controls.map((ctrl) => (
                <ReviewElement tags={ctrl.label} grade={ctrl.grade} projectName={ctrl.projectName} key={makeKey(10)} />
            ))}
        </div>
    );
};

export default reviewsList;