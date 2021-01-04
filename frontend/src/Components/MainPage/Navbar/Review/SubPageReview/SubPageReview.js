import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavBarReviews from '../../NavbarReviews/NavBarReviews'
import ReviewProjects from './ReviewProjects/ReviewProjects'
import classes from '../../../SubPage/Subpage.css';
class SubPageReview extends Component{
    render(){
    return (
    <div className={classes.Subpage}>
        <NavBarReviews />
        <Route path="/home/review/review-projects" render={(props) => <ReviewProjects />} />
    </div>
    );
    
    }


}

export default SubPageReview;