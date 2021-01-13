import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import classes from '../../Components/MainPage/SubPage/Subpage.css'
import ReviewProjects from './ReviewProjects'


class SubPageReview extends Component {
    state = {

    }

    
    render() {

        console.log(this.state.projects);
        return (

            <div className={classes.Subpage}>
                <Route path="/home/review/review-projects" render={(props) => <ReviewProjects projects={this.props.projects} />} />
            </div>
        );

    }


}

export default SubPageReview;