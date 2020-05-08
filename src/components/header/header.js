// Header da aplicacão

import React from 'react';
import styles from './header.css';
import profile from '../../images/profile.jpg'

const Header = () => (
	<div className="background">
		<div className="container" style={{justifyContent: 'center', alignItems: 'center'}}>
			<div className="row">
				<div className="col s6 m6 offset-s4 offset-m5">
					<div className="imageFrame">
						<img className="image" src={profile} alt=""/>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col s12">
					<h3 className="center-align text" id="title">Matheus Lemos</h3>
					<h5 className="center-align text" id="title">Desenvolvedor full-stack</h5>
				</div>
			</div>
			<div className="row">
				<div className="col s3 m3">
					<a href="/sobre" className="text" id="title">sobre</a>
				</div>
				<div className="col s3 m3">	
					<a href="/experience" className="text" id="title">experiência</a>
				</div>
				<div className="col s3 m3">
					<a href="/projetos" className="text" id="title">projetos</a>
				</div>
				<div className="col s3 m3">
					<a href="/contato" className="text" id="title">contato</a>
				</div>

			</div>
		</div>
	</div>
);

export default Header;
