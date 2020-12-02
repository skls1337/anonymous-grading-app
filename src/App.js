import React, { Component } from 'react';

import Auxiliary from './hoc/Auxiliary/Auxiliary';
import LoginPage from './Containers/LoginPage/LoginPage';

class App extends Component {
	render() {
		return (
			<Auxiliary>
				<LoginPage />
			</Auxiliary>
		);
	}
}

export default App;
