import React, {useEffect} from 'react';
import Header from "../components/Header";
import styles from "../styles/Diary.module.css"
import MealGroup from "../components/MealGroup";
import {useState} from "react";
import DatePicker from "react-datepicker";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {child, get, getDatabase, ref, update} from "firebase/database";
import {userName} from "../utils/userName";
import {formatDate} from "../utils/formatDate";
import GoalsCounter from "../components/GoalsCounter";
const Diary = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(params.date? formatDate(params.date):new Date());
  const [rawDate, setRawDate] = useState(params.date);
  const state = useSelector(state => state)
  const db = getDatabase();
  useEffect(() => {
    const updates = {}
    updates[`/users/${userName(state)}/foodInfo`] = state.foodInfo.foodInfo
    if(state.foodInfo.foodInfo.length !== 0) {
      update(ref(db), updates).then();
    }
    navigate(`/diary/${rawDate}`)
  }, [state.foodInfo, rawDate])

  useEffect(() => {
    function getData() {
      get(child(ref(db), `/users/${userName(state)}/foodInfo`)).then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val()
          if(!data.foodInfo) {
            data.foodInfo = []
          }
          dispatch({type: "GET_FOOD", payload: data})
        }
      })
    }
    if(state.user.user !== '') {
      getData()
    }
  },[dispatch, state.user.user])




  return (
    <div>
      <Header/>
      <div className={"container"}>
        <div className={styles.DiaryHeader}>
          <DatePicker
            className = {styles.DiaryCalendar}
            selected={startDate}
            onChange={(date) => {
            setStartDate(date);
            setRawDate(new Date(date).toLocaleDateString("ru-RU"))
            }}
          />
        </div>
        <MealGroup type ="breakfast" date = {rawDate}/>
        <MealGroup type ="lunch" date = {rawDate}/>
        <MealGroup type ="dinner" date = {rawDate}/>
        <GoalsCounter date = {rawDate}/>
      </div>
    </div>
  );
};

export default Diary;