import React from "react";
import HumanGroup from "./components/HumanGroup";
import { arrayMove } from 'react-sortable-hoc';

import "./App.css";

class App extends React.Component {
  state = {
    humans: [],
    isLoading: true
  };

  componentDidMount() {
    this.fetchHumans();
  }

  async fetchHumans() {
    try {
      const url = "https://randomuser.me/api?results=25";
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data.results)
      const humanData = data.results.map(human => ({
        firstName: human.name.first,
        lastName: human.name.last,
        email: human.email,
        phone: human.phone,
        streetName: human.location.street.name,
        streetNumber: human.location.street.number,
        postCode: human.location.postcode,
        city: human.location.city,
        state: human.location.state,
        country: human.location.country,
        dob: human.dob.date,
        picture: human.picture.large
      }));
      this.setState({ humans: humanData, isLoading: false });
    } catch (err) {
      console.log(err);
    }
  }

  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({humans: arrayMove(this.state.humans, oldIndex, newIndex)})
  }

  render() {
    return (
      <div>
        {this.state.loading || !this.state.humans ? (
          <div>LOADING HUMANS...</div>
        ) : (
          <div>
            <HumanGroup humanData={this.state.humans} onSortEnd={this.onSortEnd} axis='xy' />
          </div>
        )}
      </div>
    );
  }
}

export default App;
