import React from "react";
import "../CSS/Contact.css";
const Contact = () => {
  return (
    <div className="Registmain gradient">
      <div className="containerR">
        <div className="titleR">Contact Us</div>
        <div className="contentR">
          <form action="#">
            <div className="user-detailsR">
              <div className="input-boxR">
                <span className="detailsR">Full Name</span>
                <input
                  type="text"
                  placeholder="Enter your name"
                  required
                ></input>
              </div>
              <div className="input-boxR">
                <span className="detailsR">Username</span>
                <input
                  type="text"
                  placeholder="Enter your username"
                  required
                ></input>
              </div>
              <div className="input-boxR">
                <span className="detailsR">Email</span>
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                ></input>
              </div>
              <div className="input-boxR">
                <span className="detailsR">Phone Number</span>
                <input
                  type="text"
                  placeholder="Enter your number"
                  required
                ></input>
              </div>
              <div className="input-boxR">
                <span className="detailsR">Message</span>
                <textarea placeholder="Message" required></textarea>
              </div>
            </div>
            <div className="buttonR">
              <input type="submit" value="Contact Us"></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
