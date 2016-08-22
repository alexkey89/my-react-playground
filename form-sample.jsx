import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class FormSample extends Component{
	constructor(props){
		super(props);
		this.state = {
			password: '',
			username: ''
		}

		this.handleUserChange = this.handleUserChange.bind(this)
		this.handlePassChange = this.handlePassChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleUserChange(event){
		this.setState({username: event.target.value})
	}

	handlePassChange(event){
		this.setState({password: event.target.value})
	}

	handleSubmit(event){
		event.preventDefault();
		console.log(this.state.username)
		console.log(this.state.password)
	}

	render(){
		return(
			  <div>
			  	 <form onSubmit={this.handleSubmit}>
			  	 		<h1>{this.props.title}</h1>
			  	 		<input required type="text" name="username" onChange={this.handleUserChange} />
			  	 		<input required type="password" name="password" onChange={this.handlePassChange} />
			  	 		<input type="submit" />
			  	 </form>
			  </div>
			)
	}
}

ReactDOM.render(<FormSample title="Form sample" />, document.querySelector('.form-sample'))