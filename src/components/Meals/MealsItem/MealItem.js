import React from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

function MealItem(props) {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={props.description}>{props.description}</div>
        <div className={props.price}>{price}</div>
      </div>
      <div>
        <MealItemForm key={props.id} />
      </div>
    </li>
  );
}

export default MealItem;
