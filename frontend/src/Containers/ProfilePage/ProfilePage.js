import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import SubPage from '../../Components/MainPage/SubPage/SubPage';
import Profile from '../../Components/MainPage/Profile/Profile';
import pp from '../../Assets/drawables/placeholderPP2.png';
import classes from './ProfilePage.css';

class ProfilePage extends Component {

    render() {
        return (
            <Auxiliary>
                <div className={classes.ProfilePage}>
                    <Profile
                        img={pp}
                        name={this.props.user.data.fullname}
                        group={this.props.user.data.group}
                        year={this.props.user.data.year} />
                    <div className={classes.Placeholder}></div>
                    <SubPage user={this.props.user}  projects={this.props.projects}/>
                </div>
            </Auxiliary>
        );
    }
}

export default ProfilePage;