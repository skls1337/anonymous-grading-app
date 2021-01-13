import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavBarReviews from '../../NavbarReviews/NavBarReviews'
import ReviewProjects from './ReviewProjects/ReviewProjects'
import classes from '../../../SubPage/Subpage.css';
import axios from 'axios';
class SubPageReview extends Component{
  state={
      
  }
    getProjects=()=>{
        axios.get('http://localhost:3001/api/v1/projects').then(res=>{
	
			console.log(res);
			this.setState({
             
                proj:res.projects.data

            })
        }).catch(err=>{console.log(err);})
    }
    
    
    componentDidMount=()=>{
        this.getProjects()
    }
    render(){
        console.log("clg din subpage");
      console.log(this.state.proj);
    return (
        
    <div className={classes.Subpage}>
        <NavBarReviews />
        <Route path="/home/review/review-projects" render={(props) => <ReviewProjects projects={this.state.projects}/>} />
    </div>
    );
    
    }


}

export default SubPageReview;