// import React from 'react';

// const ContentSection = () => {
//   return (
// <div className="about-content container-lg py-5 ">
//     <div className="row align-items-center">

//       {/* Image */}
//       <div className="col-12 col-lg-6 mb-4 mb-lg-0 text-center">
//         <img
//           src="/images/about-img.png"
//           className="img-fluid rounded about-img"
//           alt="About"
//         />
//       </div>

//       {/* Text */}
//       <div className="col-12 col-lg-6 ps-lg-5 text-center text-lg-start">

//         <h3 className="pink mb-2">About Us</h3>
//         <h2 className="fw-bold mb-3">Company Profile</h2>

//         <div className="loader mb-3 mx-lg-0 mx-auto"></div>

//         <p>
//         TechsPAR Solutions is a New Delhi–based company with a vision to build long-term relationships while delivering high-quality services. Founded in 2015 by experienced IT professionals with over two decades of expertise in the service industry, TechsPAR is committed to excellence and innovation.
//         </p>

//         <p>
//         At TechsPAR, we offer a wide range of services under one roof, including website designing, development and management, Search Engine Optimization (SEO), Social Media Optimization (SMO), online marketing, mobile app development, and e-commerce solutions.
//         </p>

//         <p>We believe in delivering on our promises and consistently pushing boundaries to achieve sustainable and measurable results. Our company operates on the core principle of building trust-based partnerships with our clients, working closely with them to create impactful solutions and achieve outstanding outcomes.</p>

//       </div>

//     </div>
//   </div>

//   );
// }

// export default ContentSection;

// // import React from 'react';

// // const ContentSection = () => {
// //   return (
// //     <div className="about-content container-lg py-5">
// //       <div className="row align-items-center">

// //         {/* Image */}
// //         <div
// //           className="col-12 col-lg-6 mb-4 mb-lg-0 text-center"
// //           data-aos="fade-right"
// //         >
// //           <img
// //             src="/images/about-img.png"
// //             className="img-fluid rounded about-img"
// //             alt="About"
// //           />
// //         </div>

// //         {/* Text */}
// //         <div
// //           className="col-12 col-lg-6 ps-lg-5 text-center text-lg-start"
// //           data-aos="fade-left"
// //         >

// //           <h3
// //             className="pink mb-2"
// //             data-aos="fade-up"
// //             data-aos-delay="100"
// //           >
// //             About Us
// //           </h3>

// //           <h2
// //             className="fw-bold mb-3"
// //             data-aos="fade-up"
// //             data-aos-delay="200"
// //           >
// //             Company Profile
// //           </h2>

// //           <div
// //             className="loader mb-3 mx-lg-0 mx-auto"
// //             data-aos="zoom-in"
// //             data-aos-delay="300"
// //           ></div>

// //           <p data-aos="fade-up" data-aos-delay="400">
// //             TechsPAR Solutions is a New Delhi–based company with a vision to build long-term relationships while delivering high-quality services. Founded in 2015 by experienced IT professionals with over two decades of expertise in the service industry, TechsPAR is committed to excellence and innovation.
// //           </p>

// //           <p data-aos="fade-up" data-aos-delay="500">
// //             At TechsPAR, we offer a wide range of services under one roof, including website designing, development and management, Search Engine Optimization (SEO), Social Media Optimization (SMO), online marketing, mobile app development, and e-commerce solutions.
// //           </p>

// //           <p data-aos="fade-up" data-aos-delay="600">
// //             We believe in delivering on our promises and consistently pushing boundaries to achieve sustainable and measurable results. Our company operates on the core principle of building trust-based partnerships with our clients, working closely with them to create impactful solutions and achieve outstanding outcomes.
// //           </p>

// //         </div>

// //       </div>
// //     </div>
// //   );
// // }

// // export default ContentSection;

// import React, { useEffect, useRef, useState } from "react";

// const ContentSection = () => {
//   const sectionRef = useRef(null);
//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setShow(true); // run only once
//         }
//       },
//       { threshold: 0.2 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div ref={sectionRef} className="about-content container-lg py-5">
//       <div className="row align-items-center">

//         {/* IMAGE */}
//         <div
//           className={`col-12 col-lg-6 mb-4 mb-lg-0 text-center fade-slide ${
//             show ? "show" : ""
//           }`}
//         >
//           <img
//             src="/images/about-img.png"
//             className="img-fluid rounded about-img"
//             alt="About"
//           />
//         </div>

//         {/* TEXT */}
//         <div
//           className={`col-12 col-lg-6 ps-lg-5 text-center  text-lg-start fade-slide ${
//             show ? "show" : ""
//           }`}
//         >
//           <h3 className="pink mb-2 animate-right delay-2">About Us</h3>
//           <h2 className="fw-bold mb-3  animate-left delay-2">Company Profile</h2>

