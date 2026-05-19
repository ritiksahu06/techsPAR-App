// // import React from "react";
// // import { Swiper, SwiperSlide } from 'swiper/react';
// // import { Autoplay, Navigation } from "swiper/modules";
// // import "swiper/css"
// // import "./Hero.css";

// // const Hero = () => {

// //   let sliderOptions = {
// //     loop: true,

// //     modules: [Autoplay, Navigation],

// //     autoplay: {
// //       delay: 2000,
// //       disableOnInteraction: false,
// //     },

// //     spaceBetween: 20,
// //     speed: 800,

// //     pagination: {
// //       clickable: true,
// //     },

// //     navigation: true,

// //     breakpoints: {
// //       0: {
// //         slidesPerView: 1,
// //       },
// //       768: {
// //         slidesPerView: 1,
// //       },
// //       992: {
// //         slidesPerView: 1,
// //       },
// //     },
// //   };
// //   return (
// //     <>

// // <Swiper
// //   {...sliderOptions}
// //   className="my-swiper"
// // >
// //         <SwiperSlide><div>
// //           <img src="/images/slide1.jpg" alt="" style={{width: "100%"}} />
// //           </div>
// //           </SwiperSlide>
// //         <SwiperSlide><div>
// //           <img src="/images/slide1.jpg" alt="" style={{width: "100%"}} />
// //           </div>
// //           </SwiperSlide>

// //       </Swiper>

// //     </>
// //   );
// // };

// // export default Hero;

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation, Pagination } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import "./Hero.css";

// const Hero = () => {

//   const sliderOptions = {
//     loop: true,
//     modules: [Autoplay, Navigation, Pagination],

//     autoplay: {
//       delay: 2000,
//       disableOnInteraction: false,
//     },

//     speed: 800,

//     pagination: {
//       clickable: true,
//     },

//     navigation: true,
//   };

//   return (
//     <div className="hero-container">
//       <Swiper {...sliderOptions} className="my-swiper">

//         <SwiperSlide>
//           <div className="slide">
//             <img src="/images/slide1.jpg" alt="" />
//           </div>
//         </SwiperSlide>

//         <SwiperSlide>
//           <div className="slide">
//             <img src="/images/slide1.jpg" alt="" />
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="slide">
//             <img src="/images/slide1.jpg" alt="" />
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="slide">
//             <img src="/images/slide1.jpg" alt="" />
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="slide">
//             <img src="/images/slide1.jpg" alt="" />
//           </div>
//         </SwiperSlide>

//       </Swiper>
//     </div>
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
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
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
            {/* <img src="/images/slide-22.webp" alt="" /> */}
            <img src="/images/techspar-home-slider-1.webp" alt="" />

            <div className="slide-content">
              <p className="small-text">Seamless End-to-End Web</p>
              <p className="small-text">Design & Development</p>
            </div>

            {/* <div className="slide-content">
              <p className="small-text">
                Believe in Client Satisfaction
              </p>

              <h1 className="main-text">
                <span>We’re Passionate about What We Do</span>
                <span>about What We Do</span>
              </h1>
            </div> */}
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide">
            {/* <img src="/images/slide1.webp" alt="" /> */}
            <img src="/images/techspar-home-slider-2.webp" alt="" />
            {/* <img src="/images/slide-slide.webp" alt="" /> */}

            <div className="slide-content">
              <p className="small-text">Committed to Delivering Client</p>
              <p className="small-text">Satisfaction Every Time</p>
            </div>

            {/* <div className="slide-content">
              <p className="small-text">
                Believe in Client Satisfaction
              </p>

              <h1 className="main-text">
                <span>End-to-End Design & Development Process</span>
                <span>Development Process</span>
              </h1>
            </div> */}
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide">
            {/* <img src="/images/slide-11.webp" alt="" /> */}
            {/* <img src="/images/slide-slide-2.avif" alt="" /> */}
            <img src="/images/techspar-home-slider-3.webp" alt="" />

            <div className="slide-content">
              <p className="small-text">We don’t just satisfy clients,</p>
              <p className="small-text">we exceed expectations</p>
            </div>
          </div>
        </SwiperSlide>

        
        

        

      </Swiper>
    </div>
  );
};

export default Hero;
