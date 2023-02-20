import React from 'react';
import turtle from '../download.svg';
import About from './about';
import Works from './works';
import News from './news';


function Main(){
  return (
    <main className="main">
    <div id="mainvisual">
      <img src={turtle} className="mainvisual" />
    </div>
    <div className="animetion_head">
      <div className="infometion">
        <div id="circle">
          <div className="info one">
            <h1>safe</h1>
          </div>
          <div className="info two">
            <h1>cheap</h1>
          </div>
          <div className="info three">
            <h1>servis</h1>
          </div>
          <div className="info four">
            <h1>you can</h1>
          </div>
        </div>
      </div>
    </div>
   <About/>
   <Works/>
   <News/>
    <div id="contact" className="wrapper">
      <h2>Contact</h2>
      <form action="">
        <dl>
          <div>
            <label for="userName">text</label>
            <input type="text" id="userName" name="name" required minlength="4" placeholder="山田　太郎" maxlength="8"
              size="10" />
          </div>
          <div>
            <label for="email">email</label>
            <input type="email" id="email" name="email" required minlength="4" placeholder="nononono@nononono.com"
              axlength="8" size="10" />
          </div>
          <div>
            <label for="message">message</label>
            <textarea id="message" name="" required minlength="4" size="10"
              placeholder="hogehogeplaceholder"></textarea>
          </div>
        </dl>
        <button id="contact-button">送信</button>
      </form>
    </div>
  </main>
    )

}
export default Main;
