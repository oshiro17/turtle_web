import './App.css';
import turtle from './download.svg';
import Header from './components/head';
import About from './components/about';

function App() {
  return (
    <body>
      <Header />
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
        <div id="news" className="wrapper">
          <h2>News</h2>
          <dl>
            <div className="first-div">
              <dt>10XX年</dt>
              <dd>雑誌から賞をもらいました。</dd>
            </div>
            <div>
              <dt>10XX年</dt>
              <dd>何かありました</dd>
            </div>
            <div>
              <dt>20JJ年</dt>
              <dd>ああああああ</dd>
            </div>
            <div>
              <dt>20JJ年</dt>
              <dd>賞受賞</dd>
            </div>
            <div>
              <dt>20JJ年</dt>
              <dd>お知らせ！！！わーい</dd>
            </div>
            <div>
              <dt>20JJ年</dt>
              <dd>っっっっっっっk</dd>
            </div>
            <div>
              <dt>20JJ年</dt>
              <dd>察しsdsdsdsdし</dd>
            </div>
          </dl>
        </div>
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
      <footer id="footer">
        <p>&copy; 2020 My Work</p>
      </footer>
    </body>
  );
}

export default App;
