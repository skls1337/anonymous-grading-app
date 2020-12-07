import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Navbar2.css';

const navbar2 = () => {
    return(
        <nav className={classes.Navbar2}>
            <Link to="/home/profile/project">PROJECT</Link>
            <Link to="/home/profile/submited-reviews">SUBMITED REVIEWS</Link>
            <Link to="/home/profile/your-reviews">YOUR REVIEWS</Link> 
        </nav>
    );
}

export default navbar2;