import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {child, get, getDatabase, ref} from "firebase/database";
import {userName} from "../utils/userName";

const GoalsCounter = (props) => {
  const state = useSelector(state => state);
  const dispatch = useDispatch()
  const db = getDatabase();


  const goals = state.goals.goals;
  const [sum, setSum] = useState({
      Energy: 0,
      Proteins: 0,
      Fats: 0,
      Carbs: 0
    }
  )
  const diaryDate = props.date;

  useEffect(() => {
    const foodList = state.foodInfo.foodInfo;
    const localSum = {
      Energy: 0,
      Proteins: 0,
      Fats: 0,
      Carbs: 0
    }
    if (state.foodInfo) {
      state.foodInfo.foodInfo.forEach(item => {
        if (item.DateID === diaryDate){
          console.log(item)
          localSum.Energy += item.Energy;
          localSum.Proteins += item.Proteins;
          localSum.Fats += item.Fats;
          localSum.Carbs += item.Carbs;
        }})
    }
    setSum(localSum);

  }, [])

  useEffect(() => {
    function getData() {
      get(child(ref(db), `/users/${userName(state)}/goals`)).then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val()
          dispatch({type: "GET_GOALS", payload: data})
        }
      })
    }

    if (state.user.user !== '') {
      getData()
    }
  }, [dispatch,state.user.user])

  return (
    <div>
      <div>
        <h3>Итоги дня:   </h3>
        <p>Калории: {sum.Energy ? sum.Energy.toFixed(0) : sum.Energy} / {state.goals.goals.calories} </p>
        <p>Белки: {sum.Proteins ? sum.Proteins.toFixed(1) : sum.Proteins} / {state.goals.goals.proteins}</p>
        <p>Жиры:  {sum.Fats ? sum.Fats.toFixed(1) : sum.Fats} / {state.goals.goals.fats}</p>
        <p>Углеводы: {sum.Carbs ? sum.Carbs.toFixed(1) : sum.Carbs} / {state.goals.goals.carbs}</p>
      </div>
    </div>
  );
};

export default GoalsCounter;