import React from 'react';

import classes from './Requirement.css';

const requirement = (props) => {
    return (
        <div className={classes.Requirement}>
            <p>{props.children}</p>
            <p>{props.status}</p>
        </div>
    );
};

export default requirement;
