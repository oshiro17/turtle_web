import React from 'react';
import turtle from '../download.svg';
import About from './about';
import Contact from './contact';
import Works from './works';
import News from './news';


const Main = () => {
  return (
    <main className="main">
    <div id="mainvisual">
      <img src={turtle} className="mainvisual" alt="説明的なテキスト"/>
    </div>
    {/* <div className="animetion_head">
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
    </div>*/}
   <About/>
   <Works/>
   <News/>
   <Contact/>
  </main>
    )

}
export default Main;
