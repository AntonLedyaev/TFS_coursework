import React from 'react';
import styles from "../styles/MealItem.module.css"
const MealItem = (props) => {
  return (
    <div className={styles.MealItem}>
      <div className={styles.MealItemTitle}>
        <div className={styles.MealItemName} >
          <span className="MealItem__food--name">{props.description}</span>
        </div>
        <div className={styles.MealItemMacros}>
          <span className={styles.MealItemMacro}>{props.proteins ? props.proteins.toFixed(1) : props.proteins} </span>
          <span className={styles.MealItemMacro}>{props.fats ? props.fats.toFixed(1) : props.fats} </span>
          <span className={styles.MealItemMacro}>{props.carbs ? props.carbs.toFixed(1) : props.carbs}</span>
        </div>
      </div>
      <div className="MealItem__calories">{props.energy ? props.energy.toFixed(0) : props.energy} </div>
    </div>
  );
};

export default MealItem;