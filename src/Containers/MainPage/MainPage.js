import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import SubPage from '../SubPage/SubPage';
import Navbar from '../../Components/MainPage/Navbar/Navbar'

class MainPage extends Component {
    render () {
        return (
            <Auxiliary>
                <Navbar/>
                <p>Profile presentation</p>
                <SubPage />
            </Auxiliary>
        );
    }
}

export default MainPage;