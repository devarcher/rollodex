import React from 'react'
import { SortableElement } from 'react-sortable-hoc';
import HumanCard from './HumanCard';

const SortableHumanContainer = SortableElement((props) => {
  return (
    <HumanCard humanClones={props.humanClones}/>
  )
})

export default SortableHumanContainer