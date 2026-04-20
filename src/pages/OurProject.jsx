import React from 'react';
import Banner from '../components/Banner';
import ImageModal from '../components/ImageModal';


const OurProject = () => {

  const images = [
    "/images/our-projects/Auto-Expo Component-2023.png",
    "/images/our-projects/Bengaluru-Space Expo-2022.png",
    "/images/our-projects/DOPS.png",
    "/images/our-projects/futuretech.png",
    "/images/our-projects/gaming4good.in.png",
    "/images/our-projects/hawkerston.png",
    "/images/our-projects/iecs.png",
    "/images/our-projects/industrialdealing.png",
    "/images/our-projects/INTERNATIONAL GAMING, ANIMATION AND INFOTAINMENT EVENT     INDIA GAMING SHOW 2023     HOME (1).png",
    "/images/our-projects/International Space-Conference-Expo-2021.png",
    "/images/our-projects/ireeindia.png",
    "/images/our-projects/Kids-FitnessFestival.png",
    "/images/our-projects/lightroniks.png",
  ];

    return (
        <div>
            <Banner
                title='Our Projects'
                image='./images/our-gallery-banner.png'
                breadcrumb={[
                    { name: "Home", link: "/" },
                    { name: "Our Projects" }
                ]}
            />

            <div className="text-center mt-5">
                <h2 className="fw-bold">Our Projects</h2>
                <div className="loader mx-auto mt-3"></div>
            </div>

            <div className="container my-5">
  {/* <div className="row g-3 mt-5">

    {[...Array(6)].map((_, i) => (
      <div className="col-lg-4 col-md-6 col-sm-12" key={i}>
        <ImageModal />
      </div>
    ))}

  </div> */}

<div className="row g-5 mt-5">
  {images.map((img, i) => (
    <div className="col-lg-4 col-md-6 col-sm-12 mb-5" key={i}>
      <ImageModal img={img} />
    </div>
  ))}
</div>


</div>

        </div>
    );
}

export default OurProject;

