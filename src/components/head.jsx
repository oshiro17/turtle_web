import React from 'react';

function Header() {
  return (
    <header>
      <h1 className="head">
        <a>My Work</a>
      </h1>
      <nav>
        <ul className="nav-list">
          <li className="nav-list-item" id="li-about">about</li>
          <li className="nav-list-item" id="li-works">Works</li>
          <li className="nav-list-item" id="li-news">News</li>
          <li className="nav-list-item" id="li-contact">contact</li>
        </ul>
      </nav>
    </header>
  )
}
export default Header;