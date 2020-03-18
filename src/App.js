import React, {Component} from 'react';
import './App.css';
import {SearchBox} from './components/search-box/search-box.component';
import {CardLista} from './components/card-list/card-list.component';

class App extends Component{

  constructor(){
    super();
    this.state = {
       monsters :   [],
       searchText : ''
    };
  }
  componentDidMount()
  {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters : users}));
  }
  render()
  { 
    const { monsters, searchText} = this.state;
    const filteredmonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchText.toLowerCase())
      );
      console.log(""+monsters+" "+searchText);
    return(
          <div className='App'>
            
              <h2><div id='app_title'>Monster Cards</div></h2>
            
          <h1>#100daysofcode Challange</h1>
          <h2>Instagram @coding_aasan_hai</h2>
          <h3>Disclaimer: Data is coming from an API response. Please expect some delay! :P</h3>
          <SearchBox placeholder ='Search Monsters' handleChange={e => this.setState({searchText : e.target.value})} />
          <CardLista monsters = {filteredmonsters}>
           
          </CardLista>
                     
          </div>
       
    );
    
  }
}

export default App;
