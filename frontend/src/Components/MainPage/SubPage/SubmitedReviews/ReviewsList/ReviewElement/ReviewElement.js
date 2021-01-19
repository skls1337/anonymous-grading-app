import React from 'react';

import Tags from './Tags/Tag';
import classes from './ReviewElement.css';

const reviewElement = (props) => {
    
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
        <div className={classes.ReviewElement}>
            <p>{props.grade}</p>
            <p>{props.projectName}</p>
            <div className={classes.Tags}>
                {props.tags.map((inTags) => (
                    <Tags tag={inTags} key={makeKey(10)} />
                ))}
            </div>
        </div>
    );
};

export default reviewElement;