import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navbar from '../../Components/MainPage/Navbar/Navbar';
import ProfilePage from '../ProfilePage/ProfilePage';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Reviews from '../../Containers/Reviews/Reviews'
class MainPage extends Component {
    state={

    }
    render() {
        if(this.props.user){
        return (
            <Auxiliary>
                <Navbar log={this.props.log} />
                <Route path='/home/profile' render={() => <ProfilePage user={this.props.user} />} />
                {/* <Route path='/home/project' render={() => <ProfilePage user={this.props.user} />} /> */}
                <Route path='/home/review' render={() => <Reviews user={this.props.user} projects={this.props.projects}/>} />
            </Auxiliary>
         );
        }
        else{
            return(
            <p></p>
            )
        }
    }
}

export default MainPage;