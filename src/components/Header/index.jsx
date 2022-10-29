import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className="header-background" data-cy="header-background">
      <div className="container">
        <p className="header-title" data-cy="header-title">
          TODO LIST APP
        </p>
      </div>
    </div>
  )
}

export default Header
