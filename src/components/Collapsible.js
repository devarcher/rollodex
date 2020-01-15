import React from "react";
import moment from "moment";
import "../App.css";

class Collapsible extends React.Component {
  render() {
    const { humanClones } = this.props;
    const { isExpanded } = this.props;
    return (
      <div className={isExpanded ? "details" : "isNotExpanded "}>
        <div className="detailsLeft">
          <p><strong>Email: </strong>{humanClones.email}</p>
          <p><strong>Phone: </strong>{humanClones.phone}</p>
          <p><strong>Birthday: </strong>{moment(humanClones.dob).format("MMMM Do")}</p>
        </div>
        <div className="detailsRight">
          <p>
            <strong>Address: </strong>{humanClones.streetNumber} {humanClones.streetName}
          </p>
          <p>
            <strong>City/State: </strong>{humanClones.city}, {humanClones.state}
          </p>
          <p><strong>Country: </strong>{humanClones.country}</p>
          <p><strong>postCode: </strong>{humanClones.postCode}</p>
        </div>
      </div>
    );
  }
}

export default Collapsible;
