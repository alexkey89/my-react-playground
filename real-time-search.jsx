import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class RealTimeSearch extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchString: '',
      libraries: []
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
     axios.get('frameworks.json')
    .then((response) => {

       this.setState({
        libraries: response.data.frameworks
       })

      })
      .catch((error) => {
        console.log(error);
    });
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
              <div>
                    <input type="text" 
                           value={searchString} 
                           onChange={this.handleChange} 
                           placeholder="Type here" />
                    <ul> 

                        { libraries.map((l)=>{
                            return (
                                <li>
                                  {l.name} <a href={l.url}>{l.url}</a>
                                </li>
                                )
                        }) }

                    </ul>
                </div>
                )
  }
  
}

ReactDOM.render( <RealTimeSearch />, document.querySelector('.search'));


