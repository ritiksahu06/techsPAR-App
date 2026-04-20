// import React, { useState, useRef, useEffect } from "react";
// import { Link } from "react-router-dom";  // ✅ removed unused useNavigate
// import "./Navbar.css";

// const Navbar = () => {
//   const [openDropdown, setOpenDropdown] = useState(false);
//   const navRef = useRef(null);
//   // ✅ removed unused show state

//   useEffect(() => {
//     const handleScroll = () => {
//       if (navRef.current) {
//         navRef.current.classList.toggle("scrolled", window.scrollY > 50);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // ✅ close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (!e.target.closest(".my-dropdown")) {
//         setOpenDropdown(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // ✅ close dropdown + mobile menu on link click
//   const handleLinkClick = () => {
//     setOpenDropdown(false);
//     const navCollapse = document.getElementById("navbarNav");
//     if (navCollapse?.classList.contains("show")) {
//       navCollapse.classList.remove("show");
//     }
//   };

//   return (
//     <nav className="navbar navbar-expand-lg my-navbar" ref={navRef}>
//       <div className="container-fluid px-3">

//         {/* Logo */}
//         <Link to="/" className="navbar-brand my-logo">
//           <img src="/images/techspar_logo.png" alt="logo" />
//         </Link>

//         {/* Bootstrap Toggler */}
//         <button
//           className="navbar-toggler me-2"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Menu */}
//         <div className="collapse navbar-collapse" id="navbarNav">

//           <ul className="navbar-nav mx-auto my-nav-links">

//             <li className="nav-item">
//               <Link to="/" className="nav-link" onClick={handleLinkClick}>Home</Link>
//             </li>

//             <li className="nav-item">
//               <Link to="/about" className="nav-link" onClick={handleLinkClick}>About Us</Link>
//             </li>

//             {/* Dropdown */}
//             <li className="nav-item my-dropdown">
//               <span
//                 className={`nav-link ${openDropdown ? "active" : ""}`}
//                 onClick={() => setOpenDropdown(prev => !prev)}
//               >
//                 Our Services <span className="arrow"></span>
//               </span>

//               <ul className={`my-dropdown-menu ${openDropdown ? "show" : ""}`}>
//                 <li><Link to="/services/web-solutions" onClick={handleLinkClick}>Web Solutions</Link></li>
//                 <li><Link to="/services/digital-solutions" onClick={handleLinkClick}>Digital Solutions</Link></li>
//                 <li><Link to="/services/mobile-app" onClick={handleLinkClick}>Mobile App Development</Link></li>
//                 <li><Link to="/services/branding" onClick={handleLinkClick}>Branding & Printing</Link></li>
//                 <li><Link to="/services/events" onClick={handleLinkClick}>Event Services</Link></li>
//                 <li><Link to="/services/ecommerce" onClick={handleLinkClick}>E-commerce Development</Link></li>
//               </ul>
//             </li>

//             <li className="nav-item">
//               <Link to="/projects" className="nav-link" onClick={handleLinkClick}>Our Projects</Link>
//             </li>

//             <li className="nav-item">
//               <Link to="/our-credentials" className="nav-link" onClick={handleLinkClick}>Our Credentials</Link>
//             </li>

//             <li className="nav-item">
//               <Link to="/our-gallery" className="nav-link" onClick={handleLinkClick}>Our Gallery</Link>
//             </li>

//             <li className="nav-item">
//               <Link to="/join-us" className="nav-link" onClick={handleLinkClick}>Join Us</Link>
//             </li>

//           </ul>

//           {/* Contact */}
//           <div className="my-contact-wrap">
//             <Link to="/contact" className="contact-btn" onClick={handleLinkClick}>Contact Us</Link>
//           </div>

//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


//    testing
//  this is working code ==============================================================================================


