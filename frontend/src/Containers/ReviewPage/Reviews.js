import React, { Component } from 'react'
import Auxiliary from '../../hoc/Auxiliary/Auxiliary'
import Profile from '../../Components/MainPage/Profile/Profile'
import {Redirect} from 'react-router-dom'
import pp from '../../Assets/drawables/placeholderPP2.png'
import SubPageReview from './SubPageReview'
import classes from '../ProfilePage/ProfilePage.css'

class Review extends Component {
    render() {
        if (this.props.user.data.role === "reviewer"||this.props.user.data.role === "admin") {
            return (
                <Auxiliary>
                    <div className={classes.ProfilePage}>
                        <SubPageReview projects={this.props.projects} user={this.props.user}/>


                    </div>
                </Auxiliary>
            );
        } else {
            return (
                <Auxiliary>
                    <div className={classes.ProfilePage}>
                        <Profile
                            img={pp}
                            name={this.props.user.data.fullname}
                            group={this.props.user.data.group}
                            year={this.props.user.data.year} />
                        <div className={classes.Placeholder}></div>
                        <div className={classes.ProfilePage}>
                            {alert("Only reviewers can see this page. Currently you are logged in as a "+this.props.user.data.role)}
                            <Redirect to='/home/profile/project'/>
                        </div>
                    </div>
                </Auxiliary>
            )
        }
    }

}

export default Review;