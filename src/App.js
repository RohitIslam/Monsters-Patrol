import React, { Component } from "react";
import "./App.css";
import CardList from "./components/CardList/CardList";
import SearchBox from "./components/SearchBox/SearchBox";

class App extends Component {
  state = {
    monsters: [],
    searchField: ""
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => this.setState({ monsters: data }));
  }

  changeHandler = event => {
    return this.setState({ searchField: event.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filterMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1 className="headerLine">Monsters Patrol</h1>
        <SearchBox
          change={event => this.changeHandler(event)}
          placeholder="Search Monsters"
        />
        <CardList monsters={filterMonsters} />
      </div>
    );
  }
}

export default App;
