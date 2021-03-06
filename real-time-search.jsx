import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class RealTimeSearch extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchString: '',
      libraries: []
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    fetch('frameworks.json').then((response) =>{
      
      return response.json();

    }).then((response) =>{

      this.setState({
        libraries: response.frameworks
      })

    })

  }
  
  handleChange(event){
     this.setState({searchString: event.target.value})
  };

  render(){
      let libraries = this.state.libraries,
          searchString = this.state.searchString.trim().toLowerCase();
    
      if(searchString.length > 0){
            libraries = libraries.filter((l) =>{
                return l.name.toLowerCase().match( searchString );
            });
        }
    
     return  (
              <div className="main-comp">
                <h3>{this.props.title}</h3>
                    <input type="text" 
                           value={searchString} 
                           onChange={this.handleChange} 
                           placeholder="Type here" />
                    <ul> 

                        { libraries.map((l)=>{
                            return (
                                <li key={l.name}>
                                  {l.name} <a href={l.url}>{l.url}</a>
                                </li>
                                )
                        }) }

                    </ul>
                </div>
                )
  }
  
}

ReactDOM.render( <RealTimeSearch title="Real time searh - dynamic data" />, 
                  document.querySelector('.search'));


