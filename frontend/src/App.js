import React, { Component } from 'react';
import { Route, BrowserRouter, Redirect } from 'react-router-dom';

import Auxiliary from './hoc/Auxiliary/Auxiliary';
import MainPage from './Containers/MainPage/MainPage';
import Background from './Containers/LoginPage/Background';


class App extends Component {
	state = {
		isUserAuth: true
	}
	data = [];
	userAuthHandler = () => {
		this.setState({ isUserAuth: !this.state.isUserAuth });
		console.log("[App.js] login state changed")
	}

	componentDidMount = () => {
		axios.get('http://localhost:3001/api/v1/auth/me').then(res => {
			console.log("the user is: ")
			this.setUser(res.data)
		}).catch(err => { console.log(err); })
		axios.get('http://localhost:3001/api/v1/projects').then(res => {

			console.log(res);
			this.setState({
				projects: res.data
			})
		}).catch(err => { console.log(err); })

	}

	setUser = User => {
		this.setState({
			user: User,
			isUserAuth: true
		})
	}

	render() {

		return (
			<Auxiliary>
				<BrowserRouter>
					<Route path={"/"}>
						{this.state.isUserAuth ? <Redirect to="/home/profile/project" /> : <Redirect to="/home/start/login"/>}
					</Route>

					<Route path='/start' render={() => <Background />} />
					<Route path='/home' component={() => <MainPage user={this.state.user} projects={this.state.projects} />} />
				</BrowserRouter>
			</Auxiliary>
		);
	}
}

export default App;