//           <div className="loader mb-3 mx-lg-0 mx-auto "></div>

//           <div className="animate-up delay-2">
//           <p >
//             TechsPAR Solutions is a New Delhi–based company with a vision to
//             build long-term relationships while delivering high-quality services.
//           </p>

//           <p >
//             We offer website designing, development, SEO, SMO, digital marketing,
//             mobile apps, and e-commerce solutions.
//           </p>

//           <p >
//             We believe in delivering results and building strong partnerships
//             with our clients.
//           </p>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default ContentSection;

//                 Animation add to this

// import React from "react";

// const ContentSection = () => {
//   return (
//     <div className="about-content container-lg py-5">
//       <div className="row align-items-center">

//         {/* IMAGE */}
//         <div className="col-12 col-lg-6 mb-4 mb-lg-0 text-center animate-left">
//           <img
//             src="/images/about-img.webp"
//             className="img-fluid rounded about-img"
//             alt="About"
//           />
//         </div>

//         {/* TEXT */}
//         <div className="col-12 col-lg-6 ps-lg-5 text-center text-lg-start">

//           <h3 className=" mb-2 animate-right delay-1">About Us</h3>
//           <h2 className=" mb-3 animate-right delay-2">Company Profile</h2>

//           <div className="loader mb-3 mx-lg-0 mx-auto"></div>

//           <p className="animate-up delay-2">
//             techsPAR Solutions is a New Delhi–based company with a vision to
//             build long-term relationships while delivering high-quality services.
//           </p>

//           <p className="animate-up delay-3">
//             We offer website designing, development, SEO, SMO, digital marketing,
//             mobile apps, and e-commerce solutions.
//           </p>

//           <p className="animate-up delay-4">
//             We believe in delivering results and building strong partnerships
//             with our clients.
//           </p>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContentSection;

const ContentSection = ({ isAboutPage = false }) => {
  return (
    <div className="about-content container-lg py-5">
      <div className="row align-items-center">
        {/* IMAGE */}
        <div className="col-12 col-lg-6 mb-4 mb-lg-0 text-center animate-left">
          <img
            src="/images/about-img.webp"
            className="img-fluid rounded about-img"
            alt="About"
          />
        </div>

        {/* TEXT */}
        <div className="col-12 col-lg-6 ps-lg-5 text-center text-lg-start">
          <h3 className="mb-2 animate-right delay-1">About Us</h3>
          <h2 className="mb-3 animate-right delay-2">Company Profile</h2>

          <div className="loader mb-3 mx-lg-0 mx-auto"></div>

          <p className="animate-up delay-2">
            techsPAR Solutions is a New Delhi–based company with a vision to
            build long-term relationships while delivering high-quality
            services.
          </p>

          <p className="animate-up delay-3">
            We offer website designing, development, SEO, SMO, digital
            marketing, mobile apps, and e-commerce solutions.
          </p>

          <p className="animate-up delay-4">
            We believe in delivering results and building strong partnerships
            with our clients.
          </p>

          <p className="animate-up delay-5">
                Apart from website development, we also specialize in building
                customized web applications that help organizations streamline
                business operations, automate processes, and drive revenue
                growth. As a full-service web design and development agency, we
                deliver high-quality, scalable, and result-oriented digital
                solutions tailored to business needs.
              </p>

          
        </div>
        {/* EXTRA CONTENT ONLY FOR ABOUT PAGE */}
          {isAboutPage && (
            <>
              

              <p className="animate-up delay-6">
                We are experts in managing complete end-to-end registration
                solutions for exhibitions, conferences, and events — both online
                and on-site. Our services include registration management
                systems, data handling, badge printing solutions, networking
                support, and on-ground technical assistance. We provide PCs,
                laptops, printers, networking infrastructure, data entry
                operators, badges, pouches, lanyards, plastic ID cards, RFID
                cards, and magnetic cards to ensure smooth event execution. We
                also deliver detailed post-event reports and data entry
                services.
              </p>

              <p className="animate-up delay-7">
                In addition, we offer a wide range of IT equipment on rent, including
          PCs, laptops, laser printers, inkjet printers, color printers,
          multifunction printers, thermal printers, UPS systems, photocopier
          machines, touch-screen monitors, scanners, barcode scanners, kiosks,
          plasma displays, projectors, and PA systems. Our inventory features
          trusted national and international brands such as HP, Acer, Lenovo,
          Dell, Epson, Canon, and TVSE.
              </p>

              <p className="animate-up delay-8">
                 With strong expertise in system architecture and modern technologies,
          we take pride in delivering innovative, reliable, and efficient
          solutions. Our customer-centric approach, technical excellence, and
          commitment to timely delivery help us consistently exceed client
          expectations. We believe in delivering exactly what we promise — and
          that is what sets us apart.
              </p>
            </>
          )}
      </div>
    </div>
  );
};

export default ContentSection;
