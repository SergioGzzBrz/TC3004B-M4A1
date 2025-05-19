import React from "react";
import Item from "../components/Item";

const List = ({ items, ondelete }) => {
  console.log("List", items);
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody style={{ textAlign: "center" }}>
        {items.map((item, i) => {
          return <Item key={item.id} item={item} ondelete={ondelete} />;
        })}
      </tbody>
    </table>
  );
};

export default List;
