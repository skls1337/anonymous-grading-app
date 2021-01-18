import React,{Component} from 'react';
import axios from 'axios'
import ReviewsList from '../SubmitedReviews/ReviewsList/ReviewsList';
import classes from '../SubmitedReviews/SubmitedReviews.css';

class yourReviews extends Component {
    
    state={
        yourReviews:[]
    }
    userId;
    

    getYourProjectReviews = () => {
        const strUser=this.props.user.data._id
        axios.get("http://localhost:3001/api/v1/projects/user/"+strUser).then( res => {
            const project = res.data.data
           const projId=project[0]._id
           this.userId=projId
           this.setState({
                projId:projId
           })
           axios.get("http://localhost:3001/api/v1/reviews/projectreviews/"+this.userId).then(res=>{
            const Data = res.data.data
            Data.forEach(element => {
                delete element.__v
                delete element._id
                delete element.createdAt
                delete element.user
            });
           
        this.setState({yourReviews:Data})
            console.log(this.state.yourReviews);
            }).catch(err=>console.log(err))
       }).catch(err => console.log(err))
    }

   
    componentDidMount=()=>{
        this.getYourProjectReviews()
    
    }
   
    render(){
    
    return (
        <div className={classes.SubRev}>
          {
              console.log(this.state.yourReviews)
          }
            {  <ReviewsList controls={this.state.yourReviews} />  }
        </div>
    );
}
}

export default yourReviews;