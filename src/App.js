import {Component} from 'react'
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-bar/search-box.component';

import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters:[],
      searchField: ''
    }
}

  componentDidMount(){
    // API call
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => 
        this.setState(
          ()=>{
          return {monsters: users}
        }
      ))
  }

  onSearchChange = (event)=>{
    const searchField = event.target.value.toLowerCase()
    this.setState(() => {
      return {searchField}
    })
  }

  render() {
    // destructuring, allows to use varriables within code without the 'this' and 'this.state' prefix
    const { monsters, searchField } = this.state
    const { onSearchChange } = this

    const filteredMonsters = monsters.filter((monster)=> {
      return monster.name.toLowerCase().includes(searchField)
    })

    console.log(this.state.monsters)
    return (
      <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox 
          onChangeHandler={onSearchChange}
          placeHolder='search monsters' 
          className='monsters-search-box'
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
