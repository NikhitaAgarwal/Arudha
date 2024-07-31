import React from "react";
import "../CSS/Services.css";
import service1 from "../images/service1.png";
import service2 from "../images/service2.png";
import service3 from "../images/service3.png";
import service4 from "../images/service4.png";
import service5 from "../images/service5.png";
import service6 from "../images/service6.png";
import service7 from "../images/service7.png";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "SEO Optimization",
      description:
        "At Arudha, we specialize in helping businesses stand out in the digital world. Our expert team is dedicated to boosting your online presence through cutting-edge SEO strategies and comprehensive digital marketing solutions.",
      imgSrc: service1,
      altText: "SEO Optimization",
    },
    {
      id: 2,
      title: "Content Creation",
      description:
        "Our content creation team crafts engaging and high-quality content tailored to your audience. From blog posts to social media content, we ensure your brand message is effectively communicated.",
      imgSrc: service2,
      altText: "Content Creation",
    },
    {
      id: 3,
      title: "Social Media Management",
      description:
        "We manage your social media platforms to enhance your brand's online presence. Our strategies are designed to increase engagement and drive traffic to your website.",
      imgSrc: service3,
      altText: "Social Media Management",
    },
    {
      id: 4,
      title: "PPC Advertising",
      description:
        "Our pay-per-click advertising services aim to maximize your ROI. We create and manage targeted ad campaigns that reach the right audience at the right time.",
      imgSrc: service4,
      altText: "PPC Advertising",
    },
    {
      id: 5,
      title: "Website Design & Maintenance",
      description:
        "We design and maintain responsive, user-friendly websites that reflect your brand identity. Our team ensures your website remains updated and secure.",
      imgSrc: service5,
      altText: "Website Design & Maintenance",
    },
    {
      id: 6,
      title: "Photography",
      description:
        "Our professional photography services capture stunning visuals that tell your brand's story. We create high-quality images for use across your marketing materials.",
      imgSrc: service6,
      altText: "Photography",
    },
    {
      id: 7,
      title: "Videography",
      description:
        "We produce compelling videos that engage and inform your audience. From promotional videos to tutorials, we handle all aspects of video production.",
      imgSrc: service7,
      altText: "Videography",
    },

    // Add more service objects as needed
  ];

  return (
    <section className="container-fluid py-5">
      <div className="row">
        {services.map((service) => (
          <div className="col-md-12 mb-4" key={service.id}>
            <div className="card animated-card">
              <div className="row no-gutters">
                <div className="col-md-6 p-3">
                  <img
                    src={service.imgSrc}
                    alt={service.altText}
                    className="card-img-left img-fluid"
                  />
                </div>
                <div className="col-md-6 d-flex align-items-center">
                  <div className="card-body">
                    <h1 className="display-4">{service.title}</h1>
                    <p className="lead">{service.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
