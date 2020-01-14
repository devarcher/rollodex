import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    humans: []
  };

  componentDidMount() {
    this.fetchHumans();
  }

  async fetchHumans() {
    try {
      const url = "https://randomuser.me/api?results=25";
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div>
        hi
      </div>
    )
  }
}

export default App;
