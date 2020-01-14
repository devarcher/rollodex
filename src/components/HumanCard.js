import React from "react";
import moment from "moment";

class HumanCard extends React.Component {
  state = {
    isExpanded: false
  };

  isExpandedToggle = e => {
    e.preventDefault();
    this.setState({ isExpanded: !this.state.isExpanded });
  };

  render() {
    const { humanClones } = this.props;
    const { isExpanded } = this.state;
    // console.log(humanClones);
    return (
      <div>
        <div className="card">
          <div className="card-body">
            <div className="basicInfo">
              <img
                src={humanClones.picture}
                className="pic"
                alt={humanClones.firstName}
              ></img>
              <h1>
                {humanClones.firstName} {humanClones.lastName}
              </h1>
            </div>
              <button className="revealButton" onClick={this.isExpandedToggle}>
                {isExpanded
                  ? "Hide Details"
                  : humanClones.firstName + " Details"}
              </button>
            
            
            <div className={isExpanded ? "" : "isNotExpanded"}>
              <div className="detailsLeft">
                <p>Email: {humanClones.email}</p>
                <p>Phone: {humanClones.phone}</p>
                <p>Birthday: {moment(humanClones.dob).format("MMMM Do")}</p>
              </div>
              <div className="detailsRight">
                <p>
                  Address: {humanClones.streetNumber} {humanClones.streetName}
                </p>
                <p>
                  City/State: {humanClones.city}, {humanClones.state}
                </p>
                <p>Country: {humanClones.country}</p>
                <p>Post Code: {humanClones.postCode}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HumanCard;
