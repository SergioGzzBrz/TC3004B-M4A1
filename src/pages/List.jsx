import React from 'react'
import Item from '../components/Item'

const List = ({items, ondelete}) => {
  console.log('List', items)
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
