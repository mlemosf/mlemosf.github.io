// Header da aplicacão

import React from 'react';
import styles from './header.css';
import profile from '../../images/profile.jpg'

const Header = () => (
	<div className="background">
		<div className="container" style={{justifyContent: 'center', alignItems: 'center'}}>
			<div className="row">
				<div className="col s6 offset-s5">
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
				<div className="col s4">
					<div className='icon'></div>
				</div>
				<div className="col s4">
					<div className='icon'></div>
				</div>
				<div className="col s4">
					<div className='icon'></div>
				</div>
			</div>
			<div className="row">
				<div className="col s3">
					<a href="/sobre" className="icon text" id="title">sobre</a>
				</div>
				<div className="col s3">	
					<a href="/experience" className="icon text" id="title">experiência</a>
				</div>
				<div className="col s3">
					<a href="/projetos" className="icon text" id="title">projetos</a>
				</div>
				<div className="col s3">
					<a href="/contato" className="icon text" id="title">contato</a>
				</div>

			</div>

		</div>
	</div>
);

export default Header;
