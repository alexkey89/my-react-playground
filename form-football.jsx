import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class FootballGames extends Component{
	constructor(props){
		super(props);
		this.state = {
			data: []
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

	handleSubmit(event){
		event.preventDefault();
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
					<label>Name <input type="text" /></label>
					<label>Date <input type="text" /></label><br />
					<span>Payment method</span>
					<label>Free<input type="radio" value="free" name="paytype" /></label>
					<label>Paid<input type="radio" value="paid" name="paytype" /></label>
					<input type="submit" />
				</form>
			</div>
			)
	}
}

ReactDOM.render(<FootballGames title="Create a game - post form data" />, document.querySelector('.football'))