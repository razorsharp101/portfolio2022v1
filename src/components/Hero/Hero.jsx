import React from "react";
import "./Hero.css";

import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="hero-main">
      <div className="hero-content__mobile">
        <div>
          <span style={{ color: "#FBFF00" }}>"</span>
          <span>EVERYTHING SEEMS IMPOSSIBLE UNTIL IT IS DONE.</span>
          <span style={{ color: "#FBFF00" }}>"</span>
        </div>
      </div>
      <div className="hero-upper">
        <motion.h3
          whileInView={{ opacity: [0, 1], y: [-70, 0] }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            type: "spring",
            stiffness: 100,
          }}
        >
          ✪THE ADVENTURES OF✪
        </motion.h3>
        <motion.h1
          whileInView={{ opacity: [0, 1], x: [40, 0] }}
          transition={{
            duration: 1,
            delay: 1,
            ease: "easeInOut",
          }}
        >
          ADAM PACIFICO
        </motion.h1>
        <motion.span
          whileInView={{ opacity: [0, 1], y: [40, 1] }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
        >
          Full-time Developer and Part-time human being
        </motion.span>
      </div>
      <nav className="hero-nav">
        <ul>
          <motion.li
            whileInView={{ opacity: [0, 1], scale: [3, 1] }}
            transition={{
              duration: 1,
              delay: 1,
            }}
            viewport={{ once: true }}
          >
            <a href="#about">ABout</a>
          </motion.li>
          <motion.li
            whileInView={{ opacity: [0, 1], scale: [3, 1] }}
            transition={{
              duration: 1,
              delay: 1.5,
            }}
            viewport={{ once: true }}
          >
            <a href="#projects">projects</a>
          </motion.li>
          <motion.li
            whileInView={{ opacity: [0, 1], scale: [3, 1] }}
            transition={{
              duration: 1,
              delay: 2,
            }}
            viewport={{ once: true }}
          >
            <a href="#testimonial">testimonials</a>
          </motion.li>
          <motion.li
            whileInView={{ opacity: [0, 1], scale: [3, 1] }}
            transition={{
              duration: 1,
              delay: 2.5,
            }}
            viewport={{ once: true }}
          >
            <a href="#contact">contact</a>
          </motion.li>
        </ul>
      </nav>
      <div className="hero-content">
        <div className="hero-content__left">
          <motion.div
            whileInView={{ opacity: [0, 1], scale: [0, 1] }}
            transition={{
              delay: 2.5,
              duration: 1,
            }}
            viewport={{ once: true }}
          >
            <span style={{ color: "#FBFF00" }}>"</span>
            <span>EVERYTHING SEEMS IMPOSSIBLE UNTIL IT IS DONE.</span>
            <span style={{ color: "#FBFF00" }}>"</span>
          </motion.div>
        </div>
        <div className="hero-content__right">
          <motion.span
            whileInView={{ opacity: [0, 1] }}
            transition={{
              delay: 3.25,
              duration: 1,
            }}
            viewport={{ once: true }}
            className="text-left"
          >
            ...There are 10 types of people
          </motion.span>
          <motion.img
            whileInView={{ opacity: [0, 1] }}
            transition={{
              delay: 3,
              duration: 1,
            }}
            viewport={{ once: true }}
            src="/assets/super.gif"
            className="hero-content__img"
          ></motion.img>
          <motion.span
            whileInView={{ opacity: [0, 1] }}
            transition={{
              delay: 3.25,
              duration: 1,
            }}
            viewport={{ once: true }}
            className="text-right"
          >
            ... those who knows binary and those who don’t.
          </motion.span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
