import React from 'react';

import ReviewsList from '../SubmitedReviews/ReviewsList/ReviewsList';
import classes from '../SubmitedReviews/SubmitedReviews.css';

const data = [
    {
        project: 'Proiectul MEU',
        tags: [{ tag: 'Great' }, { tag: 'Nice' }, {tag: 'Good Job'}],
        grade: 10,
    },
    {
        project: 'Proiectul MEU',
        tags: [{ tag: 'Not Nice' }],
        grade: 4,
    },
    {
        project: 'Proiectul MEU',
        tags: [{ tag: 'Badass' }],
        grade: 5,
    },
    {
        project: 'Proiectul MEU',
        tags: [{ tag: 'Badass' }],
        grade: 5,
    }
]

const yourReviews = () => {
    return (
        <div className={classes.SubRev}>
            <ReviewsList controls={data} />
        </div>
    );
}

export default yourReviews;