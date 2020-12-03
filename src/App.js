import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Auxiliary from './hoc/Auxiliary/Auxiliary';
import MainPage from './Containers/MainPage/MainPage';
import Background from './Containers/LoginPage/Background';


class App extends Component {
	render() {
		return (
			<Auxiliary>
				<BrowserRouter>
					<Route path='/main-page' exact component={Background} />
					<Route path='/' exact component={MainPage} />
				</BrowserRouter>
			</Auxiliary>
		);
	}
}

export default App;
