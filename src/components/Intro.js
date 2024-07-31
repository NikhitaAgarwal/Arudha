import React from "react";
import "../CSS/Intro.css";
import SEO from "../images/SEO.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";
import img5 from "../images/img5.png";
import img6 from "../images/img6.png";

const Intro = () => {
  const data = [
    {
      id: "1",
      image: SEO,
      alt: "SEO Optimization",
      title: "SEO Optimization",
      desc: "Achieve top rankings on Google with our tailored SEO services. We ensure your website is optimized to attract more traffic and convert visitors into customers.",
    },
    {
      id: "2",
      image: img2,
      alt: "Content Creation",
      title: "Content Creation",
      desc: "Engaging and relevant content is key to capturing your audience's attention. Our content specialists craft compelling stories that resonate with your target market",
    },
    {
      id: "3",
      image: img3,
      alt: "Social Media Management",
      title: "Social Media Management",
      desc: "Build a strong social media presence with our expert management services. We create, curate, and manage your social media content to enhance engagement and brand loyalty.",
    },
    {
      id: "4",
      image: img4,
      title: "PPC Advertising",
      alt: "PPC Advertising",
      desc: "Maximize your ROI with our targeted pay-per-click campaigns. We design and implement effective PPC strategies to drive immediate results",
    },
    {
      id: "5",
      image: img5,
      title: "Website Design & Maintenance",
      alt: "Website Design & Maintenance",
      desc: "Your website is your digital storefront. Our team designs visually appealing and user-friendly websites that reflect your brand's identity and keep your audience engaged.",
    },
    {
      id: "6",
      title: "Photography And Videography",
      desc: "We create high-quality photography and videography that tell your brand's story and engage your audience.",
      image: img6,
      alt: "Photography",
    },
  ];

  return (
    <div className="container">
      <div className="row mt-5 mb-5">
        <div className="col-md-12 text-center">
          <h1 className="fadeInText">Welcome to</h1>
          <h1 className="title-center">
            <span>Arudha</span>
          </h1>
          <p className="text-center">Digital Marketing Agency</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <h1 class="text-center-right">Why Arudha</h1>
          <div class="styled-paragraph">
            <p>
              <strong>Tailored Strategies:</strong> We customize our services to
              meet your unique business needs and goals.
              <br />
              <strong>Comprehensive Services:</strong>
              From SEO and content creation to social media management and PPC
              advertising, we offer a full range of services.
              <br />
              <strong>Innovative Solutions:</strong> We use the latest tools and
              strategies to ensure your brand stands out.
              <br />
              <strong>Quality Visuals:</strong> Our professional photography and
              videography services create engaging content that tells your
              brand's story.
              <br />
              <strong>Client-Centric:</strong> Your success is our priority. We
              work closely with you to ensure your vision and objectives are
              met.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <h1 class="text-center-right">Our Services</h1>
        <div className="row">
          {data.map((card, index) => (
            <div
              key={card.id}
              className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="card mb-4" style={{ width: "18rem" }}>
                <img className="card-img-top" src={card.image} alt={card.alt} />
                <div className="card-body">
                  <h6 className="card-title">{card.title}</h6>
                  <p className="card-text">{card.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Intro;
