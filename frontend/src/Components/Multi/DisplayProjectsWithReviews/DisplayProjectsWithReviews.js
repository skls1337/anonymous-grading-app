import React, { Component } from 'react';
import axios from 'axios';

import DisplayShortProject from '../DisplayShortProject/DisplayShortProject';
import classes from './DisplayProjectsWithReviews.css'

class DisplayProjectsWithReviews extends Component {
    state = {
        labels: [],
        reviews: []
    }
    _isMounted = false;

    componentDidMount = () => {
        this._isMounted = true;

        axios.get(`http://localhost:3001/api/v1/reviews/projectreviews/${this.props.project._id}`).then(res => {
            if (this._isMounted) {
                let allLabels = [];
                res.data.data.forEach(review => {
                    allLabels.push(...review.label);
                });

                this.setState({
                    reviews: res.data.data,
                    labels: allLabels
                });
            }
        }).catch(err => console.log(err));
    }

    componentWillUnmount = () => {
        this._isMounted = false;
    }

    render = () => {
        return (
            <div className={classes.DisplayPR}>
                <DisplayShortProject project={this.props.project} tags={this.state.labels}/>
            </div>
        );
    }
}

export default DisplayProjectsWithReviews;