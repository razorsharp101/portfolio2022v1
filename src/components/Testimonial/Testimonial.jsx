import React, { useEffect, useState } from "react";
import "./Testimonial.scss";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";

const Testimonial = () => {
  const settings = {
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

  const [testmonial, setTestimonial] = useState([]);
  // const [hoveer, setHoveer] = useState("");
  useEffect(() => {
    const query = '*[_type == "testimonials"]';

    client.fetch(query).then((data) => setTestimonial(data));
  }, []);

  return (
    <section className="testimonial" id="testimonial">
      <div>
        <h2 className="testimonial__title">
          What people thinks about my
          <motion.strong
            whileInView={{ opacity: [0, 1] }}
            transition={{
              delay: 0.75,
              duration: 1,
            }}
          >
            superpowers!
          </motion.strong>
        </h2>
      </div>
      <div className="testimonial__item">
        <Slider {...settings}>
          {testmonial.map((item, index) => (
            <div className="testimonial__item--card" key={index}>
              {console.log(item)}
              <p className="testimonial__item--quote">
                {item.message
                  ? item.message
                  : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas libero illum corrupti vel!"}
              </p>
              <img
                className="testimonial__item--img"
                src={urlFor(item.imgurl)}
              ></img>
              <a className="testimonial__item--name" href={item.socmedlink} target="_blank">{item.name}</a>
              <p className="testimonial__item--super">"{item.superhero}"</p>
              <p className="testimonial__item--company">({item.company})</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
