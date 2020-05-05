import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import Header from './components/header/header';
import Timeline from './components/timeline/timeline';
import Separator from './components/separator/separator';


var sections = [
	{
		title: 'Sobre',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
	},
	{
		title: 'Experiência',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
	}
]

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Timeline {...sections[0] } />
				<Separator />
				<Timeline {...sections[1] } />
				<Separator />

			</div>

  		);
	} 	
}

export default App;
