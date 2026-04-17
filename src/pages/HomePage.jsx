import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Hero from "../components/Hero";
import Timeline from "../components/Timeline";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AboutPage from "./AboutPage";
import ContentSection from "../components/ContentSection";
import MissionSection from "../components/MissionSection";

const HomePage = () => {

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-in-out",
    });
  }, []);
  

  return (
    <>
      <Hero />
      <Timeline />
      <ContentSection /> 
      <MissionSection />
    </>
  );
};

export default HomePage;