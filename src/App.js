import React, { Component } from 'react';
import { Route, BrowserRouter, Redirect } from 'react-router-dom';

import Auxiliary from './hoc/Auxiliary/Auxiliary';
import MainPage from './Containers/MainPage/MainPage';
import Background from './Containers/LoginPage/Background';


class App extends Component {
	state = {
		isUserAuth: true
	}

	userAuthHandler = () => {
		this.setState({isUserAuth: !this.state.isUserAuth});
		console.log("[App.js] login state changed")
	}

	render() {

		return (
			<Auxiliary>
				<BrowserRouter>
					<Route exact path={"/start" | "/"}>
						{this.state.isUserAuth ? <Redirect to="/home" /> : <Redirect to="/start/login" />}
					</Route>

					<Route path='/start' render={(props) => <Background />} />
					<Route path='/home' exact render={(props) => <MainPage log={this.userAuthHandler} />} />
				</BrowserRouter>
			</Auxiliary>
		);
	}
}

export default App;