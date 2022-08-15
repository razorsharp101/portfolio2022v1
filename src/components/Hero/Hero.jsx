import React from "react";
import "./Hero.css";

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
        <h3>✪THE ADVENTURES OF✪</h3>
        <h1>ADAM PACIFICO</h1>
        <span>Full-time Developer and Part-time human being</span>
      </div>
      <nav className="hero-nav">
        <ul>
          <li>
            <a>ABout</a>
          </li>
          <li>
            <a>projects</a>
          </li>
          <li>
            <a>testimonials</a>
          </li>
          <li>
            <a>contract</a>
          </li>
        </ul>
      </nav>
      <div className="hero-content">
        <div className="hero-content__left">
          <div>
            <span style={{ color: "#FBFF00" }}>"</span>
            <span>EVERYTHING SEEMS IMPOSSIBLE UNTIL IT IS DONE.</span>
            <span style={{ color: "#FBFF00" }}>"</span>
          </div>
        </div>
        <div className="hero-content__right">
          <span className="text-left">...There are 10 types of people</span>
          <img src="/assets/super.gif" className="hero-content__img"></img>
          <span className="text-right">
            ... those who knows binary and those who don’t.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
