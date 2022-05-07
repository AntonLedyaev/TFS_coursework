import React from 'react';
import Header from "../components/Header";
import styles from "../styles/Diary.module.css"
import MealGroup from "../components/MealGroup";

const Diary = () => {
  return (
    <div>
      <Header>
      </Header>
      <div className={"container"}>
        <div className={styles.DiaryHeader}>
          <span>12.12.12</span>
          <span>2000</span>
        </div>
        <MealGroup type ="Завтрак"/>
        <MealGroup type ="Обед"/>
        <MealGroup type ="Ужин"/>
      </div>
    </div>
  );
};

export default Diary;