import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import "../Style/footer.css";
import footerimage from "../asset/footer.png";
const Footer = () => {
  return (
    <footer className="footer">
      {/* Section: Links */}
      <section className="section-container">
        <div className="container text-center text-md-start mt-4">
          <div className="row mt-3">
            {/* Company Info */}
            <div className="col-md-6 mx-auto mb-2">
              <img src={footerimage} className="imges" alt="footericons" />

              <p className="lorem">
                Lorem ipsum dolor sit, amet consectetur <br/> adipisicing elit.
                Dolorum, eligendi, voluptatibus <br/> deleniti ipsum officiis alias ex
                impedit.
              </p>
            </div>

            {/* Products */}
            <div className="col-md-2 col-lg-2 col-xl-2   mt-4">
              <h6 className="text-uppercase fw-bold mb-4">Important Links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Contact Us
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Privacy Policy
                </a>
              </p>
            </div>

            {/* Useful Links */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-4">
              <p className="size-16">Terms & Conditions </p>
              <p className=" mb-4">Contact Support </p>
              <div className="d-flex">
                <a href="#" className="me-3 text-reset border-1px-solid">
                  <FaFacebookF />
                </a>
                <a href="#" className="me-3 text-reset border-1px-solid">
                  <FaTwitter />
                </a>

                <a href="#" className="me-3 text-reset border-1px-solid">
                  <FaLinkedin />
                </a>
                <a href="#" className="me-3 text-reset border-1px-solid">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
          
          <hr />
        {/* Copyright */}
        <div className="footer-center p-4">
        Copyright © 2025. All rights reserved.
         
        </div>
        </div>
      
      </section>
    </footer>
  );
};

export default Footer;
