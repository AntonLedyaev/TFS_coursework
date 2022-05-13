import React from 'react';
import styles from "../styles/MealItem.module.css"
const MealItem = (props) => {
  return (
    <div className={styles.MealItem}>
      <span >
          <span className="MealItem__food--info">
            <span className="MealItem__food--name">{props.description}</span>
          </span>
        </span>
      <span className={styles.MealItemMacros}>
          <span className={styles.MealItemMacro}>{props.proteins} </span>
          <span className={styles.MealItemMacro}>{props.fats} </span>
          <span className={styles.MealItemMacro}>{props.carbs}</span>
        </span>
      <span className="MealItem__calories">{props.energy} </span>
    </div>
  );
};

export default MealItem;