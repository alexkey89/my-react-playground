import React from 'react';
import ReactDOM from 'react-dom';
import RU from 'react-utils-helper';

class RUstuff extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		const arr = [1, 2, 3, 4, 5 ];
		const TestComponent = 
			<div>
		      	{RU.Repeat(arr, (val) =>{
		        	return <span>{val}</span>;
		      	})}
		    </div>
	}
}


ReactDOM.render(<RUstuff />, document.querySelector('.ru-stuff'));