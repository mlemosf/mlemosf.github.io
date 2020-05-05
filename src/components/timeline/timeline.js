// Componente de timeline

import React from 'react';
import styles from './timeline.css';

const Timeline = (props) => {
	console.log(props);
	return(
	<div className="card">
		<div className="container">
			<div className="row">
				<div className="col s10">
					<h1 className="cardText" id="cardTitle">{ props.title }</h1>
				</div>
			</div>
			<div className="row">
				<div className="col s10">	
					<p className="cardText">{ props.content }</p>
				</div>
			</div>
		</div>
	</div>
	);
};

export default Timeline;
