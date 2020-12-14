import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../Components/MainPage/Navbar/Navbar';
import ProfilePage from '../ProfilePage/ProfilePage';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';

class MainPage extends Component {
    state={

    }
   
    	
    render() {
        if(this.props.user){
        return (
            <Auxiliary>
                <Navbar log={this.props.log} />
                <Route path='/home/profile' render={() => <ProfilePage user={this.props.user} />} />
            </Auxiliary>
         );
        }
        else{
            return(
            <Auxiliary>
            <p></p>
            </Auxiliary>
            )
        }
    }
}

export default MainPage;