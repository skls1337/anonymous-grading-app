import React, { Component } from 'react'
import classes from './ReviewProjects.css'
import buttonClasses from './ReviewProjects.css'
import { Link } from 'react-router-dom';
class ReviewProjects extends Component {

    render() {
        const projects = []
        const reviewd = []

        this.props.alreadyReviews.forEach(element => {
            reviewd.push(element.project)
        });
        console.log(reviewd);
        try {

            for (let i = 0; i < this.props.projects.count; i++) {
                if (this.props.projects.data[i].user !== this.props.user.data._id) {
                    if (!reviewd.includes(this.props.projects.data[i]._id)) {
                        console.log(this.props.projects.data[i]);
                        projects.push({ "id": this.props.projects.data[i]._id, "title": this.props.projects.data[i].title })
                    }
                }
            }
            console.log(reviewd);
            console.log(reviewd.includes('60060f3b83a7ec56e092ef8f'));

        } catch (err) {
            console.log(err);
        }
        const items = [];
        for (let i = 0; i < projects.length; i++) {
            items.push(
                <div >
                    <Link to={"/home/review/" + this.props.projects.data[i]._id}>
                        <br></br>
                        <button className={buttonClasses.ReviewButton} style={{ margin: "auto" }}> {projects[i].title}</button>
                        <br></br>
                    </Link>
                </div>)
        }
        return (
            <div className={classes.SubPage}>
                {console.log(this.props.alreadyReviews)}
                {items}
            </div>




        )

    }

}

export default ReviewProjects;