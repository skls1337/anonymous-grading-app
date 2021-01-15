import React from 'react';

import classes from './Profile.css';

const profile = (props) => {
    return (
        <div className={classes.Profile}>
            <div>
                <img src={props.img} rel="ProfilePicture" alt="ProfilePicture"></img>
            </div>
            <div className={classes.Text}>
                <p className={classes.Name}>{props.name}</p>
                <p>Group {props.group}</p>
                <p>Year {props.year}</p>
            </div>
            <button>EDIT PROFILE</button>
        </div>
    );
}

export default profile;