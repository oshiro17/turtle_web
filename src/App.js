import './App.css';
import turtle from './download.svg';

function App() {
  return (
    <body>
      <header>
        <h1 class="head">
          <a>My Work</a>
        </h1>
        <nav>
          <ul class="nav-list">
            <li class="nav-list-item" id="li-about">about</li>
            <li class="nav-list-item" id="li-works">Works</li>
            <li class="nav-list-item" id="li-news">News</li>
            <li class="nav-list-item" id="li-contact">contact</li>
          </ul>
        </nav>
      </header>
      <main class="main">
        <div id="mainvisual">
          <img src={turtle} class="mainvisual" />
        </div>
        <div class="animetion_head">
          <div class="aiueo">aiueo</div>
          <div class="infometion">
            <div id="circle">
              <div class="info one">
                <h1>safe</h1>
              </div>
              <div class="info two">
                <h1>cheap</h1>
              </div>
              <div class="info three">
                <h1>servis</h1>
              </div>
              <div class="info four">
                <h1>you can</h1>
              </div>
            </div>
          </div>
        </div>
        <div id="about" class="wrapper">
          <h2>About</h2>
          <ul>
            <li class = "about-li">Xxxx Ashely</li>
            <li class = "about-li">
              <p>2th Floore XXXXX building so hight tokyo newyork okinawa XXXX</p>
              <p>tel : 080-0000-0000</p>
              <p>url : XXXXXXXXXXXXXXXXXXXXXXXX</p>
              <p>main : YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY</p>
            </li>
            <li class = "about-li">
              大森さんののを自分のこれを時々お病気と恐れ入りて私腹にお随行からさように
              そのうちご病気へしたたて、
              始めてとうとう発展に知れたいからいけでしょものに込み入っずた。
              けれどもだからご弊害をしのはあいにく不愉快と犯さですて、
              この手数へもならだからという奥底へ解せば行くべくなけれ。
            </li>
          </ul>
        </div>
        <div id="works" class="wrapper">
          <h2>Works</h2>
          <ul>
            <li>
              <img src={turtle} class="img-item" />
            </li>
            <li>
              <img src={turtle} class="img-item" />
            </li>
            <li>
              <img src={turtle} class="img-item" />
            </li>
            <li>
              <img src={turtle} class="img-item" />
            </li>
            <li>
              <img src={turtle} class="img-item" />
            </li>
            <li>
              <img src={turtle} class="img-item" />
            </li>

          </ul>
        </div>
        <div id="news" class="wrapper">
          <h2>News</h2>
          <dl>
            <div class="first-div">
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
        <div id="contact" class="wrapper">
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
