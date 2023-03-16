import React from 'react';
import Modal from '../Meals/UI/Modal';
import classes from './Cart.module.css';
const DUMMY_CART = [{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }];
function Cart(props) {
  const cartItems = (
    <ul className={classes['cart-items']}>
      {DUMMY_CART.map(item => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.5</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onHideCart}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
