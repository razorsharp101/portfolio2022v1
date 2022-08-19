import React from "react";
import "./Projects.scss";

const Projects = () => {
  return (
    <section className="projects">
      <div className="projects__title">
        <img src="/assets/bubble1.png"></img>
        <h2>Projects!</h2>
      </div>
      <div className="projects__items">
        {[1, 2, 3, 4, 5, 6, 7].map((items, index) => (
          <div className="card" key={index}>
            <h5>TITLE SOMETHING</h5>
            <img src="/assets/sample.jpg"></img>
            <div className="card__details">
              <strong>Made of</strong>
              <span>React</span>
              <span>Html</span>
              <span>CSs</span>
              <span>Something</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
