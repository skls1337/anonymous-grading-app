import React from 'react';
import { Link } from 'react-router-dom';

import classes from '../../Navbar2/Navbar2.css';

const NavBarReviews = () => {
    return(
        <nav className={classes.Navbar2}>
            <Link to="/home/review/review-projects" >Review a project</Link>
        </nav>
    );
}

export default NavBarReviews;