import React from 'react';
import ReactDOM from 'react-dom';

class Fruitty extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			data: []
		}
	}

	loadFruits(){

		fetch('fruits.json').then((response)=>{
		
			return response.json();
		
		}).then((data)=>{
		
			this.setState({data: data})
		
		})
	}

	componentDidMount(){
		this.loadFruits();
	}

render() {
	console.log(this.state.data)
    const items = ['EN', 'IT', 'FR', 'GR', 'RU'].map((item) => {
      return (<li onClick={(e) => onItemClick(e, item)} key={item}>{item}</li>);
    });
    return (
      <div>
        
                <ul>              
                  {items}
                </ul>
         
      </div>
    );
  }

}

ReactDOM.render(<Fruitty />, document.querySelector('.fruits'))