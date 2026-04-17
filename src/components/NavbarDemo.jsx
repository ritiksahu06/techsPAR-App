
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import "./NavbarDemo.css";

const Navbar = () => {
  const navRef = useRef(null);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        navRef.current.classList.add("scrolled");
      } else {
        navRef.current.classList.remove("scrolled");
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (



    <nav className="navbar navbar-expand-lg my-navbar" ref={navRef}>
    <div className="container-fluid">
  
      {/* LEFT: Logo */}
      <Link to="/" className="navbar-brand my-logo">
        <img src="/images/techspar_logo.png" alt="logo" />
      </Link>
  
      {/* TOGGLER (Mobile) */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
  
      {/* NAV CONTENT */}
      <div className="collapse navbar-collapse" id="navbarNav">
  
        {/* CENTER: Menu */}
        <ul className="navbar-nav mx-auto my-nav-links">
          <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
          <li className="nav-item"><Link to="/about" className="nav-link">About Us</Link></li>
  
          <li className="nav-item my-dropdown">
            <span className="nav-link">
              Our Services <span className="arrow"></span>
            </span>
  
            <ul className="my-dropdown-menu">
              <li><Link to="/web">Web Solutions</Link></li>
              <li><Link to="/digital">Digital Solutions</Link></li>
              <li><Link to="/app">Mobile App Development</Link></li>
              <li><Link to="/branding">Branding & Printing</Link></li>
              <li><Link to="/events">Event Services</Link></li>
              <li><Link to="/ecommerce">E-commerce Development</Link></li>
            </ul>
          </li>
  
          <li className="nav-item"><Link to="/projects" className="nav-link">Our Projects</Link></li>
          <li className="nav-item"><Link to="/gallery" className="nav-link">Gallery</Link></li>
        </ul>
  
        {/* RIGHT: Contact Button */}
        <div className="d-flex">
          <Link to="/contact" className="btn contact-btn">Contact Us</Link>
        </div>
  
      </div>
    </div>
  </nav>

  );
};

export default Navbar;



