import React, { useState } from "react";

function ItemForm(props) {
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleNameChange = (event) => {
    setItem(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if both name and quantity are filled
    if (item.trim() === "" || quantity.trim() === "") {
      alert("Please enter a name and quantity for the item.");
      return;
    }

    // Check if quantity is a valid number
    if (isNaN(quantity) || Number(quantity) <= 0) {
      alert("Please enter a valid quantity for the item.");
      return;
    }

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      name: item,
      number: quantity,
    });
    setItem("");
    setQuantity("");
  };

  return (
    <form className="inventory-form" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={item} onChange={handleNameChange} />
      </label>
      <label>
        Quantity:
        <input type="number" value={quantity} onChange={handleQuantityChange} />
      </label>
      <button type="submit">Add Item</button>
    </form>
  );
}

export default ItemForm;
