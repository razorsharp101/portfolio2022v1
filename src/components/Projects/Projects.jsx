import React, { useEffect, useState } from "react";
import "./Projects.scss";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const query = '*[_type == "projects"] | order(priority asc) ';

    client.fetch(query).then((data) => setProjects(data));
  }, []);
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
        These are the projects I have created and participated in throughout my
        adventure.<strong style={{ fontSize: "30px" }}> The manifestation of my quirks!</strong>
      </p>
      <div className="projects__items">
        {projects.map((items, index) => (
          <motion.div
            whileInView={{
              opacity: [0, 1],
            }}
            transition={{
              delay: 0.4,
            }}
            className="card"
            key={index}
          >
            <h5>{items.project_name}</h5>
            {/* {console.log(items)} */}
            {/* <img src={urlFor(items.project_img)}></img> */}
            <div
              className="card__image"
              style={{ backgroundImage: `url(${urlFor(items.project_img)})` }}
            ></div>
            <div className="card__details">
              <strong>Made of</strong>
              {/* <span>React</span>
              <span>Html</span>
              <span>CSs</span>
              <span>Something</span> */}
              {items.tech.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>
            {/* {console.log(items)} */}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
