import React, { Component } from 'react'
import classes from './ReviewProjects.css'
import subpeigicesese from '../../Components/MainPage/SubPage/SubPage.css'
import navClasses from '../../Components/MainPage/Navbar2/Navbar2.css'

import buttonClasses from './ReviewProjects.css'
import { Link } from 'react-router-dom';

class ReviewProjects extends Component {

    render() {
        const projects = []
        const reviewd = []

        this.props.alreadyReviews.forEach(element => {
            reviewd.push(element.project)
        });
       
        try {

          this.props.projects.data.forEach(el=> {
                if (el.user !== this.props.user.data._id) {
                    if (!reviewd.includes(el._id)) {
                        
                        projects.push({ "id": el._id, "title": el.title,"key":(Math.floor(Math.random() * Math.floor(100))) })
                    }
                }
            })

            console.log(projects);

        } catch (err) {
            console.log(err);
        }
        const items = [];
        for (let i = 0; i < projects.length; i++) {
            items.push(
                <div >
                    <Link to={"/home/review/" + projects[i].id}>
                        <br></br>
                        <button className={buttonClasses.ReviewButton} style={{ margin: "auto" }}> {projects[i].title}</button>
                        <br></br>
                    </Link>
                </div>)
        }
        return (
           <div>
                {items }
            </div>
        )

    }

}

export default ReviewProjects;