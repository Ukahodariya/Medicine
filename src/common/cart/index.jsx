import React, { useState, useEffect } from 'react';
import './cart.scss';
import categoryApi from '../../categoryApi/categoryApi';
import toast from 'react-hot-toast';

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Retrieve cart data from localStorage
    const cartData = JSON.parse(localStorage.getItem('cartData')) || [];
    const product = categoryApi[0].medicineDetails[0].Diabetes;

    // Filter products to show only those in cartData
    const selectedItems = product.filter((item) => cartData.includes(item.ObjectId));
    setCartItems(selectedItems);
  }, []);

  const removeFromCart = (id) => {
    // Remove item from cartItems state
    const updatedCartItems = cartItems.filter((item) => item.ObjectId !== id);
    setCartItems(updatedCartItems);

    // Update the cart data in localStorage
    const updatedCartData = updatedCartItems.map((item) => item.ObjectId);
    localStorage.setItem('cartData', JSON.stringify(updatedCartData));

    toast.success('Item removed from cart');
  };

  return (
    <div className='medicine'>
      <h1>Cart</h1>
      <div className='medicine-content'>
        <div className='medicine-card-diabetes'>
          <div className='medicine-card-grid'>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div className='medicine-card-description' key={item.ObjectId}>
                  <div>
                    <div className='medicine-card-description-image'>
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className='medicine-card-description-text-alignment'>
                      <div className='medicine-card-description-text'>
                        <h3>{item.title}</h3>
                      </div>
                    </div>
                  </div>
                  <div className='medicine-card-description-btn'>
                    <span>{item.quantity}</span>
                    <div className='medicine-card-description-flex'>
                      <a>₹{item.price}</a>
                      <p>MRP <del>₹{item.mrp}</del></p>
                      <span>{item.discount}</span>
                    </div>
                    <button>Order Now</button>
                    <button onClick={() => removeFromCart(item.ObjectId)}>Remove</button>
                  </div>
                </div>
              ))
            ) : (
              <p>Your cart is empty.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
