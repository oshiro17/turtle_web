import React from "react";

const animals = ["inu", "neko", "kuzira"];
const News = () => {
  const animal_list = animals.map((animal) => <dt>{animal}</dt>)
  return (
    <div id="news" className="wrapper">
      <h2>News</h2>
      <dl>
        <div className="first-div">
        {animal_list}
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

    )
}
export default News;