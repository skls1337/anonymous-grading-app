import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Navbar from '../../Components/MainPage/Navbar/Navbar';
import ProfilePage from '../ProfilePage/ProfilePage';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';

class MainPage extends Component {
    render() {
        return (
            <Auxiliary>
                <Navbar log={this.props.log} />
                <Route path='/home/profile' render={(props) => <ProfilePage />} />
            </Auxiliary>

        );
    }
}

export default MainPage;