import React from 'react'
import "./LogoMover.css";

function LogoMover() {

    const images = [
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

        <div className="container">
  <div className="logo-slider col-9 p-5 mx-auto">
    <div className="logo-track">
      {[...images, ...images].map((img, i) => (
        <div className="logo-item" key={i}>
          <img src={img} alt={`logo-${i}`} className="img-fluid" />
        </div>
      ))}
    </div>
  </div>
</div>

  )
}

export default LogoMover