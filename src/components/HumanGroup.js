import React from "react";
import HumanCard from './HumanCard';

const HumanGroup = (props) => {

  const { humanData } = props
  
  return (
    <div>
      {humanData.map(human => (
        <HumanCard key={human.email} humanData={human} />
      ))}
    </div>
  )
}



export default HumanGroup;