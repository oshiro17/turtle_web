import React from "react";

const infos = [{ date: 2020, title: "went to picnic" }, { date: 2021, title: "wake up" }];
const News = () => {
  return (
    <div id="news" className="wrapper">
      <h2>News</h2>
      <dl>
        {infos.map((info, index) => (
          <div className={index === 0 && "first-div"}>
            <dt>{info.date}</dt>
            <dd>{info.title}</dd>
          </div>))
        }
      </dl>
    </div >
  )
}
export default News;