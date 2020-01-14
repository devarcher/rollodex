import React from "react";
import HumanCard from "./HumanCard";

const HumanGroup = props => {
  const { humanData } = props;

  const humanClones = humanData.slice();
  humanClones.sort(function(a, b) {
    let nameA = a.lastName.toLowerCase(),
      nameB = b.lastName.toLowerCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  console.log("***Sorted Humans***", humanClones);

  return (
    <div>
      {humanClones.map(human => (
        <HumanCard key={human.email} humanClones={human} />
      ))}
    </div>
  );
};

export default HumanGroup;
