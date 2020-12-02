import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Navbar.css';

const navbar = () => {
    return (
        <nav className={classes.Navbar}>
            <a>Profile</a>
            <a>Project</a>
            <a>Review</a>
            <Link to="/main-page" style={{marginLeft: "auto", marginRight: "30px"}}>Log Out</Link>
        </nav>
    );
}

export default navbar;