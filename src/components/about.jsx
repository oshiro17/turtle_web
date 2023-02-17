import React from "react";
import turtle from '../download.svg';

function About() {
    return (
        <><div id="about" className="wrapper">
            <h2>About</h2>
            <ul>
                <li className="about-li">Xxxx Ashely</li>
                <li className="about-li">
                    <p>2th Floore XXXXX building so hight tokyo newyork okinawa XXXX</p>
                    <p>tel : 080-0000-0000</p>
                    <p>url : XXXXXXXXXXXXXXXXXXXXXXXX</p>
                    <p>main : YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY</p>
                </li>
                <li className="about-li">
                    大森さんののを自分のこれを時々お病気と恐れ入りて私腹にお随行からさように
                    そのうちご病気へしたたて、
                    始めてとうとう発展に知れたいからいけでしょものに込み入っずた。
                    けれどもだからご弊害をしのはあいにく不愉快と犯さですて、
                    この手数へもならだからという奥底へ解せば行くべくなけれ。
                </li>
            </ul>
        </div><div id="works" className="wrapper">
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
            </div><div id="news" className="wrapper">
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
            </div></>
    )

}
export default About;