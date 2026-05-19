import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer text-light pt-5">
        <div className="container">
          {/* <div className="row mb-5"> */}
          <div className="row mb-5 text-center text-md-start">
            {/* Logo + About */}
            <div className="col-12 col-md-6 col-lg-3">
              <h4 className="my-logo">
                <span className="blue">t</span>
                <span className="orange">echs</span>
                <span className="blue">PAR</span>
              </h4>
              <p>
                techsPAR delivers innovative software, digital marketing, and
                mobile app solutions to grow your business.
              </p>
            </div>

            {/* Company */}
            <div className="col-6 col-md-3 col-lg-3">
              <h5>Services</h5>

              {/* <div className="d-flex justify-content-center mb-3"> */}
              <div className="d-flex justify-content-center justify-content-md-start mb-3">
                <div className="loader " style={{ width: "80px" }}></div>
              </div>
              <ul className="list-unstyled">
                <li className="pt-2">
                  <a href="/services/web-solutions">Software Solutions</a>
                </li>
                <li className="pt-2">
                  <a href="/services/digital-solutions">Digital Marketing</a>
                </li>
                <li className="pt-2">
                  <a href="/services/mobile-app">Mobile App Development</a>
                </li>
                <li className="pt-2">
                  <a href="/services/branding">Brading & Printing</a>
                </li>
                <li className="pt-2">
                  <a href="/services/events">Event Services</a>
                </li>
                <li className="pt-2">
                  <a href="/services/ecommerce">E-Commerce Development</a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="col-6 col-md-3 col-lg-3">
              <h5>Useful Links</h5>
              {/* <div className="d-flex justify-content-center mb-3"> */}
              <div className="d-flex justify-content-center justify-content-md-start mb-3">
                <div className="loader " style={{ width: "80px" }}></div>
              </div>
              <ul className="list-unstyled">
                <li className="pt-2">
                  <a href="/">Home</a>
                </li>
                <li className="pt-2">
                  <a href="/about">About Us</a>
                </li>
                <li className="pt-2">
                  <a href="/projects">Our Projects</a>
                </li>
                <li className="pt-2">
                  <a href="/our-credentials">Our Credentials</a>
                </li>
                <li className="pt-2">
                  <a href="/our-gallery">Our Gallery</a>
                </li>
                <li className="pt-2">
                  <a href="/join-us">Join Us</a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            {/* <div className="col-12 col-md-6 col-lg-3">
              <h5>Get In Touch</h5>

              <div className="d-flex justify-content-center justify-content-md-start mb-3">
                <div className="loader " style={{ width: "100px" }}></div>
              </div>
              <p>
                Work : 506 Suneja Tower - I, District Center Janakpuri, New
                Delhi- 110058, INDIA.
              </p>
              <p>
                Reg. Add. : First Floor, GH-8/638, Paschim Vihar, New Delhi,
                West Delhi, Delhi, 110087
              </p>
              <p>parihar.ms@techspar.in</p>
              <p>+91 - 98714 55398, 8076631662, 9811955077</p>
            </div> */}

            <div className="col-12 col-md-6 col-lg-3">
              <h5>Get In Touch</h5>

              <div className="d-flex justify-content-center justify-content-md-start mb-3">
                <div className="loader" style={{ width: "100px" }}></div>
              </div>

              <p className="d-flex align-items-start gap-2">
                <i className="bi bi-geo-alt-fill"></i>
                <span>
                  Work : 506 Suneja Tower - I, District Center Janakpuri, New
                  Delhi - 110058, INDIA.
                </span>
              </p>

              <p className="d-flex align-items-start gap-2">
                <i className="bi bi-building-fill"></i>
                <span>
                  Reg. Add. : First Floor, GH-8/638, Paschim Vihar, New Delhi,
                  West Delhi, Delhi, 110087
                </span>
              </p>

              <p className="d-flex align-items-start gap-2">
                <i className="bi bi-envelope-fill mt-1"></i>

                <span>
                  <a
                    href="mailto:parihar.ms@techspar.in"
                    className="text-decoration-none text-reset"
                  >
                    parihar.ms@techspar.in
                  </a>
                </span>
              </p>

              <p className="d-flex align-items-start gap-2">
                <i className="bi bi-telephone-fill mt-1"></i>

                <span className="d-flex flex-column">
                  <a
                    href="tel:+919871455398"
                    className="text-decoration-none text-reset"
                  >
                    +91 - 98714 55398
                  </a>

                  <a
                    href="tel:+918076631662"
                    className="text-decoration-none text-reset"
                  >
                    +91 - 8076631662
                  </a>

                  <a
                    href="tel:+919811955077"
                    className="text-decoration-none text-reset"
                  >
                    +91 - 9811955077
                  </a>
                </span>
              </p>
            </div>
          </div>

          {/* Bottom */}
          <div className="row">
            <div className="footer-bottom text-center">
              <h6 className="my-copyright">
                © 2026
                <span className="blue"> t</span>
                <span className="orange">echs</span>
                <span className="blue">PAR</span>. All Rights Reserved.
              </h6>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
