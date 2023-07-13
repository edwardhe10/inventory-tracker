import React, { useState } from "react";
import Item from "./Item";
import ItemForm from "./ItemForm";

function InventoryList() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems((prevItems) => {
      return prevItems.concat(item);
    });
  };

  const removeItem = (id) => {
    const removeArr = [...items].filter((item) => item.id !== id);
    setItems(removeArr);
  };

  const incrementQuantity = (id) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, number: Number(item.number) + 1 };
      }
      return item;
    });
    setItems(updatedItems);
  };

  const decrementQuantity = (id) => {
    const updatedItems = items.map((item) => {
      if (item.id === id && item.number > 0) {
        return { ...item, number: Number(item.number) - 1 };
      }
      return item;
    });
    setItems(updatedItems);
  };

  return (
    <div>
      <h1>Inventory Tracker</h1>
      <ItemForm onSubmit={addItem} />
      <h2>Inventory</h2>
      <Item
        items={items}
        removeItem={removeItem}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
      />
    </div>
  );
}

export default InventoryList;
