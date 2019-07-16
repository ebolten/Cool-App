import React from 'react';
import logo from './logo.svg';
import './App.css';
import CoolContainer from './CoolContainer.js'
import SearchBar from './Search.js'
//import NAME (name could be anything)
import { tsConstructorType } from '@babel/types';

//prop that will be passed in (never changes)
let word = 'Splendid'

class App extends React.Component {

  //pass in state through the constructor
  constructor(){
    super()
    this.state = {
      searchText: ""
    }
  }

   //change state of search text to be whatever is in input
   changeSearchText = (event) => {
    let newSearchText = event.target.value
    this.setState({
        searchText: newSearchText
    })
}

  //pass in props through component use
  render(){
    return (
      <div className="App">

        <div id='searchDiv'>
      
          <SearchBar changingText={this.changeSearchText} />
        
        </div>

        <CoolContainer
          searchText={this.state.searchText}
          adjetive={word}
          />
          
      </div>
    );
  }
}

export default App;
