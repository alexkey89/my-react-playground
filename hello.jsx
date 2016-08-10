import React from 'react';
import ReactDOM from 'react-dom';
import Beer from './beer.jsx';

const items = [{name: 'apple'}, 
			 {name: 'orange'},
			 {name: 'banana'},
             {name: 'pineapple'},
             {name: 'kiwi'}];

class Services extends React.Component {
	
	constructor(props, context) {
       super(props, context);
       this.state = {
       		text: ''
       }

       this.handleChange = this.handleChange.bind(this);

    }

    getItems(){
    	const url = 'http://jsonplaceholder.typicode.com/';
		fetch(`${url}posts`).then(function(response) { 
		
			return response.json();
		
		}).then(function(data) {
		
			console.log(data); 
		
		});
    }

    handleChange(event){
    	this.setState({text: event.target.value})
    }

	render(){
		const listItems = this.props.items.map((item) => {
			return (
				<li key={item.name}>
					{item.name} | <small className="green">fruit</small>
				</li>
			);
		});

		return (
			<div className='services'>
				<Beer BeerName='Tyskie' title='Beer level' />
				<h3>{this.props.title}</h3>
				<ul>
					{listItems}
				</ul>
				<input type='text' onChange={this.handleChange} /> 
				<small> Word Count: {100 - this.state.text.length}</small>
			</div>
		);
	}

}

ReactDOM.render(<Services title="mleczko power" items={items} />, 				
	document.getElementById('app'));
