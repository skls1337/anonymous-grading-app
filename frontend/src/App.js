import React, { Component, } from 'react';
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom';

import Auxiliary from './hoc/Auxiliary/Auxiliary';
import MainPage from './Containers/MainPage/MainPage';
import Background from './Containers/LoginPage/Background';
import axios from 'axios';

class App extends Component {
	state = {

	}

	userAuthHandler = () => {
		this.setState({ isUserAuth: !this.state.isUserAuth });
		console.log("[App.js] login state changed")
	}

	componentDidMount = () => {
		axios.get('http://localhost:3001/api/v1/auth/me').then(res => {
			this.setUser(res.data);
		}).catch(err => { console.log(err); });
		axios.get('http://localhost:3001/api/v1/projects').then(res => {
			this.setState({
				projects: res.data
			});
		}).catch(err => { console.log(err); });
	}

	setUser = (User) => {
		this.setState({
			user: User,
			isUserAuth: true
		});
		console.log("EEEE")
		
	}

	render() {
		return (
			<Auxiliary>
				<BrowserRouter>
					<Route path={"/"} exact>
						
						{this.state.isUserAuth ? <Redirect to="/home/profile/project" /> : <Redirect to="/start/login" />}
					</Route>
					<Switch>
						<Route path='/start' render={() => <Background />} />
						<Route path='/home' render={() => <MainPage user={this.state.user} projects={this.state.projects} />} />
					</Switch>
				</BrowserRouter>
			</Auxiliary>
		);
	}
}

export default App;