// Footer com informacões de contato

import React from 'react';
import styles from './contact.css';
//import profile from '../../images/profile.jpg'

const Contact = () => {
	return(
		<div className='page-footer' style={{ 'margin-top': '10vh'}}>
			<div className='container'>
				<div className='row'>
					<div className='col s12'>
						<h2 className='text' id='title'>Contato</h2>
						<p><a class='grey-text' href="#!">Envie-me um email</a></p>
					</div>
					<div className='col s12'>
						<h5 className='text' id='title'>Links</h5>
						<ul>
							<li><a class="grey-text" href="#!">Sobre</a></li>
							<li><a class="grey-text" href="#!">Experiência</a></li>
						</ul>
					</div>
				</div>
			</div>
			<div class='footer-copyright footer'>
				<div className='container'>
					<p className='grey-text'>© 2020 Todos os direitos reservados a Matheus Lemos</p>
				</div>
			</div>
		</div>
	);
};

export default Contact;
