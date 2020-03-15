import React from "react";
import HumanCard from "./HumanCard";
import { SortableContainer } from 'react-sortable-hoc';
import SortableHumanContainer from './SortableHumanContainer'

const HumanGroup = SortableContainer((props) => {
  const { humanData } = props;

  // const humanClones = humanData.slice();
  // humanClones.sort(function(a, b) {
  //   let nameA = a.lastName.toLowerCase();
  //   let nameB = b.lastName.toLowerCase();
  //   if (nameA < nameB) {
  //     return -1;
  //   }
  //   if (nameA > nameB) {
  //     return 1;
  //   }
  //   return 0;
  // });

  // console.log("***Sorted Humans***", humanClones);

  return (
    <div className="container">
      {humanData.map((human, index) => (
        <SortableHumanContainer key={human.email} index={index} humanClones={human} />
      ))}
    </div>
  );
});

export default HumanGroup;
