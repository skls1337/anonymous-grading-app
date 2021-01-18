import React,{Component} from 'react';
import axios from 'axios'
import classes from './SubmitedReviews.css';
import ReviewsList from './ReviewsList/ReviewsList';

let data = [
    {
        project: 'Domnul Nostru',
        label: [{ tag: 'Great' }, { tag: 'Nice' }],
        grade: 10,
    },
    {
        project: 'Ce zici boss',
        label: [{ tag: 'Nicenice' }],
        grade: 9,
    },
    {
        project: 'Mama e misto',
        label: [{ tag: 'Bad' }],
        grade: 4,
    },
];



class submitedReviews extends Component{
    
    state={
        projects:[]
    }
    
    getSentReviews = () => {
        axios.get("http://localhost:3001/api/v1/reviews/sentreviews").then(res => {
             const Data = res.data.data
                Data.forEach(element => {
                    delete element.__v
                    delete element._id
                    delete element.createdAt
                    delete element.user
                });
               
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
