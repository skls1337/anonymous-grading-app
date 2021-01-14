import React, { Component } from 'react'

import classes from '../../Components/MainPage/SubPage/SubPage.css'
import buttonClasses from './ReviewProjects.css'
import { Route, Link, Redirect } from 'react-router-dom';
import ReviewTheProject from './ReviewTheProject';

class ReviewProjects extends Component {
    onClickHandler = (theProject) => {
        console.log(theProject);
        return (
           <div>
               <p>cf</p>
           </div>
        )

    }
    render() {
        const projects = []
        try {

            for (let i = 0; i < this.props.projects.count; i++) {

                projects.push({ "id": this.props.projects.data[i]._id, "title": this.props.projects.data[i].title })

            }
        } catch (err) {
            console.log(err);
        }
        const items = [];
        for (let i = 0; i < projects.length; i++) {
            items.push(
                <div >
                    {projects[i].title}
                    {projects[i].description}
                    <button className={buttonClasses.ReviewButton} onClick={() => this.onClickHandler(this.props.projects.data[i])}>Review</button>


                </div>)
        }
        return (

            <div className={classes.SubRev}>
                {items}
            </div>




        )

    }

}

export default ReviewProjects;