import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// var circle = document.getElementById('circle');
// var btn = document.getElementById('btn');

window.onload = function () {
  document.querySelector('#li-about').addEventListener('click', function () {
    const aboutSection = document.querySelector('#about');
    aboutSection.scrollIntoView({behavior: 'smooth'});
  });
  document.querySelector('#li-works').addEventListener('click', function () {
    const aboutSection = document.querySelector('#works');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  });
  document.querySelector('#li-news').addEventListener('click', function () {
    const aboutSection = document.querySelector('#news');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  });
  document.querySelector('#li-contact').addEventListener('click', function () {
    const aboutSection = document.querySelector('#contact');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  });
  document.querySelector('#contact-button').addEventListener('click', function () {
    const userName = document.getElementById('userName').value;
    if (!userName) {
      const tableElem = document.getElementById("contact");
      const createElement = document.createElement("h1");
      createElement.innerText = "userName is null";
      tableElem.appendChild(createElement);
    }
  });
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <head>
      <link href="https://fonts.googleapis.com/earlyaccess/nicomoji.css" rel="stylesheet" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="pp.css" />
      <link href="https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css" rel="stylesheet" />
      <script src="./src/index.js"></script>
      <title>my-work</title>
    </head>
    <App/>
  </React.StrictMode>
);
reportWebVitals();
