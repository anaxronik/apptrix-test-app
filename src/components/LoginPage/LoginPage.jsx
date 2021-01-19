import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setLoginPassword, setLoginUsername } from '../../redux/actions'
import { loginUser } from '../../redux/actions'

export default function LoginPage() {
  const dispatch = useDispatch()
  const loginData = useSelector((state) => state.auth.loginData)

  const inputChangeHandler = (event) => {
    if (event.target.id === 'email') {
      dispatch(setLoginUsername(event.target.value))
    }
    if (event.target.id === 'password') {
      dispatch(setLoginPassword(event.target.value))
    }
  }

  const loginHandler = (event) => {
    event.preventDefault()
    dispatch(loginUser(loginData))
  }

  return (
    <div>
      <form>
        <div className="formGroup">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={loginData.username}
            onChange={inputChangeHandler}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="password">Пароль</label>
          <input
            type="password"
            id="password"
            value={loginData.password}
            onChange={inputChangeHandler}
          />
        </div>

        <button className="btn" onClick={loginHandler}>
          Войти
        </button>
      </form>
    </div>
  )
}
