import React, { useEffect, useState } from "react";
import "./Projects.scss";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [hoveer, setHoveer] = useState("");
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
        adventure.
        <strong style={{ fontSize: "30px" }}>
          The manifestation of my quirks!
        </strong>
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
            <motion.div
              onMouseOver={(e) => {
                setHoveer(e.currentTarget.id);
              }}
              id={items.project_name}
              onHoverEnd={() => setHoveer(false)}
              className="card__image"
              style={{ backgroundImage: `url(${urlFor(items.project_img)})` }}
            >
              {hoveer == items.project_name ? (
                <div className="hoveer">
                  {items.message ? (
                    <p>
                      <strong>CONFIDENTIAL!</strong> <br></br>
                      {items.message}
                    </p>
                  ) : (
                    <>
                      <a target="_blank" href={items.demo_link}>
                        View Demo
                      </a>
                      <a target="_blank" href={items.github_link}>
                        Github Repo
                      </a>
                    </>
                  )}
                </div>
              ) : (
                ""
              )}
            </motion.div>
            {/* {hoveer ? alert(hoveer) : ""} */}

            <div className="card__details">
              <strong>Made of</strong>
              {items.tech.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
