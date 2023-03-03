import React from "react";

const Contact = () => {
  return (
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
  )
}
export default Contact;