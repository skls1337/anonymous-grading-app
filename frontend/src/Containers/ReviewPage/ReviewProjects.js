import React, { Component } from 'react'

import classes from '../../Components/MainPage/SubPage/SubPage.css'


class ReviewProjects extends Component {
    render() {
        const projects = []
        try {

            for (let i = 0; i < this.props.projects.count; i++) {
               projects.push({"id":this.props.projects.data[i]._id,"title":this.props.projects.data[i].title})
            }
        } catch (err) {
            console.log(err);
        }
        const items = [] ;
        for (let i=0;i<projects.length;i++) {
            items.push(
            <p style={{marginLeft:250}}>
                 <button style={{width:100,height:30,marginRight:200,borderRadius:25,borderColor:"#2B7A78"}} onClick={()=>this.onClickHandler(projects[i].id)}>Review</button>   
                {projects[i].title}
                
            </p>)
          }
        return (
          
            <div className={classes.SubRev}>
                
               {items}
            </div>
           



        )

    }

}

export default ReviewProjects;