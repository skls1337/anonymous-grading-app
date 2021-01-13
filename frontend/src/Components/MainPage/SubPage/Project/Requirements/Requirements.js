import React from 'react';

import Requirement from './Requirement/Requirement';
import classes from './Requirements.css';

const requirements = (props) => {
    return (
        <div className={classes.Requirements}>
            <p>Requirements:</p>
            <ul>
                {props.controls.map((ctrl) => (
                    <Requirement key={ctrl.key} status={ctrl.status}>
                        {ctrl.text}
                    </Requirement>
                ))}
            </ul>
        </div>
    );
};

export default requirements;
