import React from 'react'
import './App.css';
import logo from './amazon-logo.png';
import searchIcon from './search-icon.png';

export default function Header() {
  return (
    <div>
        <header className="header">
        <div className="nav">
          <img src={logo} alt="Amazon Logo" className="logo" />
          <div className="search-bar">
            <input type="text" className="search-input" placeholder="Search" />
            <img src={searchIcon} alt="Search Icon" className="search-icon" />
          </div>
          <div className="nav-sections">
            <span className="nav-link">Login</span>
            <span className="nav-link">Returns &amp; Orders</span>
            <span className="nav-link">Amazon Prime</span>
            <span className="nav-link">Shopping Basket</span>
          </div>
        </div>
      </header>
        </div>
  )
}
