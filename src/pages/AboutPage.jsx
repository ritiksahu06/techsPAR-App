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
          <h3 className="">Mission, Vision & Value</h3>

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


