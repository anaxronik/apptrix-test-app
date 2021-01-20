import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../redux/actions'

export default function LoginPage() {
  const [state, setState] = useState({
    username: '',
    password: '',
  })
  const dispatch = useDispatch()

  const inputChangeHandler = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    })
  }

  const loginHandler = (event) => {
    event.preventDefault()
    dispatch(loginUser(state))
  }

  return (
    <div>
      <form>
        <div className="formGroup">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="username"
            value={state.username}
            onChange={inputChangeHandler}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="password">Пароль</label>
          <input
            type="password"
            name="password"
            value={state.password}
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
