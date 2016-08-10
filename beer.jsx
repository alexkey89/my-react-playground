import React from 'react';

class Beer extends React.Component{
	
	constructor(props) {
       super(props);
    }

	render(){
		return(
			<div>
				<h3>{this.props.title}</h3>
				<p>{this.props.BeerName}</p>
			</div>
			)
	}
}

export default Beer;

