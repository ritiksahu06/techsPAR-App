import React from 'react';
import Banner from '../components/Banner';
import ImageModal from '../components/ImageModal';


const OurProject = () => {

  const images = [
    "/images/our-projects/Auto-Expo Component-2023.webp",
    "/images/our-projects/Bengaluru-Space Expo-2022.webp",
    "/images/our-projects/DOPS.webp",
    "/images/our-projects/futuretech.webp",
    "/images/our-projects/gaming4good.in.webp",
    "/images/our-projects/hawkerston.webp",
    "/images/our-projects/iecs.webp",
    "/images/our-projects/industrialdealing.webp",
    "/images/our-projects/INTERNATIONAL GAMING, ANIMATION AND INFOTAINMENT EVENT     INDIA GAMING SHOW 2023     HOME (1).webp",
    "/images/our-projects/International Space-Conference-Expo-2021.webp",
    "/images/our-projects/ireeindia.webp",
    "/images/our-projects/Kids-FitnessFestival.webp",
    "/images/our-projects/lightroniks.webp",
  ];

  return (
    <div>
      <Banner
        title='Our Projects'
        image='./images/our-gallery-banner.webp'
        breadcrumb={[
          { name: "Home", link: "/" },
          { name: "Our Projects" }
        ]}
      />

      <div className="text-center mt-5">
        <h2 className="fw-bold animate-right">Our Projects</h2>
        <div className="loader mx-auto mt-3 animate-left"></div>
      </div>

      <div className="container my-5">


        <div className="row g-4 mt-4">
          {images.map((img, i) => (
            <div className="col-lg-4 col-md-6 col-12" key={i}>
              <ImageModal img={img} id={i}/>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}

export default OurProject;