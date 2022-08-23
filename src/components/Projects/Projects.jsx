import React from "react";
import "./Projects.scss";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <motion.div
        whileInView={{
          scale: [0, 1],
        }}
        transition={{ type: "spring", bounce: 1 }}
        viewport={{ once: true }}
        className="projects__title"
      >
        <img src="/assets/bubble1.png"></img>
        <h2>Projects!</h2>
      </motion.div>
      <p className="projects__subtitle">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        rerum aut voluptatum nesciunt in deserunt?
      </p>
      <div className="projects__items">
        {[1, 2, 3, 4, 5, 6, 7].map((items, index) => (
          <motion.div
            whileInView={{
              opacity: [0, 1],
            }}
            className="card"
            key={index}
          >
            <h5>TITLE SOMETHING</h5>
            <img src="/assets/sample.jpg"></img>
            <div className="card__details">
              <strong>Made of</strong>
              <span>React</span>
              <span>Html</span>
              <span>CSs</span>
              <span>Something</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
