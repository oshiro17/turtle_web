import React from "react";
import turtle from '../download.svg';


const about_data = {
    name: "Xxxx Ashel",
    addres: "2th Floore XXXXX building so hight tokyo newyork okinawa XXXX",
    tel: "080-0000-0000",
    url: "XXXXXXXXXXXXXXXXXXXXXXXXX",
    mail:"YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY",
    message :"大森さんののを自分のこれを時々\
    お病気と恐れ入りて私腹にお随行からさようにそのうちご病気へしたたて、\
    始めてとうとう発展に知れたいからいけでしょものに込み入っずた。\
    けれどもだからご弊害をしのはあいにく不愉快と犯さですて、\
    この手数へもならだからという奥底へ解せば行くべくなけれ。"

}

function About() {
    return (
        <div id="about" className="wrapper">
            <h2>About</h2>
            <ul>
                <li className="about-li">{about_data.name}</li>
                <li className="about-li">
                    <p>{about_data.addres}</p>
                    <p>{about_data.tel}</p>
                    <p>{about_data.url}</p>
                    <p>{aboit_data.mail}</p>
                </li>
                <li className="about-li">{about_data.message}</li>
            </ul>
        </div>

    )

}
export default About;