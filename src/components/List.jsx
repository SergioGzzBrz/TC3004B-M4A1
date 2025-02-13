import React from 'react'
import Item from './Item';

const List = ({items}) => {
  return (
    <>
      {
      items.map((item, i) => {
        return <Item key={item.id} item={item} />
      })
      }
    </>
  )
}

export default List
