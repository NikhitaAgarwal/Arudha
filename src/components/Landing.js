import React from "react";
import "../CSS/Landing.css";
import bg from "../images/bg.jpg";
import bg2 from "../images/bg3.jpg";

import bg1 from "../images/bg2.webp";

const Landing = () => {
  return (
    <div className="container-fluid" style={{ padding: "0" }}>
      <div
        id="carouselExampleDark"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-target="#carouselExampleDark"
            data-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-target="#carouselExampleDark"
            data-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-target="#carouselExampleDark"
            data-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-interval="10000">
            <img src={bg} className="d-block w-100" alt="First slide" />
            <div className="carousel-caption d-none d-md-block custom-caption">
              <div className="text-box">
                <h3>Arudha</h3>
                <h5>
                  Revolutionizing Your Digital Presence : We are dedicated to
                  transforming your digital footprint into a powerful asset.
                </h5>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-interval="2000">
            <img src={bg1} className="d-block w-100" alt="Second slide" />
            <div className="carousel-caption d-none d-md-block custom-caption">
              <div className="text-box">
                <h3>Strategic Digital Marketing</h3>
                <h5>
                  From comprehensive SEO strategies to targeted PPC campaigns,
                  we offer a full spectrum of digital marketing services
                  designed to boost your online visibility and engagement.
                </h5>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src={bg2} className="d-block w-100" alt="Third slide" />
            <div className="carousel-caption d-none d-md-block custom-caption">
              <div className="text-box">
                <h3>Tailored Solutions:</h3>
                <h5>
                  Understanding that every business is unique, we customize our
                  approaches to align with your specific objectives and
                  challenges, ensuring that our solutions are as effective as
                  possible.
                </h5>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-target="#carouselExampleDark"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-target="#carouselExampleDark"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Landing;
