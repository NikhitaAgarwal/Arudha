import React from "react";

const Footer = () => {
  return (
    <footer
      className="text-center"
      style={{
        background:
          "linear-gradient(90deg, rgba(139, 139, 193, 1) 26%, rgba(77, 168, 217, 1) 48%, rgba(0, 212, 255, 1) 75%)",
        marginTop: "20px",
      }}
    >
      <div className="container p-4 pb-0">
        {/* Section: Social media */}
        <section className="mb-4">
          {/* Instagram */}
          <a
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#ac2bac" }} // Custom background color for Instagram
            href="https://www.instagram.com/arudha_digital?igsh=djRrZjQzamlkb2Nr&utm_source=qr"
            role="button"
          >
            <i className="fab fa-instagram"></i>
          </a>

          {/* Email */}
          <a
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#007bff" }} // Custom background color for Email
            href="mailto:arudha2024@gmail.com"
            role="button"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </section>
        {/* Section: Social media */}
      </div>

      {/* Copyright */}
      <div
        className="text-center p-3"
        style={{ backgroundColor: "#e9ecef" }} // Custom background color for Copyright section
      >
        © 2024 Copyright:
        <a className="text-body" href="">
          Arudha
        </a>
      </div>
      {/* Copyright */}
    </footer>
  );
};

export default Footer;
