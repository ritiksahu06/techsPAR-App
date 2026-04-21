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

import React from "react";

const ContentSection = () => {
  return (
    <div className="about-content container-lg py-5">
      <div className="row align-items-center">

        {/* IMAGE */}
        <div className="col-12 col-lg-6 mb-4 mb-lg-0 text-center animate-left">
          <img
            src="/images/about-img.png"
            className="img-fluid rounded about-img"
            alt="About"
          />
        </div>

        {/* TEXT */}
        <div className="col-12 col-lg-6 ps-lg-5 text-center text-lg-start">

          <h3 className="pink mb-2 animate-right delay-1">About Us</h3>
          <h2 className="fw-bold mb-3 animate-right delay-2">Company Profile</h2>

          <div className="loader mb-3 mx-lg-0 mx-auto"></div>

          <p className="animate-up delay-2">
            TechsPAR Solutions is a New Delhi–based company with a vision to
            build long-term relationships while delivering high-quality services.
          </p>

          <p className="animate-up delay-3">
            We offer website designing, development, SEO, SMO, digital marketing,
            mobile apps, and e-commerce solutions.
          </p>

          <p className="animate-up delay-4">
            We believe in delivering results and building strong partnerships
            with our clients.
          </p>

        </div>
      </div>
    </div>
  );
};

export default ContentSection;