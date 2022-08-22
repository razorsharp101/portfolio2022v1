import React from "react";
import "./Testimonial.scss";
import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };
  return (
    <section className="testimonial">
      <div>
        <h2 className="testimonial__title">
          What people thinks <br /> about my <strong>superpowers!</strong>
        </h2>
      </div>
      <div className="testimonial__item">
        <Slider {...settings}>
          {[1, 2, 3].map((item, index) => (
            <div className="testimonial__item--card" key={index}>
              <p className="testimonial__item--quote">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente consectetur repudiandae eveniet laudantium magni natus!
              </p>
              <img
                className="testimonial__item--img"
                src={`/assets/testi-bg-${index + 1}.jpg`}
              ></img>
              <h2 className="testimonial__item--name">SOMETHING B. SOmething</h2>
              <p className="testimonial__item--super">"SomethingMAN"</p>
              <p className="testimonial__item--company">(Something at something company)</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
