import React from 'react'
import Item from './Item';

const List = ({items, ondelete}) => {
  return (
    <>
      {
      items.map((item, i) => {
        return <Item key={item.id} item={item} ondelete={ondelete}/>
      })
      }
    </>
  )
}

export default List
