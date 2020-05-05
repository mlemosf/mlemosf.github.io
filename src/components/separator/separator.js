// Separador de sections

import React from 'react';
//import { Parallax } from 'react-materialize'
import background from '../../images/background2.jpg';

const Separator = () => {
	return(
		<div className="separator">
			<div className="parallax-container">
					<img src={ background } />
			</div>
		</div>
	);
};

export default Separator;
