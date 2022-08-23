import React from "react";
import "./Testimonial.scss";
import Slider from "react-slick";
import { motion } from "framer-motion";

const Testimonial = () => {
  const settings = {
    // className: "center",
    // centerMode: true,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: false,
    nextArrow: false,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    lazyLoaded: true,
  };
  return (
    <section className="testimonial" id="testimonial">
      <div>
        <h2 className="testimonial__title">
          What people thinks <br /> about my
          <motion.strong whileInView={{ opacity: [0, 1] }}
          transition={{
            delay: 0.75,
            duration: 1,
          }}>
            superpowers!
          </motion.strong>
        </h2>
      </div>
      <div className="testimonial__item">
        <Slider {...settings}>
          {[1, 2, 3].map((item, index) => (
            <div className="testimonial__item--card" key={index}>
              {/* {item} */}
              <p className="testimonial__item--quote">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente consectetur repudiandae eveniet laudantium magni natus!
              </p>
              <img
                className="testimonial__item--img"
                src={`/assets/testi-bg-${index + 1}.jpg`}
              ></img>
              <h2 className="testimonial__item--name">
                SOMETHING B. SOmething
              </h2>
              <p className="testimonial__item--super">"SomethingMAN"</p>
              <p className="testimonial__item--company">
                (Something at something company)
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
