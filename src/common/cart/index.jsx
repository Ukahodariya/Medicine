import React, { useState, useEffect } from 'react';
import './cart.scss';
import categoryApi from '../../categoryApi/categoryApi';
import { BsSearch } from 'react-icons/bs';
import toast from "react-hot-toast";
// import CardIcon from '../cardicon';

export default function Cart() {

    const [quantity, setQuantity] = useState(1);

    // Assuming categoryApi[0].product is an array of product objects
  
    const increaseQuantity = () => {
      setQuantity((prevQuantity) => prevQuantity + 1);
    };
  
    const decreaseQuantity = () => {
      if (quantity > 1) {
        setQuantity((prevQuantity) => prevQuantity - 1);
      }
    };
  
    const cartData = JSON.parse(localStorage.getItem("cartData"));
    const product = categoryApi[0].medicineDetails[0].Diabetes;
    const category = product.filter((item) => cartData.includes(item.ObjectId));

    return (
        <div>
      <h1>Cart</h1>
      {category.map((item) => (
        <div key={item.ObjectId} className="cart-card">
          <img src={item.image} alt="Shoe" className="cart-card-img" />
          <div className="cart-card-details">
            <h3 className="cart-card-title">{item.name}</h3>
            <p className="cart-card-size">Size: 10</p>
            <div className="cart-card-price">
              <p>${item.discounted_price}</p>
            </div>
          </div>
          <div className="cart-quantity">
            <button className="decrease-btn" onClick={decreaseQuantity}>
              -
            </button>
            <input
              type="number"
              value={quantity}
              min="1"
              className="quantity-input"
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
            <button className="increase-btn" onClick={increaseQuantity}>
              +
            </button>
          </div>
          <button className="remove-btn">Remove</button>
        </div>
      ))}
    </div>
    );
}
