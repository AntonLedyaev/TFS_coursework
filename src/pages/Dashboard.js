import React, { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import Header from "../components/Header";
import Button from "../decorators/Button";
import styles from "../styles/Dashboard.module.css"
import cn from 'classnames';
import Graphic from "../components/Graphic";
import Input from "../decorators/Input";
import weightHistory from "./WeightHistory";
import {useDispatch, useSelector} from "react-redux";

export default function Dashboard(props) {
  const dispatch = useDispatch();
  const goalsState = useSelector(state => state.goals)
  const weightState = useSelector(state => state.weight)
  const [goals, setGoals] = useState(
    {
      calories: 2500,
      fats: 80,
      carbs: 250,
      proteins: 120
    });
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useNavigate();

  const handleGoalsChange = (event) => {
    event.preventDefault();
    dispatch({type: "CHANGE_GOALS", payload:goals})
    //props.changeCalorieGoals(goals);
  }

  async function handleLogout() {
    setError("")

    try {
      console.log(currentUser)
      await logout()
      // history.push("/login")
      history('/login')
    } catch (e) {
      // console.log(e)
      setError("Failed to log out")
    }
  }
  return (
    <>
      <Header>
      </Header>
      <div className={"container"}>
        <div className={styles.dashboardInfo}>
          <div className={cn(styles.dashboardInfoContainer)}>
            <h2>Мои ежедневные цели</h2>
            <form className={styles.dashboardInfoGoalsForm}>
              <div>
                <label htmlFor="calories">Калории: {goalsState.goals.calories}</label>
                <Input
                  onChange = {(e)=> setGoals({...goals, calories: e.target.value})}
                  className={styles.dashboardInfoGoalsInput}
                  type="text"
                  name="calories"
                  placeholder={goals.calories}
                />
              </div>
              <div>
                <label htmlFor="fats">Жиры: {goalsState.goals.fats}</label>
                <Input
                  onChange = {(e)=> setGoals({...goals, fats: e.target.value})}
                  className={styles.dashboardInfoGoalsInput}
                  type="text"
                  name="fats"
                  placeholder={`${goals.fats}г`}
                />
              </div>
              <div>
                <label htmlFor="proteins">Белки: {goalsState.goals.proteins}</label>
                <Input
                  onChange = {(e)=> setGoals({...goals, proteins: e.target.value})}
                  className={styles.dashboardInfoGoalsInput}
                  type="text"
                  name="proteins"
                  placeholder={`${goals.proteins}г`}
                />
              </div>
              <div>
                <label htmlFor="carbs">Углеводы: {goalsState.goals.carbs}</label>
                <Input
                  onChange = {(e)=> setGoals({...goals, carbs: e.target.value})}
                  className={styles.dashboardInfoGoalsInput}
                  type="text" name="carbs"
                  placeholder={`${goals.carbs}г`}
                />
              </div>
            </form>
            <Button type="submit" onClick = {handleGoalsChange} >
              Сохранить
            </Button>
          </div>
          <div className={cn(styles.dashboardInfoContainer)}>
            <h2>Моя история изменения веса</h2>
            <div>
              <p><span>Изначальный вес: </span><span>{`${props.weightHistory[0].value}`}кг</span></p>
              <p><span>Текущий вес: </span><span>{`${props.weightHistory[props.weightHistory.length-1].value}`}кг</span></p>
            </div>
            <Graphic weightHistory = {weightState.weight.weightHistory}/>
          </div>
          <div className={cn(styles.dashboardInfoContainer)}>
            <h2>Мой профиль</h2>
            {error && <alert>{error}</alert>}
            <p>
              <strong>Email:</strong> {currentUser.email}
            </p>
            <p>
              <Link to="/update-profile">
                Изменить параметры профиля
              </Link>
            </p>
            <div>
              <Button type="submit" onClick={handleLogout}>
                Выйти
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
