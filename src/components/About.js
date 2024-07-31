import React from "react";
import future from "../images/future.png";
import vision from "../images/Vision.png";

const About = () => {
  return (
    <section className="container-fluid py-5">
      <div className="row no-gutters">
        {/* Text Column */}
        <div className="col-md-6 d-flex align-items-center">
          <div className="p-4">
            <h1 className="display-4">Elevate Your Brand</h1>
            <p className="lead">
              At Arudha, we specialize in helping businesses stand out in the
              digital world. Our expert team is dedicated to boosting your
              online presence through cutting-edge SEO strategies and
              comprehensive digital marketing solutions.
            </p>
          </div>
        </div>

        {/* Image Column */}
        <div className="col-md-6">
          <img src={vision} alt="Example" className="img-fluid" />
        </div>
      </div>
      <div className="row no-gutters">
        {/* Text Column */}

        <div className="col-md-6">
          <img src={future} alt="Example" className="img-fluid" />
        </div>
        <div className="col-md-6 d-flex align-items-center">
          <div className="p-4">
            <h1 className="display-4">
              Leading the Future of Digital Marketing{" "}
            </h1>
            <p className="lead">
              Arudha aims to lead the digital marketing industry by evolving
              strategies and embracing emerging technologies. Our future goals
              include expanding our services with advanced tools and analytics,
              enhancing content creation, and improving client engagement. We
              are committed to staying ahead of industry trends, ensuring our
              clients benefit from the latest innovations and achieve long-term
              success in the dynamic digital landscape
            </p>
          </div>
        </div>

        {/* Image Column */}
      </div>
    </section>
  );
};

export default About;
