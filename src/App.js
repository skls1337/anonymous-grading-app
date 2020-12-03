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
	}

	render() {

		return (
			<Auxiliary>
				<BrowserRouter>
					<Route exact path={"/:start" | "/"}>
						<Redirect to="/start/login" />
						{!this.state.isUserAuth || <Redirect to="/home" />}
					</Route>

					<Route path='/start' component={() => <Background />} />
					<Route path='/home' exact component={() => <MainPage log={this.userAuthHandler} />} />
				</BrowserRouter>
			</Auxiliary>
		);
	}
}

export default App;
