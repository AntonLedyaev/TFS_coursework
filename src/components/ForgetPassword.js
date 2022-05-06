import React, { useRef, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom"

export default function ForgetPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password")
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
          <h2>Сбросить пароль</h2>
          {error && <alert>{error}</alert>}
          {message && <alert>{message}</alert>}
          <form className={'login-container__form'} onSubmit={handleSubmit}>
            <div id="email">
              <input type="email" ref={emailRef} required placeholder={"Электронная почта"} />
            </div>
            <button disabled={loading} type="submit">
              Сбросить пароль
            </button>
          </form>
          <div className={"login-container__form__links"}>
            Уже есть аккаунт? <Link className = {"link"} to="/login">Войти</Link>
          </div>
          <div className={"login-container__form__links"}>
            Нет аккаунта? <Link className = {"link"} to="/signup">Зарегистроваться</Link>
          </div>
        </div>
      </div>

    </div>
  )
}
