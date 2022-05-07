import React from 'react';
import AddFood from "./AddFood";
import MealItem from "./MealItem";
import styles from "../styles/MealGroup.module.css"
const MealGroup = (props) => {
  return (
    <div>
      <div className={styles.MealGroup}>
        <div className={styles.MealGroupHeader}>
          <span className={styles.MealGroupHeaderTitle}>{props.type}</span>
          <span className={styles.MealGroupHeaderMacros}>
              <span className={styles.MealGroupHeaderMacro}>Белки</span>
              <span className={styles.MealGroupHeaderMacro}>Жиры</span>
              <span className={styles.MealGroupHeaderMacro}>Углеводы</span>
          </span>
          <span>Калории</span>
        </div>
        <MealItem/>
        <AddFood/>
      </div>
    </div>
  );
};

export default MealGroup;