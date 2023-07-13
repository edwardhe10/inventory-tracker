import React from "react";
import { TiDelete, TiPlus, TiMinus } from "react-icons/ti";

function Item({ items, removeItem, incrementQuantity, decrementQuantity }) {
  return items.map((item, index) => (
    <div className="item-row" key={index}>
      <div key={item.id}>
        Name: {item.name} Quantity: {item.number}
      </div>
      <div className="icons">
        <TiPlus
          onClick={() => incrementQuantity(item.id)}
          className="increment-icon"
        />
        <TiMinus
          onClick={() => decrementQuantity(item.id)}
          className="decrement-icon"
        />
        <TiDelete onClick={() => removeItem(item.id)} className="delete-icon" />
      </div>
    </div>
  ));
}

export default Item;
