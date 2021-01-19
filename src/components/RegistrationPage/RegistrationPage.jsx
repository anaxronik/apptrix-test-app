import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { registerUser } from '../../redux/actions'

import './RegistrationPage.scss'

export default function RegistrationPage() {
  const [state, setState] = useState({
    email: '',
    password: '',
    invitedBy: 'RU-637164',
    name: '',
    surname: '',
    country_key: 'RU',
  })

  const dispatch = useDispatch()

  const registerHandler = (event) => {
    event.preventDefault()
    dispatch(registerUser(state))
  }

  const inputChangeHandler = (event) => {
    setState({ ...state, [event.target.name]: event.target.value })
  }

  return (
    <div>
      <form>
        <div className="formGroup">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            onChange={inputChangeHandler}
            value={state.email}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="password">Пароль</label>
          <input
            type="password"
            name="password"
            onChange={inputChangeHandler}
            value={state.password}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="invitedBy">Инвайт код</label>
          <input
            type="text"
            name="invitedBy"
            onChange={inputChangeHandler}
            value={state.invitedBy}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="name">Имя</label>
          <input
            type="text"
            name="name"
            onChange={inputChangeHandler}
            value={state.name}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="invitedBy">Фамилия</label>
          <input
            type="text"
            name="surname"
            onChange={inputChangeHandler}
            value={state.surname}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="invitedBy">Код страны</label>
          <input
            type="text"
            name="country_key"
            onChange={inputChangeHandler}
            value={state.country_key}
          />
        </div>
        <button className="btn" onClick={registerHandler}>
          Зарегистрироваться
        </button>
      </form>
    </div>
  )
}
