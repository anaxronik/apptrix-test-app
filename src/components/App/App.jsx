import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.scss'

import Header from '../Header/Header'
import LoginPage from '../LoginPage/LoginPage'
import MainPage from '../MainPage/MainPage'
import RegistrationPage from '../RegistrationPage/RegistrationPage'

export default function App() {
  return (
    <Router>
      <div>
        <Header />

        <div className="container">
          <Switch>
            <Route path="/signup">
              <RegistrationPage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/">
              <MainPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}
