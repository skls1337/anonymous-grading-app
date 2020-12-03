import React from 'react';

import Requirement from './Requirement/Requirement';
import classes from './Requirements.css'

const requirements = () => {
    return(
        <ul className={classes.Requirements}>
            <Requirement></Requirement>
            <Requirement></Requirement>
        </ul>
    );
}

export default requirements;