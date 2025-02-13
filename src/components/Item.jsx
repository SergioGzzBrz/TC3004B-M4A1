import React from 'react'

const Item = ({item}) => {
  return (
    <>
      <ul>
        <li>{item.name}</li>
        <li>{item.price}</li>
      </ul>
    </>
  )
}

export default Item
