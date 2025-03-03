import React from 'react'
import Boton from './Boton'

const Item = ({item, ondelete}) => {
  
  return (
    <>
      <ul>
        <li>{item.name}</li>
        <li>{item.price}</li>
        <li>
          <Boton name={"X"} click={() => {ondelete(item.id); console.log("Tried to delete item!")}}></Boton>
        </li>
      </ul>
    </>
  )
}

export default Item
