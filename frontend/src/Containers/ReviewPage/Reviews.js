import React, { Component } from 'react'
import Auxiliary from '../../hoc/Auxiliary/Auxiliary'
import Profile from '../../Components/MainPage/Profile/Profile'
import pp from '../../Assets/drawables/placeholderPP2.png'
import SubPageReview from './SubPageReview'
import classes from '../ProfilePage/ProfilePage.css'

class Review extends Component {
    render() {
        if (this.props.user.data.role === "prof" || this.props.user.data.role === "reviewer"||this.props.user.data.role === "admin") {
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
                        <div>
                            {/*TODO: de facu componenet pt non reviewuari*/}
                            <SubPageReview projects={{data:"You are not allowed to review the projects. Only reviewers can"}}/>
                        </div>
                    </div>
                </Auxiliary>
            )
        }
    }

}

export default Review;