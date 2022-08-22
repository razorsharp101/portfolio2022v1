import React from "react";
import "./Contact.scss";

import emailjs from "emailjs-com";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_asprdho",
        "template_dxro7g7",
        e.target,
        "user_5nGXzmFcNT2D1HhfEKSGU"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <section className="contact">
      <div className="contact__left">
        <div className="contact__left--content">
          <img src="/assets/contact.png"></img>
          <p className="saving">need saving?</p>
          <h3>Contact ME</h3>
          <p className="help">for help!!</p>
        </div>
      </div>
      <form className="contact__form" onSubmit={sendEmail}>
        <input type="text" name="from_name" placeholder="your name" required />
        <input
          required
          type="email"
          name="from_email"
          placeholder="your email"
        />
        <input required type="text" name="from_subject" placeholder="subject" />
        <textarea required name="message" placeholder="your message" rows="5" />
        <input type="submit" value="Send" />
      </form>
    </section>
  );
};

export default Contact;
