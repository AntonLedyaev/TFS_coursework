import React, { useRef, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import '../styles/Login.css'
import Button from "../decorators/Button";
export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  let navigate = useNavigate()

  async function handleSubmit(e) {

    e.preventDefault()
    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      setLoading(false)
      navigate('/');
      // await new Promise(resolve => setTimeout(resolve, 3000))

    } catch (e) {
      // console.log(e)
      setError("Failed to log in")
      setLoading(false)
    } finally {
    }
  }

  return (
    <div className={'login-page'}>
      <div className={'login-page__description'}>
        <h1><span>My</span>FoodTracker</h1>
        <p>Добро пожаловать! MyFoodTracker - приложение для подсчета калорий и отслеживания вашей диеты.</p>
      </div>
      <div className={'login-container'}>
        <div className={'login-container__form-container'}>
          <h2>Войти</h2>
          {error && <alert>{error}</alert>}
          <form className={'login-container__form'} onSubmit={handleSubmit}>
            <div id="email">
              <h3>Электронная почта</h3>
              <input type="email" ref={emailRef} required placeholder={"E-mail"}/>
            </div>
            <div id="password">
              <h3>Пароль</h3>
              <input type="password" ref={passwordRef} required placeholder={"Пароль"}/>
            </div>
            <Button disabled={loading} type="submit">
              Войти
            </Button>
          </form>
          <div className={"login-container__form__links"}>
            <Link className = {"link"} to="/forgot-password">Забыли пароль?</Link>
          </div>
          <div className={"login-container__form__links"}>
            Нет аккаунта? <Link className = {"link"} to="/signup">Зарегистрироваться</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
