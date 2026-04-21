import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import ContentSection from "../components/ContentSection";
import MissionSection from "../components/MissionSection";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-page bg-body">

      {/* Banner Section */}
      <Banner title='Our-credentials' image='./images/about-us-banner.png' breadcrumb={[
        { name: "Home", link: "/" },
        { name: "About Us" }
      ]} />

      {/* Content Section */}
      <ContentSection />

      <div className="bg-lightgray pt-5">
        <div className="container-fluid about-content text-center">

          {/* Heading */}
          <h3 className="animate-up">Mission, Vision & Value</h3>

          {/* Loader */}
          <div className="loader mb-2 mx-auto"></div>

          {/* Cards */}
          <div className="pb-5">
          <MissionSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;




// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import Banner from "../components/Banner";
// import ContentSection from "../components/ContentSection";
// import MissionSection from "../components/MissionSection";
// import "./AboutPage.css";

// import AOS from "aos";
// import "aos/dist/aos.css";

// const AboutPage = () => {

//   useEffect(() => {
//     AOS.init({
//       duration: 900,
//       once: true,
//       easing: "ease-in-out",
//     });
//   }, []);

//   return (
//     <div className="about-page bg-body">

//       {/* Banner Section */}
//       <div data-aos="fade-down">
//         <Banner 
//           title="Our-credentials" 
//           image="./images/about-us-banner.png" 
//           breadcrumb={[
//             { name: "Home", link: "/" },
//             { name: "About Us" }
//           ]} 
//         />
//       </div>

//       {/* Content Section */}
//       <div data-aos="fade-up" data-aos-delay="100">
//         <ContentSection />
//       </div>

//       {/* Mission Section */}
//       <div className="bg-lightgray pt-5">
//         <div className="container-fluid about-content text-center">

//           {/* Heading */}
//           <h3 data-aos="fade-up">Mission, Vision & Value</h3>

//           {/* Loader */}
//           <div 
//             className="loader mb-2 mx-auto"
//             data-aos="zoom-in"
//             data-aos-delay="100"
//           ></div>

//           {/* Cards */}
//           <div className="pb-5">
//             <div data-aos="fade-up" data-aos-delay="200">
//               <MissionSection />
//             </div>
//           </div>

//         </div>
//       </div>

//     </div>
//   );
// };

// export default AboutPage;