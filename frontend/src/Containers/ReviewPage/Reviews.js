import React, { Component } from 'react'
import Auxiliary from '../../hoc/Auxiliary/Auxiliary'
import Profile from '../../Components/MainPage/Profile/Profile'
import pp from '../../Assets/drawables/placeholderPP2.png'
import SubPageReview from './SubPageReview'
import classes from '../ProfilePage/ProfilePage.css'

class Review extends Component {
    render() {
        if (this.props.user.data.role === "prof" || this.props.user.data.role === "reviewer") {
            return (
                <Auxiliary>
                    <div className={classes.ProfilePage}>
                        <Profile
                            img={pp}
                            name={this.props.user.data.fullname}
                            group={this.props.user.data.group}
                            year={this.props.user.data.year} />
                        <div className={classes.Placeholder}></div>
                        <SubPageReview projects={this.props.projects}/>


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
                            <p>You cannot review any projects</p>
                        </div>
                    </div>
                </Auxiliary>
            )
        }
    }

}

export default Review;