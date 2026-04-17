import React, { useEffect, useRef } from "react";

const Timeline = () => {
  const lineRef = useRef(null);
  const fillRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (lineRef.current && fillRef.current) {
        const rect = lineRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        let progress =
          (windowHeight - rect.top) / (rect.height + windowHeight);

        progress = Math.max(0, Math.min(1, progress));

        fillRef.current.style.height = progress * 100 + "%";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
<>
    <section className="hero">
        <p data-aos="fade-up" data-aos-delay="200">
          Our Services
        </p>
        <h1 data-aos="fade-up">We Provide Better Services</h1>
      </section>

    <section className="container">
      <div className="timeline">

        <div className="line" ref={lineRef}>
          <div className="line-fill" ref={fillRef}></div>
        </div>

        <div className="section glass" data-aos="fade-right">
          <h2>Software Solution</h2>
          <p>Planning and zoning are important tools for communicate</p>
        </div>

        <div className="section glass" data-aos="fade-left">
          <h2>Digital Solution</h2>
          <p>Digital marketing refers to advertising delivered through digital channels</p>
        </div>

        <div className="section glass" data-aos="fade-right">
          <h2>Mobile App Development</h2>
          <p>We are passionate about designing and creating intuitive and user-friendly apps</p>
        </div>

        <div className="section glass" data-aos="fade-right">
          <h2>Mobile App Development</h2>
          <p>We are passionate about designing and creating intuitive and user-friendly apps</p>
        </div>

        <div className="section glass" data-aos="fade-right">
          <h2>Mobile App Development</h2>
          <p>We are passionate about designing and creating intuitive and user-friendly apps</p>
        </div>

        <div className="section glass" data-aos="fade-right">
          <h2>Mobile App Development</h2>
          <p>We are passionate about designing and creating intuitive and user-friendly apps</p>
        </div>

      </div>
    </section>
    </>
  );
};

export default Timeline;