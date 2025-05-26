import React, { useState } from "react";

const API_URL = process.env.REACT_APP_API_URL;

const useItems = (token) => {
  const [items, setItems] = useState([]);

  const getItems = async () => {
    try {
      const result = await fetch(API_URL + "/items/", {
        headers: {
          "content-type": "application/json",
          Authorization: `${token}`,
        },
      });
      const data = await result.json();
      console.log(data);
      setItems(data);
    } catch (e) {
      console.error("Error in get items: ", e);
    }
  };

  const addItem = async (item) => {
    try {
      const result = await fetch(API_URL + "/items/", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization: `${token}`,
        },
        body: JSON.stringify(item),
      });

      const data = await result.json();

      setItems([...items, ...data.inserted_items]);
    } catch (e) {
      console.error("Error in add item:", e);
    }
  };

  const delItem = async (id) => {
    try {
      const result = await fetch(API_URL + "/items/" + id, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          Authorization: `${token}`,
        },
      });
      setItems(items.filter((item) => item.id !== id));
    } catch (e) {
      console.error("Error in delete item:", e);
    }
  };

  return { items, getItems, addItem, delItem };
};

export default useItems;
