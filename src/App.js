// import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';
import { CardList } from './Component/Card-List/card-list.component';
import { SearchBox } from './Component/search-box/search-box';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monstores: [],
      searchField: ''
  };
}
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({monstores:users}) );
  }
  
  render(){
    const {monstores,searchField} = this.state;
    const filterMonster = monstores.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return(
      
      <div className="App">

        <h1>Monster Rolodex</h1>
        {/* <input type='search'  
          onChange/> */}
        <SearchBox placeholder='search monster image'
          searchChange={e => this.setState({searchField:e.target.value})}
        />
        {/* <CardList monstores={this.state.monstores}/> */}
        <CardList monstores={filterMonster}/>
      
        </div>
      );
  }
}
export default App;
