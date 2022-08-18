import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-main">
      <p className="about-text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
        laudantium voluptas maxime. Ipsum reprehenderit nihil eum tempore. Omnis
        excepturi soluta qui quam, aperiam est alias?
      </p>
      <h3 className="about-choice">My preferred weapons of choice</h3>
      <div className="about-imgs">
        <div className="img-text">
          <img src="/assets/1.png" alt="" />
          <span>python</span>
        </div>
        <div className="img-text">
          <img src="/assets/2.png" alt="" />
          <span>python</span>
        </div>
        <div className="img-text">
          <img src="/assets/3.png" alt="" />
          <span>python</span>
        </div>
        <div className="img-text">
          <img src="/assets/4.png" alt="" />
          <span>python</span>
        </div>
        <div className="img-text">
          <img src="/assets/5.png" alt="" />
          <span>python</span>
        </div>
        <div className="img-text">
          <img src="/assets/6.png" alt="" />
          <span>python</span>
        </div>
        <div className="img-text">
          <img src="/assets/7.png" alt="" />
          <span>python</span>
        </div>
        <div className="img-text">
          <img src="/assets/8.png" alt="" />
          <span>python</span>
        </div>
      </div>
      <div className="about-cert">
        <div className="cert-1">1</div>
        <div className="cert-2">2</div>
      </div>
    </section>
  );
};

export default About;
