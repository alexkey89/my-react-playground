import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class FootballGames extends Component{
	constructor(props){
		super(props);
		this.state = {
			data: [],
			inputValue: ''
		}
	}

	getData(){
		fetch('games.json').then((response)=>{
			return response.json();
		}).then((response)=>{
			this.setState({data: response.game})
		})
	}

	componentDidMount(){
		this.getData()
	}

	radioChange(event){
        this.setState({inputValue:event.target.value})
    }

	handleSubmit(event){
		event.preventDefault();
		const AllformData = {
			name: this.refs.name.value,
			date: this.refs.date.value,
			paytype: this.state.inputValue
		}

		console.log(AllformData)

		const data = new FormData();

		data.append( "json", JSON.stringify(AllformData));
		fetch("/backend", {
		method: "POST",
		body: data
		}).then(function(res){ return res.json() })
		  .then(function(data){ alert( JSON.stringify(data)) })

		}

	render(){
		const games = this.state.data.map((game)=>{
			return <li key={game.name}>{game.name} | <small>{game.date}</small></li>
		})
		return(
			<div>
				<p>All games:</p>
				<ul>
					{games}
				</ul>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<h1>{this.props.title}</h1>
					<label>Name <input type="text" ref="name" /></label>
					<label>Date <input type="text" ref="date" /></label><br />
					<span>Payment method</span>
						<label>Free<input type="radio" name="paytype" onChange={this.radioChange.bind(this)} value="free"/></label>
	                	<label>Paid<input type="radio" name="paytype" onChange={this.radioChange.bind(this)} value="paid"/></label>
	                	<h2>Value : {this.state.inputValue}</h2>
					<input type="submit" />
				</form>
			</div>
			)
	}
}

ReactDOM.render(<FootballGames title="Create a game - post form data" />, document.querySelector('.football'))