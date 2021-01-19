import React, { Component } from 'react'

import buttonClasses from './ReviewProjects.css'
import { Link } from 'react-router-dom';

class ReviewProjects extends Component {

    makeKey = (length) => {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

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
                        
                        projects.push({ "id": el._id, "title": el.title,"key":(this.makeKey(10)) })
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