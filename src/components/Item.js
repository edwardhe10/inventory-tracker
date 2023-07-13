import React from "react";
import { TiDelete, TiPlus, TiMinus } from "react-icons/ti";

function Item({ items, removeItem, incrementQuantity, decrementQuantity }) {
  return (
    <div>
      {items.map((item) => (
        <div className="item-box" key={item.id}>
          <div className="item-details">
            <div className="item-name">
              <b>Name:</b> {item.name}
            </div>
            <div className="item-quantity">
              <b>Quantity:</b> {item.number}
            </div>
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
            <TiDelete
              onClick={() => removeItem(item.id)}
              className="delete-icon"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Item;
