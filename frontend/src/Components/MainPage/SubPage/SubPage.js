import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Navbar2 from '../Navbar2/Navbar2';
import classes from './SubPage.css';
import Project from './Project/Project';
import SubmitedReviews from './SubmitedReviews/SubmitedReviews';
import YourReviews from './YourReviews/YourReviews';

class SubPage extends Component {
    render() {
        return (
            <div className={classes.SubPage}>
                <Navbar2 />
                <Route path="/home/profile/project" render={(props) => <Project />} />
                <Route path="/home/profile/submited-reviews" render={(props) => <SubmitedReviews />} />
                <Route path="/home/profile/your-reviews" render={(props) => <YourReviews user={this.props.user}  projects={this.props.projects} />} />
            </div>
        );
    }
}

export default SubPage;
