import React, { Component } from "react";
import List from "./List";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: []
    };
    this.getHeroes = this.getHeroes.bind(this);
  }

  getHeroes() {
    return axios.get("https://swapi.co/api/people").then(response => {
      console.log(response.data.results);
      this.setState({ people: response.data.results });
    });
  }

  getHeroes() {
    return axios.get("https://swapi.co/api/people").then(response => {
      console.log(response.data.results);
      this.setState({ people: response.data.results });
    });
  }

  componentDidMount() {
    this.getHeroes();
  }

  render() {
    const { people } = this.state;
    return (
      <div className="App">
        <List people={people} />
      </div>
    );
  }
}

export default App;
