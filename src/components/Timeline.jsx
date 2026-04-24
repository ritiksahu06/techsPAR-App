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

          <div className="section glass border" data-aos="fade-right">
            <h2>Software Solution</h2>
            <p>Planning and zoning are important tools for communication and structured development.
              They help streamline processes, improve coordination, and ensure efficient use of resources for better project outcomes.</p>
          </div>

          <div className="section glass border" data-aos="fade-left">
            <h2>Digital Solution</h2>
            <p>Digital marketing refers to advertising delivered through digital channels.
              It helps businesses reach a wider audience, build brand awareness, and drive measurable results through targeted campaigns.</p>
          </div>

          <div className="section glass border" data-aos="fade-right">
            <h2>Mobile App Development</h2>
            <p>We are passionate about designing and creating intuitive and user-friendly apps.
              Our solutions focus on seamless performance, engaging UI/UX, and delivering a smooth experience across all devices.</p>
          </div>

          <div className="section glass border" data-aos="fade-left">
            <h2>Branding & Printing</h2>
            <p>techsPAR Solutions is a creative branding company, developing strong and impactful brand visions.
              We deliver high-quality design and print solutions that enhance identity, visibility, and customer engagement.</p>
          </div>

          <div className="section glass border" data-aos="fade-right">
            <h2>Event Services</h2>
            <p>We at techsPAR have vast experience in delivering comprehensive event solutions.
              From planning to execution, we ensure seamless coordination, creative setups, and memorable experiences.</p>
          </div>

          <div className="section glass border" data-aos="fade-left">
            <h2>E-Commerce Development</h2>
            <p>Our expertise lies in delivering high-end and feature-rich eCommerce websites.
              We build scalable, secure, and user-friendly platforms that drive conversions and enhance the shopping experience.</p>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default Timeline;