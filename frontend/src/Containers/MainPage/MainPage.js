import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from '../../Components/MainPage/Navbar/Navbar';
import ProfilePage from '../ProfilePage/ProfilePage';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Reviews from '../ReviewPage/Reviews';
import ProjectPage from '../ProjectPage/ProjectPage';

class MainPage extends Component {
    state = {

    }
    render() {
        if (this.props.user) {
            return (
                <Auxiliary>
                    <Navbar log={this.props.log} />
                    <Switch>
                        <Route path='/home/profile' render={() => <ProfilePage user={this.props.user}  projects={this.props.projects} />} />
                        <Route path='/home/review' render={() => <Reviews user={this.props.user} projects={this.props.projects} />} />
                        <Route path='/home/project' render={() => <ProjectPage user={this.props.user} />} />
                    </Switch>
                </Auxiliary>
            );
        }
        else {
            return (
                <p>unavailable</p>
            )
        }
    }
}

export default MainPage;