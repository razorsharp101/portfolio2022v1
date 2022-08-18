import React from "react";
import "./About.scss";

const About = () => {
  return (
    <section className="about">
      <p className="about__main-text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
        laudantium voluptas maxime. Ipsum reprehenderit nihil eum tempore. Omnis
        excepturi soluta qui quam, aperiam est alias?
      </p>
      <h3 className="about__main-choice">My preferred weapons of choice</h3>
      <div className="about__main-imgs">
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
      <div className="about__main-cert">
        <a href="#">
          <img className="cert-1" src="/assets/cert1.png"></img>
        </a>
        <a href="#">
          <img className="cert-2" src="/assets/cert2.png"></img>
        </a>
      </div>
    </section>
  );
};

export default About;
