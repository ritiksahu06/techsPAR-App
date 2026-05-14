import React from "react";
import "./LogoMover.css";

function LogoMover() {
  const images = [
        "/images/our-credentials/pamex-2026.webp",
    "/images/our-credentials/gamingshow-converted-from-jpeg.webp",
    "/images/our-credentials/bsx-logo-removebg-preview-converted-from-png.webp",
    "/images/our-credentials/CII-removebg-preview-converted-from-png.webp",
    "/images/our-credentials/bharat-expo-2026-converted-from-jpeg.webp",
    "/images/our-credentials/CII 25th-converted-from-jpeg.webp",
    "/images/our-credentials/bharat-mobility.webp",
    "/images/our-credentials/smart.webp",
    "/images/our-credentials/bharat-expo.webp",
    "/images/our-credentials/bsx-logo.webp",
    "/images/our-credentials/krishi-1.webp",
    "/images/our-credentials/i-auto.webp",
    "/images/our-credentials/imme-2.webp",
    "/images/our-credentials/wood.webp",
    "/images/our-credentials/accma.webp",
    "/images/our-credentials/pamex-24.webp",
  ];

  return (
    // <div className="container">
    //   <div className="logo-slider col-9 mx-auto">
    //     <div className="mt-5 cred-box">
    //       <h1 className=" text-dark">Our Clients</h1>
    //       <div className="loader mt-3"></div>
    //     <div className="logo-track m-2">
    //       {[...images, ...images].map((img, i) => (
    //         <div className="logo-item" key={i}>
    //           <img src={img} alt={`logo-${i}`} className="img-fluid" />
    //         </div>
    //       ))}
    //     </div>
    //     </div>
    //   </div>
    // </div>

    <div className="container">
          <div className="mt-5">
            <h1 className=" text-dark">Our Clients</h1>
          <div className="loader"></div>
          </div>
      <div className="logo-slider col-9 mx-auto border-orange rounded pb-5">

          <div className="logo-track m-2">
            {[...images, ...images].map((img, i) => (
              <div className="logo-item" key={i}>
                <img src={img} alt={`logo-${i}`} className="img-fluid" />
              </div>
            ))}

        </div>
      </div>
    </div>

    //     <div className="container">
    //   <div className="logo-slider col-9 mx-auto">
    //     <div className="mt-5 cred-box">

    //       <h1 className="text-dark">Our Clients</h1>

    //       <div className="loader mt-3"></div>

    //       {/* FIX */}
    //       <div className="overflow-hidden">
    //         <div className="logo-track m-2">
    //           {[...images, ...images].map((img, i) => (
    //             <div className="logo-item" key={i}>
    //               <img
    //                 src={img}
    //                 alt={`logo-${i}`}
    //                 className="img-fluid"
    //               />
    //             </div>
    //           ))}
    //         </div>
    //       </div>

    //     </div>
    //   </div>
    // </div>
  );
}

export default LogoMover;
