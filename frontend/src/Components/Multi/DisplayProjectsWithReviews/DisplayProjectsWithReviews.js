import React, { Component } from 'react';
import axios from 'axios';

import DisplayFullProject from '../DisplayFullProject/DisplayFullProject';
import DisplayReviewsProject from '../DisplayReviewsProject/DisplayReviewsProject';
import DisplayShortProject from '../DisplayShortProject/DisplayShortProject';
import classes from './DisplayProjectsWithReviews.css'

class DisplayProjectsWithReviews extends Component {
    state = {
        labels: [],
        reviews: [],
        showingFull: ''
    }
    _isMounted = false;
    bottomDisplay = null;

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

    handleToggleFull = () => {
        this.setState({showingFull: !this.state.showingFull})
        console.log(this.props.project)
    }

    render = () => {
        if(this.state.showingFull){
            this.bottomDisplay = <DisplayFullProject projectData={this.props.project}/>
        } else {
            this.bottomDisplay = null;
        }
        return (
            <div className={classes.DisplayPR}>
                <DisplayShortProject project={this.props.project} tags={this.state.labels} />
                <DisplayReviewsProject reviews={this.state.reviews} />
                <button onClick={this.handleToggleFull}>Full Description</button>
                {this.bottomDisplay}
            </div>
        );
    }
}

export default DisplayProjectsWithReviews;