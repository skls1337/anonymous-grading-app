import React, { Component } from 'react';
import { Route, BrowserRouter, Redirect } from 'react-router-dom';

import Auxiliary from './hoc/Auxiliary/Auxiliary';
import MainPage from './Containers/MainPage/MainPage';
import Background from './Containers/LoginPage/Background';
import axios from 'axios';

class App extends Component {
	state = {
	}

	userAuthHandler = () => {
		this.setState({isUserAuth: !this.state.isUserAuth});
		console.log("[App.js] login state changed")
	}

	componentDidMount=()=>{
        axios.get('http://localhost:3001/api/v1/auth/me').then(res=>{
            console.log(res);
            this.setUser(res.data)
        }).catch(err=>{console.log(err);})
    }

	setUser=user=>{
		this.setState({
			user:user
		})
	}

	render() {

		return (
			<Auxiliary>
				<BrowserRouter>
					<Route path={"/"}>
						{this.state.isUserAuth ? <Redirect to="/home/profile" /> : <Redirect to="/start/login" />}
					</Route>
					<Route path={"/home"}>
						<Redirect to="/home/profile/project"/>
					</Route>

					<Route path='/start' render={(props) => <Background />} />
					<Route path='/home' component={()=><MainPage user={this.state.user} />} />
				</BrowserRouter>
			</Auxiliary>
		);
	}
}

export default App;