import React from 'react';

class Beer extends React.Component{
	
	constructor(props) {
       super(props);
       this.state = {
       		data: []
       }
    }

    getData(){
    	fetch('beers.json').then((response)=>{
    		return response.json()
    	}).then((response)=>{
    		this.setState({data: response.beers})
    	})
    }

    componentDidMount(){
    	this.getData()
    }

	render(){
		let listItems = this.state.data.map((item)=>{
			return <li key={item.name}>{item.name}</li>
		})
		return(
			<div>
				<h3>{this.props.title}</h3>
				<p>{this.props.BeerLevel}</p>

				<h4>Beer Name</h4>
				<div>{listItems}</div>
			</div>
			)
	}
}

export default Beer;

