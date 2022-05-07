import React from 'react';
import styles from "../styles/MealItem.module.css"
const MealItem = () => {
  return (
    <div className={styles.MealItem}>
      <span >
          <span className="MealItem__food--info">
            <span className="MealItem__food--name">Солянка</span>
          </span>
        </span>
      <span className={styles.MealItemMacros}>
          <span className={styles.MealItemMacro}>10 </span>
          <span className={styles.MealItemMacro}>20 </span>
          <span className={styles.MealItemMacro}>20</span>
        </span>
      <span className="MealItem__calories">500 </span>
    </div>
  );
};

export default MealItem;