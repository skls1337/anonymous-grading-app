import React,{Component} from 'react';
import axios from 'axios'
import classes from './SubmitedReviews.css';
import ReviewsList from './ReviewsList/ReviewsList';

class submitedReviews extends Component{
    
    state={
        projects:[]
    }
    
    getSentReviews = () => {
        axios.get("http://localhost:3001/api/v1/reviews/sentreviews").then(res => {
            const Data = res.data.data
               
            this.setState({projects:Data})
        }).catch(err => console.log(err))
    }
    componentDidMount=()=>{
        this.getSentReviews()
    }
    render(){
    return (
        <div className={classes.SubRev}>
            {console.log(this.state.projects)}
            <ReviewsList controls={this.state.projects} />
        </div>
    );
}
};

export default submitedReviews;
