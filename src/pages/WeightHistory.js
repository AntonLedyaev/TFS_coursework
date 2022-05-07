import React from 'react';
import Header from "../components/Header";
import styles from "../styles/WeightHistory.module.css"
import Button from "../decorators/Button";
import Graphic from "../components/Graphic";
import HistoryTable from "../components/HistoryTable";

const WeightHistory = () => {
  return (
    <div>
      <Header>
      </Header>
      <div className={"container"}>
        <div className={styles.WeightHistoryContainer}>
          <h2>Взвеситься: </h2>
          <input className={styles.WeightHistoryInput} type="text" placeholder={"Введите ваш вес"}/>
          <Button>
            Сохранить
          </Button>
        </div>
        <div className={styles.WeightHistoryContainer}>
          <h2>График изменения</h2>
          <Graphic/>
        </div>
        <div className={styles.WeightHistoryContainer}>
          <h2>История изменения веса</h2>
          <HistoryTable/>
        </div>
      </div>
    </div>
  );
};

export default WeightHistory;