import React from 'react';

import Tags from './Tags/Tag';
import classes from './ReviewElement.css';

const reviewElement = (props) => {
    return (
        <div className={classes.ReviewElement}>
            <p>{props.grade}</p>
            <p>{props.projectName}</p>
            <div className={classes.Tags}>
                {props.tags.map((inTags) => (
                    <Tags tag={inTags} key={Math.floor(Math.random() * Math.floor(100))} />
                ))}
            </div>
        </div>
    );
};

export default reviewElement;
