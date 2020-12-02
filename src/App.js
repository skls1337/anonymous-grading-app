import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Auxiliary from './hoc/Auxiliary/Auxiliary';
import LoginPage from './Containers/LoginPage/LoginPage';
import MainPage from './Containers/MainPage/MainPage';

class App extends Component {
	render() {
		return (
			<Auxiliary>
				<BrowserRouter>
					<Route path='/main-page' exact component={LoginPage} />
					<Route path='/' exact component={MainPage} />
				</BrowserRouter>
			</Auxiliary>
		);
	}
}

export default App;
