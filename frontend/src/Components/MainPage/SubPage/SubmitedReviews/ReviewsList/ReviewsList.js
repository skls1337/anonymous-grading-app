import React from 'react';

import ReviewElement from './ReviewElement/ReviewElement';

const reviewsList = (props) => {
    return (
        <div>
            {props.controls.map((ctrl) => (
                <ReviewElement tags={ctrl.tags} grade={ctrl.grade} project={ctrl.project} />
            ))}
        </div>
    );
};

export default reviewsList;
