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
                <span className="blue">T</span>
                <span className="orange">echs</span>
                <span className="blue">PAR</span>
              </h4>
              <p>
                TechsPAR delivers innovative software, digital marketing, and mobile
                app solutions to grow your business.
              </p>
            </div>

            {/* Company */}
            <div className="col-6 col-md-3 col-lg-3">
              <h5>Serivces</h5>
              {/* <div className="d-flex justify-content-center mb-3"> */}
              <div className="d-flex justify-content-center justify-content-md-start mb-3">
                <div className="loader " style={{ width: '80px' }}></div>
              </div>
              <ul className="list-unstyled">
                <li className="pt-2"><a href="#">Software Solutions</a></li>
                <li className="pt-2"><a href="#">Digital Marketing</a></li>
                <li className="pt-2"><a href="#">Mobile App Development</a></li>
                <li className="pt-2"><a href="#">Brading & Printing</a></li>
                <li className="pt-2"><a href="#">Event Services</a></li>
                <li className="pt-2"><a href="#">E-Commerce Development</a></li>
              </ul>
            </div>

            {/* Services */}
            <div className="col-6 col-md-3 col-lg-3">
              <h5>Useful Links</h5>
              {/* <div className="d-flex justify-content-center mb-3"> */}
              <div className="d-flex justify-content-center justify-content-md-start mb-3">
                <div className="loader " style={{ width: '80px' }}></div>
              </div>
              <ul className="list-unstyled">
                <li className="pt-2"><a href="#">Home</a></li>
                <li className="pt-2"><a href="#">About Us</a></li>
                <li className="pt-2"><a href="#">Our Credentials</a></li>
                <li className="pt-2"><a href="#">Our Gallery</a></li>
                <li className="pt-2"><a href="#">Join Us</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="col-12 col-md-6 col-lg-3">
              <h5>Get In Touch</h5>
              {/* <div className="d-flex justify-content-center mb-3"> */}
              <div className="d-flex justify-content-center justify-content-md-start mb-3">
                <div className="loader " style={{ width: '100px' }}></div>
              </div>
              <p>Work : 506 Suneja Tower - I, District Center Janakpuri, New Delhi- 110058, INDIA.</p>
              <p>Reg. Add. : First Floor, GH-8/638, Paschim Vihar, New Delhi, West Delhi, Delhi, 110087</p>
              <p>info@techspar.in</p>
              <p>+91 - 98714 55398</p>
            </div>

          </div>

          {/* Bottom */}
          <div className="row">
            <div className="footer-bottom text-center">
              <h6 className="my-copyright">
                © 2026
                <span className="blue">T</span>
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