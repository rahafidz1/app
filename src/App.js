import "./App.css";
import { Component } from "react";
import CardList from "./components/card-list/card-list.components.jsx";
import { SearchBox } from "./components/search-box/search-box.component.jsx";

class App extends Component {
  constructor() {
    super();

    this.state = {
      theName: [],
      searchField: "",
    };

    this.handleChage = this.handleChage.bind(this);
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ theName: users }));
  }

  handleChage = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { theName, searchField } = this.state;
    const filteredTheName = theName.filter((theName) =>
      theName.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1> Monsters Raihan</h1>
        <SearchBox
          placeholder="search monsters"
          handleChage={this.handleChage}
        />
        <CardList theName={filteredTheName} />
      </div>
    );
  }
}

export default App;
