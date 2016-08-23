import React, {Component} from 'react';
import ReactDOM from 'react-dom';

var menuItems = ['home', 'description', 'about', 'contact']

class Header extends Component{
	constructor(props){
		super(props);
	}

	render(){
		const AllmenuItems = menuItems.map((item)=>{
			return <li key={item}> {item} </li>
		}) 
		return(
				<div>
					<p className="logo"><img height="50" src={this.props.logo} /></p>
					<p>Welcome</p>
					<nav>
						<ul>
							{AllmenuItems}
						</ul>
					</nav>
				</div>

			)
	}
}

ReactDOM.render(<Header logo="fruits.png" />, document.querySelector('header'));
