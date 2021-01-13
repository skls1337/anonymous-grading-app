import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Navbar from '../../Components/MainPage/Navbar/Navbar';
import ProfilePage from '../ProfilePage/ProfilePage';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> parent of 30f1bbe... bunch of copy paste

class MainPage extends Component {
    state={
>>>>>>> parent of 30f1bbe... bunch of copy paste

class MainPage extends Component {
    render() {
        return (
            <Auxiliary>
                <Navbar log={this.props.log} />
<<<<<<< HEAD
                <Route path='/home/profile' render={(props) => <ProfilePage />} />
=======
                <Route path='/home/profile' render={() => <ProfilePage user={this.props.user} />} />
<<<<<<< HEAD
>>>>>>> parent of 30f1bbe... bunch of copy paste
=======
>>>>>>> parent of 30f1bbe... bunch of copy paste
            </Auxiliary>

        );
    }
}

export default MainPage;