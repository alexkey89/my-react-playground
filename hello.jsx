import React from 'react';
import ReactDOM from 'react-dom';
import Beer from './beer.jsx';


class Services extends React.Component {
	
	constructor(props, context) {
       super(props, context);
       this.state = {
       		text: '',
       		data: []
       }

       this.handleChange = this.handleChange.bind(this);

    }


    loadFruits(){

    	fetch('fruits.json').then((response)=>{
    	
    		return response.json();
    	
    	}).then((response)=>{

    		 this.setState({data: response.fruits})

    	})
    }


	componentDidMount() {
		
		this.loadFruits()
	
	}


    handleChange(event){
    	this.setState({text: event.target.value})
    }

	render(){

 		const listItems = this.state.data.map((item) => {
			return (
				<li key={item.name}>
					{item.name} | <small className="green"><img src='fruits.png' height='20' /></small>
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

ReactDOM.render(<Services title="mleczko power" />, 				
	document.getElementById('app'));
