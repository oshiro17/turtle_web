import React from "react";
import turtle from '../download.svg';

function Works() {
  return (
    <div id="works" className="wrapper">
      <h2>Works</h2>
      <ul>
        <li>
          <img src={turtle} className="img-item" />
        </li>
        <li>
          <img src={turtle} className="img-item" />
        </li>
        <li>
          <img src={turtle} className="img-item" />
        </li>
        <li>
          <img src={turtle} className="img-item" />
        </li>
        <li>
          <img src={turtle} className="img-item" />
        </li>
        <li>
          <img src={turtle} className="img-item" />
        </li>

      </ul>
    </div>
  )
}
export default Works;