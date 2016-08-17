import React from 'react';
import ReactDOM from 'react-dom';

class Fruitty extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			data: []
		}
	}


render() {
    const items = ['EN', 'IT', 'FR', 'GR', 'RU'].map((item) => {
      return (<li onClick={(e) => onItemClick(e, item)} key={item}>{item}</li>);
    });
    return (
      <div>
        	<h3>{this.props.title}</h3>
                <ul>              
                  {items}
                </ul>
      </div>
    );
  }

}

ReactDOM.render(<Fruitty title="Hard coded data" />, document.querySelector('.fruits'))