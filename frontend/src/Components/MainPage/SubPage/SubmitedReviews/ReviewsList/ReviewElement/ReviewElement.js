import React from 'react';

import Tags from './Tags/Tag';
import classes from './ReviewElement.css';

const reviewElement = (props) => {
    return (
        <div className={classes.ReviewElement}>
            <p>{props.grade}</p>
            <p>{props.project}</p>
            {props.tags.map((inTags) => (
                <Tags tag={inTags.tag} />
            ))}
        </div>
    );
};

export default reviewElement;
