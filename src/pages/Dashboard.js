import React, { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import Header from "../components/Header";
import header from "../components/Header";
import Button from "../decorators/Button";
import styles from "../styles/Dashboard.module.css"
import cn from 'classnames';
import Graphic from "../components/Graphic";
export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useNavigate()

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
                <label htmlFor="calories">Калории</label>
                <input className={styles.dashboardInfoGoalsInput} type="text" name="calories" placeholder={"2500"}/>
              </div>
              <div>
                <label htmlFor="fats">Жиры</label>
                <input className={styles.dashboardInfoGoalsInput} type="text" name="fats" placeholder={"80г"}/>
              </div>
              <div>
                <label htmlFor="proteins">Белки</label>
                <input className={styles.dashboardInfoGoalsInput} type="text" name="proteins" placeholder={"120г"}/>
              </div>
              <div>
                <label htmlFor="carbs">Углеводы</label>
                <input className={styles.dashboardInfoGoalsInput} type="text" name="carbs" placeholder={"250г"}/>
              </div>
            </form>
            <Button type="submit" >
              Сохранить
            </Button>
          </div>
          <div className={cn(styles.dashboardInfoContainer)}>
            <h2>Моя история изменения веса</h2>
            <div>
              <p><span>Изначальный вес: </span><span>100кг</span></p>
              <p><span>Текущий вес: </span><span>70кг</span></p>
            </div>
            <Graphic/>
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
