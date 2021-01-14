import React from 'react';

import classes from './SubmitedReviews.css';
import ReviewsList from './ReviewsList/ReviewsList';

const data = [
    {
        project: 'Domnul Nostru',
        tags: [{ tag: 'Great' }, { tag: 'Nice' }],
        grade: 10,
    },
    {
        project: 'Ce zici boss',
        tags: [{ tag: 'Nicenice' }],
        grade: 9,
    },
    {
        project: 'Mama e misto',
        tags: [{ tag: 'Bad' }],
        grade: 4,
    },
];

const submitedReviews = () => {
    return (
        <div className={classes.SubRev}>
            <ReviewsList controls={data} />
        </div>
    );
};

export default submitedReviews;
