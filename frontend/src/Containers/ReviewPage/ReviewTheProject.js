import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import classes from '../../Components/MainPage/SubPage/SubPage.css'
import axios from 'axios'

class ReviewTheProject extends Component {
   state={
   
   }

    getProjecById=()=>{
        const projId=window.location.pathname
        const str=projId.slice(-24)
        axios.get('http://localhost:3001/api/v1/projects/'+str).then(res=>{
          this.setState({project:res.data.data})
         
        }).catch(err=>console.log(err))
    }
  componentDidMount(){
    this.getProjecById()
}
    render() {
    
        return (
            <div className={classes.SubPage}>
                
               {console.log(this.state.project)}
            </div>
        );

    }


}

export default ReviewTheProject;