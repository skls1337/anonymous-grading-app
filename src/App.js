import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Auxiliary from './hoc/Auxiliary/Auxiliary';
import LoginPage from './Containers/LoginPage/LoginPage';
<<<<<<< HEAD
import MainPage from './Containers/MainPage/MainPage';
=======
import Background from './Containers/LoginPage/Background';
>>>>>>> brenciu-lu-andy-dreq

class App extends Component {
	render() {
		return (
			<Auxiliary>
<<<<<<< HEAD
				<BrowserRouter>
					<Route path='/main-page' exact component={LoginPage} />
					<Route path='/' exact component={MainPage} />
				</BrowserRouter>
=======
				
		
				<Background/>
				
				
				
>>>>>>> brenciu-lu-andy-dreq
			</Auxiliary>
		);
	}
}

export default App;
