import React from 'react';

import Requirements from './Requirements/Requirements';
import classes from './Project.css';

const project = () => {
    return(
        <div className={classes.Project}>
            <p>Project Title: </p>
            <p>Description: </p>
            <Requirements />
            <p>Deadlines</p>
        </div>
    );
}

export default project;