import React, { useRef, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
// import { Link, useNavigate } from "react-router-dom"
import { Link, useNavigate } from "react-router-dom"
import Button from "../decorators/Button";

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }
    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      // history.push("/")
      history('/')
    } catch (e) {
      // console.log(e)
      setError("Failed to create an account")
    }

    setLoading(false)
  }

  return (
    <div className={'login-page'}>
      <div className={'login-page__description'}>
        <h1><span>My</span>FoodTracker</h1>
        <p>Добро пожаловать! MyFoodTracker - приложение для подсчета калорий и отслеживания вашей диеты.</p>
      </div>
      <div className={'login-container'}>
        <div className={'login-container__form-container'}>
          {error && <alert>{error}</alert>}
          <h2>Зарегистрироваться</h2>
          <form className={'login-container__form'} onSubmit={handleSubmit}>
            <div id="email">
              <h2>Электронная почта</h2>
              <input type="email" ref={emailRef} required />
            </div>
            <div id="password">
              <h2>Пароль</h2>
              <input type="password" ref={passwordRef} required />
            </div>
            <div id="password-confirm">
              <h2>Подтвердите пароль</h2>
              <input type="password" ref={passwordConfirmRef} required />
            </div>
            <Button disabled={loading} type="submit">
              Зарегистрироваться
            </Button>
          </form>
          <div className={"login-container__form__links"}>
            Уже есть аккаунт? <Link className = {"link"} to="/login">Войти</Link>
          </div>
        </div>
      </div>

    </div>
  )
}
