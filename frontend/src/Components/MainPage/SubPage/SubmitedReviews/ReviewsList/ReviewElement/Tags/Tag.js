import React from 'react';

import classes from './Tag.css';

const tags = (props) => {
    return (
        <div>
            <p>{props.tag}</p>
        </div>
    );
};

export default tags;
