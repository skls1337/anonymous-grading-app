import React from 'react';

import Requirements from './Requirements/Requirements';
import classes from './Project.css';

const project = () => {
    return(
        <div className={classes.Project}>
            <div className={classes.Text}>
                <p>Description: </p>
            </div>
            <Requirements />
            <p>Deadlines</p>
        </div>
    );
}

export default project;