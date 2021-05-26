import React from 'react';
import './header.css';


// add navigation bar to header
// Link to "Home" - links to / and shows the search form and results page
// Link to "History" - links to /history and loads the history page
// Link to "Help" - links to /help and loads the about us page

function Header() {
  return (
    <header className="App-header">
      <nav className="App-navi">
        <a href="/home/">Home</a> |
        <a href="/history/">History</a> |
        <a href="/help/">Help</a> |
      </nav>
      <h3>This is a RESTy App</h3>
    </header>
  )
}

export default Header;