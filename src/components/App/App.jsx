import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import './App.scss'

import Header from '../Header/Header'
import LoginPage from '../LoginPage/LoginPage'
import MainPage from '../MainPage/MainPage'
import RegistrationPage from '../RegistrationPage/RegistrationPage'
import { useDispatch, useSelector } from 'react-redux'
import { setClientId } from '../../redux/actions'

export default function App() {
  const isAuth = useSelector((state) => !!state.auth.client_id)
  const dispatch = useDispatch()

  useEffect(() => {
    if (localStorage.getItem('access_token')) {
      dispatch(setClientId(localStorage.getItem('client_id')))
    }
  }, [isAuth, dispatch])

  return (
    <Router>
      <div>
        <Header isAuth={isAuth} />

        <div className="container">
          {isAuth ? (
            <Switch>
              <Route path="/" component={MainPage} />
              <Redirect to="/" />
            </Switch>
          ) : (
            <Switch>
              <Route path="/signup" component={RegistrationPage} />
              <Route path="/login" component={LoginPage} exact />
              <Redirect to="/login" />
            </Switch>
          )}
        </div>
      </div>
    </Router>
  )
}