import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  let [openDropdown, setOpenDropdown] = useState(false);
  let navRef = useRef(null);
  let [show, setShow] = useState(false)

  let navigate = useNavigate()

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        if (window.scrollY > 50) {
          navRef.current.classList.add("scrolled");
        } else {
          navRef.current.classList.remove("scrolled");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg my-navbar" ref={navRef}>
      <div className="container-fluid">

        {/* Logo */}
        <Link to="/" className="navbar-brand my-logo ">
          <img src="/images/techspar_logo.png"  alt="logo" />
        </Link>

        {/* Toggle */}
        <button
          className="navbar-toggler me-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">

          {/* Center Menu */}
          <ul className="navbar-nav mx-auto my-nav-links ">

            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>

            <li className="nav-item">
              <Link to="/about" className="nav-link">About Us</Link>
            </li>

            {/* Dropdown */}
            <li className="nav-item my-dropdown">
              {/* <span
                className="nav-link"
                onClick={() => setOpenDropdown(prev => !prev)}
              >
                Our Services <span className="arrow"></span>
              </span> */}


                  <span
                    className={`nav-link  ${openDropdown ? "active" : ""}`}
                    onClick={() => setOpenDropdown(prev => !prev)}
                    style={{fontSize: '14px'}}
                  >
                    Our Services <span className="arrow"></span>
                  </span>
                  

              <ul className={`my-dropdown-menu ${openDropdown ? "show" : ""}`}>
                <li><Link to="/services/web-solutions">Web Solutions</Link></li>
                <li><Link to="/services/digital-solutions">Digital Solutions</Link></li>
                <li><Link to="/services/mobile-app">Mobile App Development</Link></li>
                <li><Link to="/services/branding">Branding & Printing</Link></li>
                <li><Link to="/services/events">Event Services</Link></li>
                <li><Link to="/services/ecommerce">E-commerce Development</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link to="/projects" className="nav-link">Our Projects</Link>
            </li>

            <li className="nav-item">
              <Link to="/our-credentials" className="nav-link">Our Credentials</Link>
            </li>

            <li className="nav-item">
              <Link to="/our-gallery" className="nav-link">Our Gallery</Link>
            </li>

            <li className="nav-item">
              <Link to="/join-us" className="nav-link">Join Us</Link>
            </li>

          </ul>

          {/* Right Contact */}
          <div className="d-lg-flex mt-3 mt-lg-2 ">
            <Link to="/contact" className="contact-btn rounded-5 me-4">Contact Us</Link>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;

//   End of working code ===================================================================================================

// ----------------------------------------  some responsive issue


// import React, { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";

// const Navbar = () => {
//   const navRef = useRef(null);
//   const [menuOpen, setMenuOpen] = useState(false);

//   // Scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         navRef.current.classList.add("scrolled");
//       } else {
//         navRef.current.classList.remove("scrolled");
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav className="my-navbar" ref={navRef}>

//       {/* Logo */}
//       <Link to="/" className="my-logo">
//         <img src="/images/techspar_logo.png" alt="logo" />
//       </Link>

//       {/* Hamburger */}
//       <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
//         {menuOpen ? "✖" : "☰"}
//       </div>

//       {/* Nav Links */}
//       <ul className={`my-nav-links ${menuOpen ? "active" : ""}`}>
//         <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
//         <li><Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>

//         {/* Dropdown */}
//         <li className="my-dropdown">
//           <span className="nav-item">
//             Our Services <span className="arrow"></span>
//           </span>
//           <ul className="my-dropdown-menu">
//             <li><Link to="/web" onClick={() => setMenuOpen(false)}>Web Solutions</Link></li>
//             <li><Link to="/digital" onClick={() => setMenuOpen(false)}>Digital Solutions</Link></li>
//             <li><Link to="/app" onClick={() => setMenuOpen(false)}>Mobile App Development</Link></li>
//             <li><Link to="/branding" onClick={() => setMenuOpen(false)}>Branding & Printing</Link></li>
//             <li><Link to="/events" onClick={() => setMenuOpen(false)}>Event Services</Link></li>
//             <li><Link to="/ecommerce" onClick={() => setMenuOpen(false)}>E-commerce Development</Link></li>
//           </ul>
//         </li>

//         <li><Link to="/projects" onClick={() => setMenuOpen(false)}>Our Projects</Link></li>
//         <li><Link to="/credentials" onClick={() => setMenuOpen(false)}>Our Credentials</Link></li>
//         <li><Link to="/gallery" onClick={() => setMenuOpen(false)}>Our Gallery</Link></li>
//         <li><Link to="/careers" onClick={() => setMenuOpen(false)}>Careers</Link></li>
//       </ul>

//       {/* Contact Button */}
//       <Link to="/contact" className="contact-btn">Contact Us</Link>
//     </nav>
//   );
// };

// export default Navbar;


//    ---------------------------------  Bootstrap Version


// import React, { useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";

// const Navbar = () => {
//   const navRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         navRef.current.classList.add("scrolled");
//       } else {
//         navRef.current.classList.remove("scrolled");
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className="navbar navbar-expand-lg my-navbar"
//       ref={navRef}
//     >
//       <div className="container">

//         {/* Logo */}
//         <Link className="navbar-brand my-logo" to="/">
//           <img src="/images/techspar_logo.png" alt="logo" />
//         </Link>

//         {/* Toggle Button */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarContent"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Menu */}
//         <div className="collapse navbar-collapse" id="navbarContent">

//           <ul className="navbar-nav ms-auto my-nav-links">

//             <li className="nav-item">
//               <Link className="nav-link" to="/">Home</Link>
//             </li>

//             <li className="nav-item">
//               <Link className="nav-link" to="/about">About Us</Link>
//             </li>

//             {/* Dropdown */}
//             <li className="nav-item dropdown my-dropdown">
//               <span
//                 className="nav-link dropdown-toggle nav-item"
//                 role="button"
//                 data-bs-toggle="dropdown"
//               >
//                 Our Services <span className="arrow"></span>
//               </span>

//               <ul className="dropdown-menu my-dropdown-menu">
//                 <li><Link className="dropdown-item" to="/web">Web Solutions</Link></li>
//                 <li><Link className="dropdown-item" to="/digital">Digital Solutions</Link></li>
//                 <li><Link className="dropdown-item" to="/app">Mobile App Development</Link></li>
//                 <li><Link className="dropdown-item" to="/branding">Branding & Printing</Link></li>
//                 <li><Link className="dropdown-item" to="/events">Event Services</Link></li>
//                 <li><Link className="dropdown-item" to="/ecommerce">E-commerce Development</Link></li>
//               </ul>
//             </li>

//             <li className="nav-item">
//               <Link className="nav-link" to="/projects">Our Projects</Link>
//             </li>

//             <li className="nav-item">
//               <Link className="nav-link" to="/credentials">Our Credentials</Link>
//             </li>

//             <li className="nav-item">
//               <Link className="nav-link" to="/gallery">Our Gallery</Link>
//             </li>

//             <li className="nav-item">
//               <Link className="nav-link" to="/careers">Careers</Link>
//             </li>

//             {/* Contact Button */}
//             <li className="nav-item">
//               <Link to="/contact" className="contact-btn ms-3">
//                 Contact Us
//               </Link>
//             </li>

//           </ul>

//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



//                        Testing for the Responsiveness


// import React, { useEffect, useRef } from "react";
// import { Link } from "react-router-dom";

// import "./Navbar.css";

// const Navbar = () => {
//   const navRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         navRef.current.classList.add("scrolled");
//       } else {
//         navRef.current.classList.remove("scrolled");
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
   
//     <div className="">
//       <nav className="navbar navbar-expand-lg" ref={navRef}>
// <div className="container">
        

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNavAltMarkup"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

//         <ul className="navbar-nav  my-nav-links">

//         <li><Link to="/" className="my-logo">
//           <img src="/images/techspar_logo.png" alt="logo" />
//         </Link></li>

//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/about">About Us</Link></li>

//             {/* Dropdown */}
//             <li className="my-dropdown">
//               <span className="nav-item">
//                 Our Services <span className="arrow"></span>
//               </span>

//               <ul className="my-dropdown-menu">
//                 <li><Link to="/web">Web Solutions</Link></li>
//                 <li><Link to="/digital">Digital Solutions</Link></li>
//                 <li><Link to="/app">Mobile App Development</Link></li>
//                 <li><Link to="/branding">Branding & Printing</Link></li>
//                 <li><Link to="/events">Event Services</Link></li>
//                 <li><Link to="/ecommerce">E-commerce Development</Link></li>
//               </ul>
//             </li>

//             <li><Link to="/projects">Our Projects</Link></li>
//             <li><Link to="/our-credentials">Our Credentials</Link></li>
//             <li><Link to="/gallery">Our Gallery</Link></li>
//             <li><Link to="/careers">Careers</Link></li>
//             <li><Link to="/contact" className="">Contact Us</Link></li>
//           </ul>
//       </div>
//       </div>
//     </nav>
//     </div>

//   );
// };

// export default Navbar;











// import React, { useState, useRef, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";

// const Navbar = () => {
//   const [openDropdown, setOpenDropdown] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const navRef = useRef(null);
//   const dropdownRef = useRef(null);

//   // Scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       if (navRef.current) {
//         navRef.current.classList.toggle("scrolled", window.scrollY > 50);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setOpenDropdown(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const closeMobileMenu = () => {
//     setMobileMenuOpen(false);
//     setOpenDropdown(false);
//   };

//   return (
//     <nav className="my-navbar" ref={navRef}>
//       <div className="nav-container">

//         {/* Logo */}
//         <Link to="/" className="my-logo" onClick={closeMobileMenu}>
//           <img src="/images/techspar_logo.png" alt="TechSpar Logo" />
//         </Link>

//         {/* Hamburger */}
//         <button
//           className={`menu-toggle ${mobileMenuOpen ? "open" : ""}`}
//           onClick={() => setMobileMenuOpen(prev => !prev)}
//           aria-label="Toggle menu"
//         >
//           <span></span>
//           <span></span>
//           <span></span>
//         </button>

//         {/* Menu */}
//         <div className={`nav-menu ${mobileMenuOpen ? "active" : ""}`}>

//           <ul className="my-nav-links">
//             <li className="nav-item">
//               <Link to="/" className="nav-link" onClick={closeMobileMenu}>Home</Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/about" className="nav-link" onClick={closeMobileMenu}>About Us</Link>
//             </li>

//             {/* Dropdown */}
//             <li className="nav-item my-dropdown" ref={dropdownRef}>
//               <span
//                 className={`nav-link dropdown-trigger ${openDropdown ? "active" : ""}`}
//                 onClick={() => setOpenDropdown(prev => !prev)}
//               >
//                 Our Services
//                 <span className={`arrow ${openDropdown ? "up" : ""}`}></span>
//               </span>
//                <span
//   className={`nav-link dropdown-trigger ${openDropdown ? "active" : ""}`}
//   onClick={() => setOpenDropdown(prev => !prev)}
// >
//   Our Services <span className="arrow"></span>
// </span> 

//               <ul className={`my-dropdown-menu ${openDropdown ? "show" : ""}`}>
//                 <li><Link to="/services/web-solutions" onClick={closeMobileMenu}>Web Solutions</Link></li>
//                 <li><Link to="/services/digital-solutions" onClick={closeMobileMenu}>Digital Solutions</Link></li>
//                 <li><Link to="/services/mobile-app" onClick={closeMobileMenu}>Mobile App Development</Link></li>
//                 <li><Link to="/services/branding" onClick={closeMobileMenu}>Branding & Printing</Link></li>
//                 <li><Link to="/services/events" onClick={closeMobileMenu}>Event Services</Link></li>
//                 <li><Link to="/services/ecommerce" onClick={closeMobileMenu}>E-commerce Development</Link></li>
//               </ul>
//             </li>

//             <li className="nav-item">
//               <Link to="/projects" className="nav-link" onClick={closeMobileMenu}>Our Projects</Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/our-credentials" className="nav-link" onClick={closeMobileMenu}>Our Credentials</Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/our-gallery" className="nav-link" onClick={closeMobileMenu}>Our Gallery</Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/join-us" className="nav-link" onClick={closeMobileMenu}>Join Us</Link>
//             </li>
//           </ul>

//           {/* Contact Button */}
//           <div className="nav-contact">
//             <Link to="/contact" className="contact-btn" onClick={closeMobileMenu}>Contact Us</Link>
//           </div>

//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;