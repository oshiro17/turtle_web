import React from "react";
import turtle from '../download.svg';

const images = [turtle, turtle, turtle, turtle, turtle, turtle]
const image = images.map((image) => 
<li>
  <img src={image} alt="" className="img-item" />
</li>)
const Works = () => {
  return (
  <div id="works" className="wrapper">
    <h2>Works</h2>
    <ul>
      {image}
    </ul>
  </div>
  )
}
  export default Works;