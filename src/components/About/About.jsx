import React from "react";
import "./About.scss";
import { motion } from "framer-motion";

const About = () => {
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
  return (
    <section className="about" id="about">
      <motion.p
        whileInView={{ opacity: [0, 1], y: [40, 0] }}
        viewport={{ once: true }}
        className="about__main-text"
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
        laudantium voluptas maxime. Ipsum reprehenderit nihil eum tempore. Omnis
        excepturi soluta qui quam, aperiam est alias?
      </motion.p>
      <motion.h3
        whileInView={{ opacity: [0, 1], y: [40, 0] }}
        className="about__main-choice"
      >
        My preferred weapons of choice
      </motion.h3>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        className="about__main-imgs"
        viewport={{ once: true }}
      >
        {[
          "/assets/1.png",
          "/assets/2.png",
          "/assets/3.png",
          "/assets/4.png",
          "/assets/5.png",
          "/assets/6.png",
          "/assets/7.png",
          "/assets/8.png",
        ].map((item, index) => (
          <motion.div variants={items} className="img-text">
            <img src={item} alt={{ index }} />
            <span>python</span>
          </motion.div>
        ))}
      </motion.div>
      <div className="about__main-cert">
        <motion.a
          whileInView={{
            opacity: [0, 1],
            x: [-40, 0],
          }}
          viewport={{ once: true }}
          href="#"
        >
          <img className="cert-1" src="/assets/cert1.png"></img>
        </motion.a>
        <motion.a
          whileInView={{
            opacity: [0, 1],
            x: [40, 0],
          }}
          viewport={{ once: true }}
          href="#"
        >
          <img className="cert-2" src="/assets/cert2.png"></img>
        </motion.a>
      </div>
    </section>
  );
};

export default About;
