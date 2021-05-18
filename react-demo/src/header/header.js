import React from 'react';
import './header.css';
import { NavLink } from 'react-router-dom';

//add menu bar to header
//Link to "Home" - links to / and shows the search form and results page
//Link to "History" - links to /history and loads the history page
//Link to "Help" - links to /help and loads the about us page

function Header() {
  return (
    <header className="App-header">
      <h1>RESTy</h1>
      <nav>
        <NavLink activeClassName="selected" to="/">Home</NavLink>
        <NavLink activeClassName="selected" to="/history">History</NavLink>
        <NavLink activeClassName="selected" to="/help">Help</NavLink>
      </nav>
    </header>
  )
}

export default Header;