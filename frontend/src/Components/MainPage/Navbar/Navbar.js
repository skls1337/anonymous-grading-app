import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Navbar.css';
import logo from '../../../Assets/drawables/ProjectReviewers.png';
<<<<<<< HEAD
=======
import Axios from 'axios';
>>>>>>> parent of 30f1bbe... bunch of copy paste

const navbar = (props) => {
    return (
        <nav className={classes.Navbar}>
            <img rel="icon" src={logo} alt="Logo"></img>
            <a style={{marginLeft: "2%"}}>Profile</a>
            <a>Project</a>
            <a>Review</a>
<<<<<<< HEAD
            <Link to="/start/login" onClick={props.log} style={{marginLeft: "auto", marginRight: "30px"}}>Log Out</Link>
=======
            <Link to="/start/login" onClick={logOut} style={{marginLeft: "auto", marginRight: "30px"}}>Log Out</Link>
>>>>>>> parent of 30f1bbe... bunch of copy paste
        </nav>
    );
}

export default navbar;