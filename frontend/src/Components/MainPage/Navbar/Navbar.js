import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Navbar.css';
import logo from '../../../Assets/drawables/ProjectReviewers.png';

import Axios from 'axios';

const navbar = (props) => {
   function logOut(){
    Axios.get('http://localhost:3001/api/v1/auth/logout').then(res=>{
        console.log(res);
        window.localStorage.removeItem("token")
    }).catch(err=>{console.log(err);})
   }
   
    return (
        <nav className={classes.Navbar}>
            <img rel="icon" src={logo} alt="Logo"></img>
            <a style={{marginLeft: "2%"}}>
            <Link to="/home/profile/project"  style={{marginLeft: "auto"}}>Profile</Link>
            </a>
            <a>
            <Link to="/home/project"  style={{marginLeft: "auto"}}>Project</Link>
            </a>
            <a>
                <Link to="/home/review/review-projects"  style={{marginLeft: "auto"}}>Review</Link>
            </a>
            <Link to="/start/login" onClick={logOut} style={{marginLeft: "auto", marginRight: "30px"}}>Log Out</Link>
        </nav>
    );
}

export default navbar;