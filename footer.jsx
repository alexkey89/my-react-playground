import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Footer extends Component{
	render(){
		return(
				<div>
					<p>{this.props.trademark}<small><sup>&copy;</sup></small></p>
				</div>
			)
	}
}

ReactDOM.render(<Footer trademark="alexkeydesign" />, document.querySelector('footer'))
