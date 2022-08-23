import React from "react";
import "./Contact.scss";
import {
  FaFacebook,
  FaTwitter,
  FaDiscord,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { MdSend } from "react-icons/md";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const Contact = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.175,
        duration: 1,
      },
    },
  };

  const items = {
    hidden: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1 },
  };

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
    <section className="contact" id="contact">
      <div className="contact__upper">
        <motion.div
          whileInView={{
            x: [-50, 0],
          }}
          viewport={{ once: true }}
          className="contact__left"
        >
          <div className="contact__left--content">
            <img src="/assets/contact.png"></img>
            <p className="saving">need saving?</p>
            <h3>Contact ME</h3>
            <p className="help">for help!!</p>
          </div>
        </motion.div>
        <motion.form
          whileInView={{
            x: [50, 0],
          }}
          viewport={{ once: true }}
          className="contact__form"
          onSubmit={sendEmail}
        >
          <input
            type="text"
            name="from_name"
            placeholder="your name"
            required
          />
          <input
            required
            type="email"
            name="from_email"
            placeholder="your email"
          />
          <input
            required
            type="text"
            name="from_subject"
            placeholder="subject"
          />
          <textarea
            required
            name="message"
            placeholder="your message"
            rows="5"
          />
          <button type="submit">
            Send <MdSend />
          </button>
        </motion.form>
      </div>
      <div className="contact__down">
        <motion.div
          className="contact__down--icons"
          variants={container}
          initial="hidden"
          whileInView="show"
        >
          <motion.a variants={items}>
            <FaFacebook />
          </motion.a>
          <motion.a variants={items}>
            <FaTwitter />
          </motion.a>
          <motion.a variants={items}>
            <FaDiscord />
          </motion.a>
          <motion.a variants={items}>
            <FaGithub />
          </motion.a>
          <motion.a variants={items}>
            <FaLinkedin />
          </motion.a>
        </motion.div>
        <motion.a whileInView={{ y: [40, 0] }} className="cv">DOWNLOAD CV</motion.a>
      </div>
    </section>
  );
};

export default Contact;
