import React from 'react';
import './header.css';
import { NavLink } from 'react-router-dom';

//add menu bar to header
//Link to "Home" - links to / and shows the search form and results page
//Link to "History" - links to /history and loads the history page
//Link to "Help" - links to /help and loads the about us page

function Header() {
  return (
    <header className="header">
      <h2>RESTy</h2>
    </header>
  )
}

export default Header;