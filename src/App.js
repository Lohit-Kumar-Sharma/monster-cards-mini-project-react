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
          <h1>#100daysofcode Challange</h1>
          <h2>Day [9-100]</h2>
          <h2>Learning React</h2>
          <h2>@coding_aasan_hai</h2>
          
          <SearchBox placeholder ='Search Monsters' handleChange={e => this.setState({searchText : e.target.value})} />
          <CardLista monsters = {filteredmonsters}>
           
          </CardLista>
                     
          </div>
       
    );
    
  }
}

export default App;
