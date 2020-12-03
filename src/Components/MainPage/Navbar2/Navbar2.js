import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

import classes from './Navbar2.css';

const navbar2 = () => {
    render(
        <nav className={classes.Navbar2}>
            <Link></Link>
            <Link></Link>
            <Link></Link>
        </nav>
    );
}

export default navbar2;