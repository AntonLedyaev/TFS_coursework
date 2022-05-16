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

  const renderTitle = (type) => {
    switch (type) {
      case "breakfast":
        return "Завтрак"
      case "lunch":
        return  "Обед"
      case "dinner":
        return "Ужин"
      default:
        return "Прием пищи"
    }
  }
  return (
    <div>
      <div className={styles.MealGroup}>
        <div className={styles.MealGroupHeader}>
          <div className={styles.MealGroupHeaderTitle}>{renderTitle(props.type)}</div>
          <div className={styles.MealGroupHeaderMacros}>
              <span className={styles.MealGroupHeaderMacro}>Белки</span>
              <span className={styles.MealGroupHeaderMacro}>Жиры</span>
              <span className={styles.MealGroupHeaderMacro}>Углеводы</span>
          </div>
          <div>Калории</div>
        </div>
        {todayItems.map(item =>
          <MealItem
            description ={item.Description}
            energy = {item.Energy}
            proteins = {item.Proteins}
            fats = {item.Fats}
            carbs = {item.Carbs}
            key = {item.Energy + item.Proteins}
        />)}
        <AddFood type = {props.type} date = {props.date}/>
      </div>
    </div>
  );
};

export default MealGroup;