import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import classes from '../../Components/MainPage/SubPage/Subpage.css'
import ReviewProjects from './ReviewProjects'
import ReviewTheProject from './ReviewTheProject'



class SubPageReview extends Component {
    state = {

    }


    render() {

        console.log(this.state.projects);
        return (

            <div>
                <Switch>
                    <Route path="/home/review/review-projects" render={(props) => <ReviewProjects projects={this.props.projects} />} />
                    <Route path="/home/review/:id" render={(props) => <ReviewTheProject />} />
                </Switch>

            </div>
        );

    }


}

export default SubPageReview;