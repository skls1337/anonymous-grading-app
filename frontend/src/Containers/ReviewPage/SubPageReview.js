import Axios from 'axios';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ReviewProjects from './ReviewProjects'
import ReviewTheProject from './ReviewTheProject'



class SubPageReview extends Component {
    state = {
        reviewerId:'',
        alreadySubmittedReviews:[]
    }

    getReviewerId=()=>{
        Axios.get("http://localhost:3001/api/v1/reviews/sentreviews").then(ress=>{

        const Data=ress.data.data
        this.setState({alreadySubmittedReviews:Data})
        }).catch(err=>console.log(err))
    }

    componentDidMount=()=>{
        this.getReviewerId()
    }
    render() {
        return (

            <div>
                <Switch>
                    <Route path="/home/review/review-projects" render={(props) => <ReviewProjects projects={this.props.projects} alreadyReviews={this.state.alreadySubmittedReviews} user={this.props.user}/>} />
                    <Route path="/home/review/:id" render={(props) => <ReviewTheProject user={this.props.user}/>} />
                </Switch>

            </div>
        );

    }


}

export default SubPageReview;