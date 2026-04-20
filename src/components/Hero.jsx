// import React from "react";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Navigation } from "swiper/modules";
// import "swiper/css"
// import "./Hero.css";

// const Hero = () => {

//   let sliderOptions = {
//     loop: true,
  
//     modules: [Autoplay, Navigation],
  
//     autoplay: {
//       delay: 2000,
//       disableOnInteraction: false,
//     },
  
//     spaceBetween: 20,
//     speed: 800,
  
//     pagination: {
//       clickable: true,
//     },
  
//     navigation: true,
  
//     breakpoints: {
//       0: {
//         slidesPerView: 1,
//       },
//       768: {
//         slidesPerView: 1,
//       },
//       992: {
//         slidesPerView: 1,
//       },
//     },
//   };
//   return (
//     <>


// <Swiper
//   {...sliderOptions}
//   className="my-swiper"
// >
//         <SwiperSlide><div>
//           <img src="/images/slide1.jpg" alt="" style={{width: "100%"}} />
//           </div>
//           </SwiperSlide>
//         <SwiperSlide><div>
//           <img src="/images/slide1.jpg" alt="" style={{width: "100%"}} />
//           </div>
//           </SwiperSlide>
       
//       </Swiper>

      

//     </>
//   );
// };

// export default Hero;


import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Hero.css";

const Hero = () => {

  const sliderOptions = {
    loop: true,
    modules: [Autoplay, Navigation, Pagination],

    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },

    speed: 800,

    pagination: {
      clickable: true,
    },

    navigation: true,
  };

  return (
    <div className="hero-container">
      <Swiper {...sliderOptions} className="my-swiper">

        <SwiperSlide>
          <div className="slide">
            <img src="/images/slide1.jpg" alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide">
            <img src="/images/slide1.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src="/images/slide1.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src="/images/slide1.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src="/images/slide1.jpg" alt="" />
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Hero;