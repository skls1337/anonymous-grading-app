import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import SubPage from '../../Components/MainPage/SubPage/SubPage';
import Navbar from '../../Components/MainPage/Navbar/Navbar';
import Profile from '../../Components/MainPage/Profile/Profile';
import pp from '../../Assets/drawables/placeholderPP2.png';
import classes from './MainPage.css';

class MainPage extends Component {
    state = {
        user: {
            Img: pp,
            Name: 'Alinel',
            Group: '1069',
            Year: 'III'
        }
    }

    render () {
        return (
            <Auxiliary>
                <Navbar log={this.props.log}/>
                <div className={classes.MainPage}>
                    <Profile img={this.state.user.Img} name={this.state.user.Name} group={this.state.user.Group} year={this.state.user.Year}/>
                    <div className={classes.Placeholder}></div>
                    <SubPage />
                </div>
            </Auxiliary>
        ); 
    }
}

export default MainPage;