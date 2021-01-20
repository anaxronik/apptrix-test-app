import React from 'react'
import { Link } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { loginOut } from '../../redux/actions'

export default function Header({ isAuth }) {
  const dispatch = useDispatch()

  return (
    <div className="header">
      <div className="container">
        <nav>
          {isAuth ? (
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <button
                  className="btn"
                  onClick={(event) => {
                    dispatch(loginOut())
                  }}
                >
                  Logout
                </button>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <Link to="/signup">Registration</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </div>
  )
}
