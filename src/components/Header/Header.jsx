import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/signup">Registration</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
