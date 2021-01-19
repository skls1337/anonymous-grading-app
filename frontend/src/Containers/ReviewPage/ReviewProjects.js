import React, { Component } from 'react'
import classes from './ReviewProjects.css'
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
                   <Link to={"/home/review/"+this.props.projects.data[i]._id}>
                   <br></br>
                    <button  className={buttonClasses.ReviewButton} style={{margin:"auto"}}>Review: {projects[i].title}</button>
                    <br></br>
                    </Link>
                </div>)
        }
        return (
            <div className={classes.SubPage}>
                {console.log(projects)}
                {items}  
            </div>




        )

    }

}

export default ReviewProjects;