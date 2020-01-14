import React from "react";

class HumanCard extends React.Component {
  render() {
    const { humanClones } = this.props;
    // console.log(humanClones);
    return (
      <div>
        <div className="card">
          <div className="card-body">
            <div className="basicInfo">
              <img src={humanClones.picture} className="pic" alt={humanClones.firstName}></img>
              <h1>
                 {humanClones.firstName} {humanClones.lastName}
              </h1>
            </div>
            <div className="details">
              <div className="detailsLeft">
                <p>{humanClones.email}</p>
                <p>{humanClones.phone}</p>
                <p>{humanClones.dob}</p>
              </div>
              <div className="detailsRight">
                <p>{humanClones.streetNumber}</p>
                <p>{humanClones.streetName}</p>
                <p>{humanClones.city}</p>
                <p>{humanClones.state}</p>
                <p>{humanClones.postalCode}</p>
                <p>{humanClones.country}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HumanCard;
