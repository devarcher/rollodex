import React from 'react';

class HumanCard extends React.Component {
 
  render() {
    const { humanData } = this.props
    console.log(humanData)
    return (
      <div>
        hi
      </div>
    )
  }
}

export default HumanCard;