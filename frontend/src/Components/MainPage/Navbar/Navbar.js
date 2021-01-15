import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Navbar.css';
import logo from '../../../Assets/drawables/ProjectReviewers.png';

import Axios from 'axios';

const navbar = (props) => {
    function logOut() {
        Axios.get('http://localhost:3001/api/v1/auth/logout').then(res => {
            console.log(res);
            window.localStorage.removeItem("token")
        }).catch(err => { console.log(err); })
    }

    return (
        <nav className={classes.Navbar}>
            <img rel="icon" src={logo} alt="Logo"></img>
            <p style={{ marginLeft: "2%" }}><Link to="/home/profile/project" style={{ marginLeft: "40px" }}>Profile</Link></p>
            <Link to="/home/project" style={{ marginLeft: "40px" }}>Project</Link>
            <Link to="/home/review/review-projects" style={{ marginLeft: "40px" }}>Review</Link>
            <Link to="/start/login" onClick={logOut} style={{ marginLeft: "auto", marginRight: "30px" }}>Log Out</Link>
        </nav>
    );
}

export default navbar;