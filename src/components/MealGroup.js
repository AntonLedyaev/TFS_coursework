import React from 'react';
import AddFood from "./AddFood";
import MealItem from "./MealItem";
import styles from "../styles/MealGroup.module.css"
import {useSelector} from "react-redux";
const MealGroup = (props) => {
  const foodList = useSelector(state => state.foodInfo);
  const todayItems = foodList.foodInfo.filter(item => {
    const diaryDate = props.date;
    return (item.DateID === diaryDate && item.Type===props.type)})
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
        {todayItems.map(item =>
          <MealItem
            description ={item.Description}
            energy = {item.Energy}
            proteins = {item.Proteins}
            fats = {item.Fats}
            carbs = {item.Carbs}
        />)}
        <AddFood type = {props.type} date = {props.date}/>
      </div>
    </div>
  );
};

export default MealGroup;