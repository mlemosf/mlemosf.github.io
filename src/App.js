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
		arquitetura em nuvem, como Docker e Kubernetes. Estou sempre fazendo projetos \
		dentro e fora de empregos, e falo com tranquilidade que computacão é a paixão \
		da minha vida.'	
	},
	{
		title: 'Experiência',
		content: 'Tenho mais de 2 anos de experiência desenvolvendo software backend.\
		De janeiro de 2018 a janeiro de 2020 trabalhei em uma startup desenvolvedo \
		software voltado a distribuicão e alta disponibilidade de bancos de dados \
		PostgreSQL e software relacionado ao desenvolvimento de modelos de \
		Machine Learning. Também fui responsável por APIs REST para acesso aos dados. \
		Em abril de 2020 tive experiências com desenvolvimento freelancer, desenvolvendo \
		módulos para uma API REST. Nesses dois anos tive muita experiência em \
		desenvolvimento backend em NodeJS e Python, utilizando Express e Flask como \
		ferramentas principais.'	
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
