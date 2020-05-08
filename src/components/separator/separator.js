// Separador de sections

import React from 'react';
//import { Parallax } from 'react-materialize'
import style from './separator.css';
import background from '../../images/background3.jpg';

const Separator = () => {
	return(
		<div className="separator">
			<div className="parallax-container">
					<img className="separatorImage" src={ background } />
			</div>
		</div>
	);
};

export default Separator;
