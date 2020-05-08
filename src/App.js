import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import Header from './components/header/header';
import Timeline from './components/timeline/timeline';
import Separator from './components/separator/separator';
import Contact from './components/contact/contact';

var sections = [
	{
		title: 'Sobre',
		content: 'Sou Matheus, desenvolvedor de software e entusiasta dos vários\
		movimentos e tecnologias neste vasto mundo da tecnologia. Já fiz projetos \
		em Machine Learning, APIs REST e sou fascinado pelas novas tecnologias de \
		arquitetura em numem, como Docker e Kubernetes. Estou sempre fazendo projetos \
		dentro e fora de empregos, e falo com tranquilidade que computacão é a paixão \
		da minha vida.'	
	},
	{
		title: 'Experiência',
		content: 'Tenho 2 anos de experiência desenvolvendo software backend'	
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
				<Contact />
			</div>

  		);
	} 	
}

export default App;
