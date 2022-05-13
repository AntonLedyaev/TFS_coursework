import React, {useEffect} from 'react';
import Header from "../components/Header";
import styles from "../styles/Diary.module.css"
import MealGroup from "../components/MealGroup";
import Calendar from "react-calendar";
import {useState} from "react";
import DatePicker from "react-datepicker";
import {useNavigate, useParams} from "react-router-dom";
const Diary = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [rawDate, setRawDate] = useState(params.date);

  useEffect(()=> {
    navigate(`/diary/${rawDate}`)
  }, [rawDate])

  return (
    <div>
      <Header>
      </Header>
      <div className={"container"}>
        <div className={styles.DiaryHeader}>
          <DatePicker
            selected={startDate}
            onChange={(date) => {
            setStartDate(date);
            setRawDate(new Date(date).toLocaleDateString("ru-RU"))
            }}
          />
          <span>2000</span>
        </div>
        <MealGroup type ="breakfast" date = {rawDate}/>
        <MealGroup type ="lunch" date = {rawDate}/>
        <MealGroup type ="dinner" date = {rawDate}/>
      </div>
    </div>
  );
};

export default Diary;