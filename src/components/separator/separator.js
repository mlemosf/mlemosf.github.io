// Separador de sections

import React from 'react';
//import { Parallax } from 'react-materialize'
import style from './separator.css';
import background from '../../images/background3.jpg';

const Separator = () => {
	return(
		<div className="separator">
			<img className="responsive-img separatorImage" src={ background } />
		</div>
	);
};

export default Separator;
