// import React from 'react';
// import Banner from '../components/Banner';

// const OurGalleryPage = () => {

//     const images = [
//         "/images/our-gallery/1.jpeg",
//         "/images/our-gallery/2.jpeg",
//         "/images/our-gallery/3.jpeg",
//         "/images/our-gallery/4.jpeg",
//         "/images/our-gallery/5.jpeg",
//         "/images/our-gallery/6.jpeg",
//         "/images/our-gallery/7.png",
//         "/images/our-gallery/8.png",
//         "/images/our-gallery/9.png",
//         "/images/our-gallery/10.png",
//       ];
    

//     return (
//         <div className='bg-light'>
//             {/* Banner Section */}
//             <Banner
//                 title='Our Gallery'
//                 image='./images/our-gallery-banner.png'
//                 breadcrumb={[
//                     { name: "Home", link: "/" },
//                     { name: "Gallery" }
//                 ]}
//             />
 
//             <div className="container my-5">
//                 <div className="row g-2 ">

//                     {images.map((img, index) => (
//                         <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
//                             <img
//                                 src={img}
//                                 alt="gallery"
//                                 className="img-fluid gallery-img p-2 shadow-lg rounded-2"
//                                 style={{height: 220}}
//                             />
//                         </div>
//                     ))}

//                 </div>
//           </div>
//         </div>
//     );
// }

// export default OurGalleryPage;


import React, { useState } from 'react';
import Banner from '../components/Banner';

const OurGalleryPage = () => {

  const [selectedImg, setSelectedImg] = useState(null);

  const images = [
    "/images/our-gallery/1.jpeg",
    "/images/our-gallery/2.jpeg",
    "/images/our-gallery/3.jpeg",
    "/images/our-gallery/4.jpeg",
    "/images/our-gallery/5.jpeg",
    "/images/our-gallery/6.jpeg",
    "/images/our-gallery/7.png",
    "/images/our-gallery/8.png",
    "/images/our-gallery/9.png",
    "/images/our-gallery/10.png",
  ];

  return (
    <div className='bg-light'>

      {/* Banner */}
      <Banner
        title='Our Gallery'
        image='./images/our-gallery-banner.png'
        breadcrumb={[
          { name: "Home", link: "/" },
          { name: "Gallery" }
        ]}
      />

      {/* Gallery */}
      <div className="container my-5">
        <div className="row g-3">

          {images.map((img, index) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
              
              <img
                src={img}
                alt="gallery"
                className="img-fluid gallery-img shadow-lg rounded-2"
                style={{
                  height: "220px",
                  width: "100%",
                  objectFit: "cover",
                  cursor: "pointer"
                }}
                data-bs-toggle="modal"
                data-bs-target="#imageModal"
                onClick={() => setSelectedImg(img)}
              />

            </div>
          ))}

        </div>
      </div>

      {/* Modal */}
      <div
        className="modal fade"
        id="imageModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content bg-transparent border-0">

            <div className="modal-header border-0">
              <button
                type="button"
                className="btn-close bg-white"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div className="modal-body text-center">
              {selectedImg && (
                <img
                  src={selectedImg}
                  alt="preview"
                  className="img-fluid rounded"
                />
              )}
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default OurGalleryPage;