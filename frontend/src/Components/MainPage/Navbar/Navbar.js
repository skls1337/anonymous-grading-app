import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Navbar.css';
import logo from '../../../Assets/drawables/ProjectReviewers.png';

const navbar = (props) => {
    return (
        <nav className={classes.Navbar}>
            <img rel="icon" src={logo} alt="Logo"></img>
            <a style={{marginLeft: "2%"}}>Profile</a>
            <a>Project</a>
            <a>Review</a>
            <Link to="/start/login" onClick={props.log} style={{marginLeft: "auto", marginRight: "30px"}}>Log Out</Link>
        </nav>
    );
}

export default navbar;