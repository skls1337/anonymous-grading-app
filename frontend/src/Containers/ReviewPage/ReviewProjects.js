import React, { Component } from 'react'
import classes from '../../Components/MainPage/SubPage/SubPage.css'
import buttonClasses from './ReviewProjects.css'
import { Link } from 'react-router-dom';
class ReviewProjects extends Component {
   
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
                   <Link to={"/home/review/"+this.props.projects.data[i]._id}>
                    <button  className={buttonClasses.ReviewButton}>Review</button>
                    </Link>
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