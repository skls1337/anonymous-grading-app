import React, { Component } from 'react';

import DisplayShortProject from '../DisplayShortProject/DisplayShortProject';
import classes from './DisplayProjectsWithReviews.css'

class DisplayProjectsWithReviews extends Component {
    render = () => {
        return (
            <div className={classes.DisplayPR}>
                <DisplayShortProject project={this.props.project} />
            </div>
        );
    }
}

export default DisplayProjectsWithReviews;