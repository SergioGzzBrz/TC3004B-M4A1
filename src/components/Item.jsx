import React from 'react'
import Boton from './Boton'

const Item = ({item, ondelete}) => {
  
  return (
    <>
      <ul>
        <li>{item.name}</li>
        <li>{item.price}</li>
        <li>
          <Boton name={"X"} click={() => {ondelete(item.id); console.log("yeah")}}></Boton>
        </li>
      </ul>
    </>
  )
}

export default Item
