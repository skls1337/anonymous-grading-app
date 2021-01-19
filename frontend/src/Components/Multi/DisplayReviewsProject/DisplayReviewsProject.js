import React from 'react';

import ReviewsList from '../../MainPage/SubPage/SubmitedReviews/ReviewsList/ReviewsList';
import classes from '../../MainPage/SubPage/SubmitedReviews/ReviewsList/ReviewsList.css';

const displayReviewsProject = (props) => {
    return(
        <div className={classes.SubRev} >
            <ReviewsList controls={props.reviews} />
        </div>
    );
}

export default displayReviewsProject;