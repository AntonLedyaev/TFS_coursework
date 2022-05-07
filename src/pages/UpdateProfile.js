import React, { useRef, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import Button from "../decorators/Button";

export default function UpdateProfile() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { currentUser, updatePassword, updateEmail } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useNavigate()

  function handleSubmit(e) {

    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    const promises = []
    setLoading(true)
    setError("")
    try {
      if ((passwordRef.current.value.length > 5)
        && (passwordRef.current.value.length===passwordConfirmRef.current.value.length) ){
        updatePassword(passwordRef.current.value)
        history("/")
      }
    } catch ( e ){
      console.log(e)
      setError("Failed to update account")
    } finally {
      setLoading(false)
    }


    // Promise.all(promises)
    //   .then(() => {
    //     history("/")
    //   })
    //   .catch((e) => {
    //     setError("Failed to update account")
    //   })
    //   .finally(() => {
    //     setLoading(false)
    //   })
  }

  return (
    <div className={'login-page'}>
      <div className={'login-page__description'}>
        <h1><span>My</span>FoodTracker</h1>
        <p>Добро пожаловать! MyFoodTracker - приложение для подсчета калорий и отслеживания вашей диеты.</p>
      </div>
      <div className={'login-container'}>
        <div className={'login-container__form-container'}>
          <h2>Обновить профиль</h2>
          {error && <alert>{error}</alert>}
          <form className={'login-container__form'} onSubmit={handleSubmit}>
            <div id="email">
              <h3>Электронная почта</h3>
              <input
                type="email"
                ref={emailRef}
                required
                defaultValue={currentUser.email}
              />
            </div>
            <div id="password">
              <h3>Пароль</h3>
              <input
                type="password"
                ref={passwordRef}
                placeholder="Оставьте поле пустым, чтобы не изменять"
              />
            </div>
            <div id="password-confirm">
              <h3>Подтверждение пароля</h3>
              <input
                type="password"
                ref={passwordConfirmRef}
                placeholder="Оставьте поле пустым, чтобы не изменять"
              />
            </div>
            <Button disabled={loading} type="submit">
              Обновить
            </Button>
          </form>
          <div className={"login-container__form__links"}>
            <Link className = {"link"} to="/">Отменить</Link>
          </div>
        </div>
      </div>

    </div>
  )
}
