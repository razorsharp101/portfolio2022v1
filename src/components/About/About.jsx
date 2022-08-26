import React, { useEffect, useState } from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";

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

  const [about, setAbout] = useState([]);

  useEffect(() => {
    const query = '*[_type == "about"]';

    client.fetch(query).then((data) => setAbout(data));
  }, []);

  return (
    <>
      {about.map((item, index) => (
        <section className="about" id="about" key={index}>
          <motion.p
            whileInView={{ opacity: [0, 1], y: [40, 0] }}
            viewport={{ once: true }}
            className="about__main-text"
          >
            {item.about_message}
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
            {/* {console.log(about)} */}
            {item.technology.map((tech, i) => (
              <motion.div variants={items} className="img-text" key={tech.name}>
                <img src={urlFor(tech.icon)} alt={{ index }} />
                <span>{tech.name}</span>
                {/* {console.log(tech)} */}
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
              href="https://www.freecodecamp.org/certification/adampacifico/front-end-development-libraries"
              target="_blank"
            >
              <img className="cert-1" src="/assets/cert1.png"></img>
            </motion.a>
            <motion.a
              whileInView={{
                opacity: [0, 1],
                x: [40, 0],
              }}
              viewport={{ once: true }}
              href="https://www.freecodecamp.org/certification/adampacifico/responsive-web-design"
              target="_blank"
            >
              <img className="cert-2" src="/assets/cert2.png"></img>
            </motion.a>
          </div>
        </section>
      ))}
    </>
  );
};

export default About;
