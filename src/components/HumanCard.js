import React from "react";
// import moment from "moment";
import Collapsible from "./Collapsible";
import { CSSTransition } from "react-transition-group";
import { TransitionGroup } from "react-transition-group";

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
              <div className="textBlock">
                <h1>
                  {humanClones.firstName} {humanClones.lastName}
                </h1>
                <span className="revealButton" onClick={this.isExpandedToggle}>
                  {isExpanded ? "Hide Details" : "Show Details"}
                </span>
              </div>
            </div>
            <Collapsible humanClones={humanClones} isExpanded={isExpanded} />
          </div>
        </div>
      </div>
    );
  }
}

export default HumanCard;
