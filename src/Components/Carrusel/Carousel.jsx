import React from "react";
import Slider from "react-slick";
import "./Carousel.css";

function Carousel() {
  var settings = {
    arrows: false,
    dots: true,
    dotsClass: "dots",
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnDotsHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true

        }
      }
    ]
  };


  return (
    <div className="">
      <Slider {...settings}>
        <div>
          <div className="image-container">
            <div className="image-overlay">
              <p className="image-text">Creaciones a medida</p>
            </div>
            <img
              src="img/costura1.png"
              alt="image2"
              className="img-servicios"
            ></img>
          </div>
        </div>
        <div>
          <div className="image-container">
            <div className="image-overlay">
              <p className="image-text">Confección de Ropa para Ocasiones Especiales</p>
            </div>
            <img
              src="img/costura2.png"
              alt="image2"
              className="img-servicios"
            ></img>
          </div>
        </div>
        <div>
          <div className="image-container">
            <div className="image-overlay">
              <p className="image-text">Reparación de Prendas</p>
            </div>
            <img
              src="img/costura3.png"
              alt="image2"
              className="img-servicios"
            ></img>
          </div>
        </div>
        <div>
          <div className="image-container">
            <div className="image-overlay">
              <p className="image-text">Confección de Ropa para Niños</p>
            </div>
            <img
              src="img/costura4.png"
              alt="image2"
              className="img-servicios"
            ></img>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
