import React, {useState} from 'react';
import Header from "../components/Header";
import styles from "../styles/WeightHistory.module.css"
import Button from "../decorators/Button";
import Graphic from "../components/Graphic";
import HistoryTable from "../components/HistoryTable";
import Input from "../decorators/Input";

const WeightHistory = (props) => {
  const [wantedWeight, setWantedWeight] = useState(0);
  const [currentWeight, setCurrentWeight] = useState({id: Date.now(),value: 0})

  const handleCurrentWeightChange = (event) => {
    event.preventDefault();

    const newWeight = {
      ...currentWeight, id: Date.now()
    }
    props.addWeightValue(newWeight);
    event.preventDefault();
  }

  const handleWantedWeightChange = (event) => {
    event.preventDefault();
    props.changeWantedWeight(wantedWeight);
  }

  return (
    <div>
      <Header>
      </Header>
      <div className={"container"}>

        <div className={styles.WeightHistoryContainer}>
          <h2>Взвеситься </h2>
          <Input
            className={styles.WeightHistoryInput}
            type="text"
            placeholder={"Введите ваш вес"}
            onChange={e=> setCurrentWeight({id: Date.now(), value: e.target.value})}/>
          <Button onClick = {handleCurrentWeightChange}>
            Сохранить
          </Button>
        </div>
        <div className={styles.WeightHistoryContainer}>
          <h2>График изменения</h2>
          <Graphic weightHistory = {props.weightHistory}/>
        </div>
        <div className={styles.WeightHistoryContainer}>
          <h2>История изменения веса</h2>
          <HistoryTable
            wantedWeight ={props.wantedWeight}
            currentWeight = {currentWeight.value}
            weightHistory = {props.weightHistory}
            removeWeight = {props.removeWeight}
          />
        </div>

        <div className={styles.WeightHistoryContainer}>
          <h2>Изменить желаемый вес </h2>
          <Input
            className={styles.WeightHistoryInput}
            onChange ={e=>setWantedWeight(e.target.value)}
            type="text"
            placeholder={"Введите желаемый вес"}/>
          <Button onClick = {handleWantedWeightChange}>
            Сохранить
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WeightHistory;